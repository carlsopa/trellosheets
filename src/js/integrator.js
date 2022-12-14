var t = TrelloPowerUp.iframe();
const boardId = t.getContext().board;

const elm = document.getElementById('subbtn');

async function getPlugin(id){
  const fetchCardPlugin = `https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardPlugin?id=${id}`
  const cp = await fetch(fetchCardPlugin)
  let pluginData = await cp.text();
  pluginData = JSON.parse(pluginData);
  if (pluginData[0] != undefined){
    return pluginData[0]['value'].split(':').pop().split('')[0]
  }
  else {
    return null
  }
}

elm.addEventListener('click',()=>{
	return t.get('board','shared','bid')
  .then(data=>{
    (async function(){
      const sheetId = data;
      const mm = {};

      const fetchCardMembers = `https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardMembers?id=${boardId}`
      const fetchCardLists = `https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardLists?id=${boardId}`
      const fetchLabelData = `https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/labelData?id=${boardId}`
      const fetchPriorityData = `https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/priorityData?id=${boardId}`
      const fetchCardData = `https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardData?id=${boardId}`
      const createSheet = `https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/createSheet`

      const cm = await fetch(fetchCardMembers)
      let memberData = await cm.text();
      const cl = await fetch(fetchCardLists)
      let listData = await cl.text();
      const ld = await fetch(fetchLabelData)
      let labelData = await ld.text();
      const pd = await fetch(fetchPriorityData)
      let priorityData = await pd.text();
      const cd = await fetch(fetchCardData)
      let cardData = await cd.text();

      memberData = JSON.parse(memberData);
      listData = JSON.parse(listData);
      labelData = JSON.parse(labelData);
      priorityData = JSON.parse(priorityData);
      cardData = JSON.parse(cardData);
      memberData.map(x=>{
        mm[x.id] = x.fullName;
      })

      const cardListPromises = cardData.map(async(x)=>{
        const cardDict = {};
        cardDict['id'] = x.id;
        cardDict['title'] = x.name;
        cardDict['description'] = x.desc;
        cardDict['url'] = x.url;
        cardDict['comments'] = x.badges.comments;
        cardDict['list'] = listData[x.idList];
        x.idMembers.forEach((m,index)=>{
          x.idMembers[index] = mm[m]
        })
        cardDict['members'] = x.idMembers.join();
        x.idLabels.forEach((l,index)=>{
          x.idLabels[index] = labelData[l];
        })
        cardDict['labels'] = x.idLabels.join(', ');
        if(x.dateLastActivity){
          let date = new Date(x.dateLastActivity);
          date = date.toDateString();
          cardDict['last activity'] = date;
        }
        if(x.due){
          let date = new Date(x.due);
          date = date.toDateString();
          cardDict['due date'] = date;
        } else {
          cardDict['due date'] = '';
        }
        if(x.customFieldItems.length > 0){
          cardDict['priority'] = priorityData[x.customFieldItems[0].idValue]
        } else {
          cardDict['priority'] = ''
        }
        cardDict['points'] = await getPlugin(x.shortLink);
        return cardDict;
      })
      const cardList = await Promise.all(cardListPromises)
                    
      const finalList = []
      finalList.push(['id','title','description','url','comments','list name','members','labels','last active','due','priority','story points'])
      cardList.forEach(x=>{
        finalList.push(Object.values(x))
      })
      const list = {'id':sheetId,data:finalList}

      const cs = await fetch(createSheet,{method:'POST',body:JSON.stringify(list),headers: {'Content-Type': 'application/json'}})
      let csResult = await cs.text();  
    }())
  });	
})
