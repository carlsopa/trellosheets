let BLACK_ROCKET_ICON =
  "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421";

window.TrelloPowerUp.initialize(
  {
    "board-buttons": function (t) {
      return [
        {
          icon: BLACK_ROCKET_ICON,
          text: "Good-beast GSheet integrator",
          callback: function (t) {
            const context = t.getContext()
            console.log(context);
            const boardId = context['version']

            let c = JSON.stringify(context);
            console.log(c['board'])
            // const boardId = t.board('id').then(name=>{return name});
            // const boardName = t.board('name').then(name=>{return name});
            
            (async function(){
              const cardList = [];

              const fetchCardMembers = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardMembers'
              const fetchCardLists = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardLists'
              const fetchLabelData = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/labelData'
              const fetchPriorityData = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/priorityData'
              const fetchCardData = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardData'
              const createSheet = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/createSheet'
              console.log(boardId)

              const cm = await fetch(fetchCardMembers,{method:'POST',body:boardId})
              console.log(cm)
              let memberData = await cm.text();
              console.log(memberData)
              // const cl = await fetch(fetchCardLists,{method:'POST',body:boardId})
              // let listData = await cl.text();
              // const ld = await fetch(fetchLabelData,{method:'POST',body:boardId})
              // let labelData = await ld.text();
              // const pd = await fetch(fetchPriorityData,{method:'POST',body:boardId})
              // let priorityData = await pd.text();
              // const cd = await fetch(fetchCardData,{method:'POST',body:boardId})
              // let cardData = await cd.text();

              // memberData = JSON.parse(memberData);
              // listData = JSON.parse(listData);
              // labelData = JSON.parse(labelData);
              // priorityData = JSON.parse(priorityData);
              // cardData = JSON.parse(cardData);
                            
              // cardData.map(x=>{
              //   const cardDict = {};
              //   cardDict['id'] = x.id;
              //   cardDict['title'] = x.name;
              //   cardDict['description'] = x.desc;
              //   cardDict['url'] = x.url;
              //   cardDict['comments'] = x.badges.comments;
              //   cardDict['list'] = listData[x.idList];
              //   x.idMembers.forEach((m,index)=>{
              //     x.idMembers[index] = memberData[m]
              //   })
              //   cardDict['members'] = x.idMembers.join();
              //   x.idLabels.forEach((l,index)=>{
              //     x.idLabels[index] = labelData[l];
              //   })
              //   cardDict['labels'] = x.idLabels.join(', ');
              //   if(x.dateLastActivity){
              //     let date = new Date(x.dateLastActivity);
              //     date = date.toDateString();
              //     cardDict['last activity'] = date;
              //   }
              //   if(x.due){
              //     let date = new Date(x.due);
              //     date = date.toDateString();
              //     cardDict['due date'] = date;
              //   }
              //   if(x.customFieldItems.length > 0){
              //     cardDict['priority'] = priorityData[x.customFieldItems[0].idValue]
              //   }
              //   cardList.push(cardDict);
              // })

              // const finalList = []
              // cardList.forEach(x=>{
              //   finalList.push(Object.values(x))
              // })
              // console.log(finalList)
              
              // console.log(JSON.stringify(finalList))
              // const cs = await fetch(createSheet,{method:'POST',body:JSON.stringify(finalList),headers: {'Content-Type': 'application/json'}})
              // let csResult = await cs.text();
              // console.log(csResult)
              
            }())
          },
        },
      ];
    },
  },
  {
    appKey: "8567e52ef0a5c3a9a4a76eb2722ea6d0",
    appName: "Good-beast GSheet instegator",
  }
);

