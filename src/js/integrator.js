var t = TrelloPowerUp.iframe();
const boardId = t.getContext().board;
console.log('data')
console.log(i)

const elm = document.getElementById('subbtn');
console.log('you clicked here');

elm.addEventListener('click',()=>{
	return t.get('board','shared','bid')
		.then(data=>{
			console.log(data)
		});

	// (async function(){
            //   const cardList = [];

            //   const fetchCardMembers = `https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardMembers?id=${boardId}`
            //   const fetchCardLists = `https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardLists?id=${boardId}`
            //   const fetchLabelData = `https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/labelData?id=${boardId}`
            //   const fetchPriorityData = `https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/priorityData?id=${boardId}`
            //   const fetchCardData = `https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardData?id=${boardId}`
            //   const createSheet = `https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/createSheet`
            //   console.log(boardId)

            //   const cm = await fetch(fetchCardMembers)
            //   let memberData = await cm.text();
            //   const cl = await fetch(fetchCardLists)
            //   let listData = await cl.text();
            //   const ld = await fetch(fetchLabelData)
            //   let labelData = await ld.text();
            //   const pd = await fetch(fetchPriorityData)
            //   let priorityData = await pd.text();
            //   const cd = await fetch(fetchCardData)
            //   let cardData = await cd.text();

            //   memberData = JSON.parse(memberData);
            //   listData = JSON.parse(listData);
            //   labelData = JSON.parse(labelData);
            //   priorityData = JSON.parse(priorityData);
            //   cardData = JSON.parse(cardData);

            //   console.log(memberData);
            //   console.log(listData);
            //   console.log(labelData);
            //   console.log(priorityData);
            //   console.log(cardData);
                            
            //   cardData.map(x=>{
            //     const cardDict = {};
            //     cardDict['id'] = x.id;
            //     cardDict['title'] = x.name;
            //     cardDict['description'] = x.desc;
            //     cardDict['url'] = x.url;
            //     cardDict['comments'] = x.badges.comments;
            //     cardDict['list'] = listData[x.idList];
            //     x.idMembers.forEach((m,index)=>{
            //       x.idMembers[index] = memberData[m]
            //     })
            //     cardDict['members'] = x.idMembers.join();
            //     x.idLabels.forEach((l,index)=>{
            //       x.idLabels[index] = labelData[l];
            //     })
            //     cardDict['labels'] = x.idLabels.join(', ');
            //     if(x.dateLastActivity){
            //       let date = new Date(x.dateLastActivity);
            //       date = date.toDateString();
            //       cardDict['last activity'] = date;
            //     }
            //     if(x.due){
            //       let date = new Date(x.due);
            //       date = date.toDateString();
            //       cardDict['due date'] = date;
            //     }
            //     if(x.customFieldItems.length > 0){
            //       cardDict['priority'] = priorityData[x.customFieldItems[0].idValue]
            //     }
            //     cardList.push(cardDict);
            //   })

            //   const finalList = []
            //   cardList.forEach(x=>{
            //     finalList.push(Object.values(x))
            //   })
            //   console.log(finalList)
              
            //   console.log(JSON.stringify(finalList))
            //   const cs = await fetch(createSheet,{method:'POST',body:JSON.stringify(finalList),headers: {'Content-Type': 'application/json'}})
            //   let csResult = await cs.text();
            //   console.log(csResult)
              
            // }())
})
// window.subbtn.addEventListener('click',(event)=>{
// 	console.log('paul is my name')
// })