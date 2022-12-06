// import {google} from 'googleapis';
// gapi.load('client',init);
// const axios = require('axios');
console.log("goodbest google sheet");
console.log('paul')

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
            
            (async function(){
              const cardList = [];

              const fetchCardMembers = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardMembers'
              const fetchCardLists = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardLists'
              const fetchLabelData = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/labelData'
              const fetchPriorityData = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/priorityData'
              const fetchCardData = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardData'

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

              // console.log(memberData);
              // console.log(listData);
              // console.log(labelData);
              // console.log(priorityData);
              // console.log(cardData);
              // console.log(listData);
                            
              cardData.map(x=>{
                const cardDict = {};
                cardDict['id'] = x.id;
                cardDict['title'] = x.name;
                cardDict['description'] = x.desc;
                cardDict['url'] = x.url;
                cardDict['comments'] = x.badges.comments;
                cardDict['list'] = listData[x.idList];
                x.idMembers.forEach((m,index)=>{
                  x.idMembers[index] = memberData[m]
                })
                cardDict['members'] = x.idMembers.join();
                x.idLabels.forEach((l,index)=>{
                  x.idLabels[index] = labelDict[l];
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
                }
                if(x.customFieldItems.length > 0){
                  cardDict['priority'] = priorityData[x.customFieldItems[0].idValue]
                }
                cardList.push(cardDict);
              })

              const finalList = []
              cardList.forEach(x=>{
                finalList.push(Object.values(x))
              })
              console.log(finalList)
              
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

