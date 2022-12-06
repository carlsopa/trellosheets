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
              const fetchCardMembers = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardMembers'
              const fetchCardLists = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardLists'
              const fetchLabelData = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/labelData'
              const fetchPriorityData = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/priorityData'
              const fetchCardData = 'https://dr2d89rv2e.execute-api.us-east-1.amazonaws.com/latest/cardData'

              var cm = await fetch(fetchCardMembers)
              var memberData = await cm.text();
              var cl = await fetch(fetchCardLists)
              var listData = await cl.text();
              var ld = await fetch(fetchLabelData)
              var labelData = await ld.text();
              var pd = await fetch(fetchPriorityData)
              var priorityData = await pd.text();
              var cd = await fetch(fetchCardData)
              var cardData = await cd.text();

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
              // listData.map(x=>{
              //   listDict[x.id] = x.name;
              // })
              // console.log(listDict)
              // memberData.map(x=>{
              //   memberDict[x.id] = x.fullName;
              // })
              // labelData.map(x=>{
              //   labelDict[x.id] = x.name;
              // })
              // priorityData[0].options.map(x=>{
              //   priorityDict[x.id] = x.value.text;
              // })
                            
              cardData.map(x=>{
                const cardDict = {};
                cardDict['id'] = x.id;
                cardDict['title'] = x.name;
                cardDict['description'] = x.desc;
                cardDict['url'] = x.url;
                cardDict['comments'] = x.badges.comments;
                cardDict['list'] = listDict[x.idList];
                x.idMembers.forEach((m,index)=>{
                  x.idMembers[index] = memberDict[m]
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
                  cardDict['priority'] = priorityDict[x.customFieldItems[0].idValue]
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

