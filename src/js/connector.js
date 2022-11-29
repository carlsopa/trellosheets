// import {google} from 'googleapis';
// gapi.load('client',init);
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
						const 
						DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4',
						SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';
						// console.log(process.env.API_KEY);
						// console.log(process.env.CLIENT_ID);

						
						let tokenClient,
						gapiInited = false,
      			gisInited = false,
            sheetId = '';

						function gapiLoaded() {
              console.log('gapiloaded');
							gapi.load('client', intializeGapiClient);
						};

						async function intializeGapiClient() {
							await gapi.client.init({
								apiKey: process.env.API_KEY,
								discoveryDocs: [DISCOVERY_DOC],
							});
							gapiInited = true;
							maybeEnableButtons();
						};

						function gisLoaded() {
              console.log('gisloaded');
							tokenClient = google.accounts.oauth2.initTokenClient({
								client_id: process.env.CLIENT_ID,
								scope: SCOPES,
								callback: '', // defined later
							});
							gisInited = true;
							maybeEnableButtons();
						};
            function createSheet(title, callback){
              console.log('create sheet')
              try{
                gapi.client.sheets.spreadsheets.create({
                  properties: {
                    title: title,
                  },
                }).then((response) =>{
                  console.log(response)
                  console.log(response.result.spreadsheetId)
                  sheetId = response.result.spreadsheetId;
                })
              } catch(err){
                console.log(err)
              }
            }
						function maybeEnableButtons() {
							if (gapiInited && gisInited) {
                
								// console.log('finally something good happens for me!')
							}
						};
            createSheet('testing');
						// console.log('you clicked this')
						gapiLoaded();
						gisLoaded();
            console.log(sheetId);
            // console.log(gapiInited);
            // console.log(gisInited);



						// const auth = new google.auth.GoogleAuth({
						// 								keyFile: process.env.GOOGLE_KEY,
						// 								scopes: 'https://www.googleapis.com/auth/spreadsheets'
						// 							});
													const cardList = [];
													const listDict = {};
													const memberDict = {};
													const labelDict = {};
													const priorityDict = {};
													const cardPriorityList = [];

													let context = t.getContext();
								let boardId = context['board'];
								console.log(boardId)
													// const authClientObject = auth.getClient();
													// const googleSheetInstance = google.sheets({version: 'v4',auth: authClientObject});
													const spreadsheetId = '1onix_nrV409KUSIwi_cFMs445_7NEHi9cbwAQlF8WIk';
                          // console.log(googleSheetInstance);

            (async function () {
							

              const cardResponse = await fetch(
                `https://api.trello.com/1/boards/${boardId}/cards?customFieldItems=true&key=8567e52ef0a5c3a9a4a76eb2722ea6d0&token=491a487812cc3fb1d1f188f9e693340640d287f36ef0bac4880c1fb707edbedc`
              );
              let cardData = await cardResponse.text();
              const listResponse = await fetch(
                `https://api.trello.com/1/boards/${boardId}/lists?key=8567e52ef0a5c3a9a4a76eb2722ea6d0&token=491a487812cc3fb1d1f188f9e693340640d287f36ef0bac4880c1fb707edbedc`
              );
              let listData = await listResponse.text();
              const memberResponse = await fetch(
                `https://api.trello.com/1/boards/${boardId}/members?key=8567e52ef0a5c3a9a4a76eb2722ea6d0&token=491a487812cc3fb1d1f188f9e693340640d287f36ef0bac4880c1fb707edbedc`
              );
              let memberData = await memberResponse.text();
              const labelResponse = await fetch(
                `https://api.trello.com/1/boards/${boardId}/labels?key=8567e52ef0a5c3a9a4a76eb2722ea6d0&token=491a487812cc3fb1d1f188f9e693340640d287f36ef0bac4880c1fb707edbedc`
              );
              let labelData = await labelResponse.text();
              const priorityResponse = await fetch(
                `https://api.trello.com/1/boards/${boardId}/customFields?key=8567e52ef0a5c3a9a4a76eb2722ea6d0&token=491a487812cc3fb1d1f188f9e693340640d287f36ef0bac4880c1fb707edbedc`
              );
              let priorityData = await priorityResponse.text();
              let cardPriorityResponse = await fetch(
                `https://api.trello.com/1/boards/${boardId}/cards/?fields=name&customFieldItems=true&key=8567e52ef0a5c3a9a4a76eb2722ea6d0&token=491a487812cc3fb1d1f188f9e693340640d287f36ef0bac4880c1fb707edbedc`
              );
              let cardPriorityResponseData = await cardPriorityResponse.text();

              cardData = JSON.parse(cardData);
              listData = JSON.parse(listData);
              memberData = JSON.parse(memberData);
              labelData = JSON.parse(labelData);
              priorityData = JSON.parse(priorityData);
              cardPriorityResponseData = JSON.parse(cardPriorityResponseData);
							console.log(labelData);

              listData.map((x) => {
                listDict[x.id] = x.name;
              });
              memberData.map((x) => {
                memberDict[x.id] = x.fullName;
              });
              labelData.map((x) => {
                labelDict[x.id] = x.name;
              });
              if(priorityData[0]){
              priorityData[0].options.map((x) => {
                priorityDict[x.id] = x.value.text;
              });
              cardPriorityResponseData.map((x) => {
                if (x.customFieldItems.length > 0) {
                  const cardPriorityDict = {};
                  cardPriorityDict["id"] = x.id;
                  cardPriorityDict["priority value"] =
                    priorityDict[x.customFieldItems];
                  cardPriorityList.push(cardPriorityDict);
                }
              });
            }

              cardData.map((x) => {
                const cardDict = {};
                cardDict["id"] = x.id;
                cardDict["title"] = x.name;
                cardDict["description"] = x.desc;
                cardDict["url"] = x.url;
                cardDict["comments"] = x.badges.comments;
                cardDict["list"] = listDict[x.idList];
                x.idMembers.forEach((m, index) => {
                  x.idMembers[index] = memberDict[m];
                });
                cardDict["members"] = x.idMembers.join();
                x.idLabels.forEach((l, index) => {
                  x.idLabels[index] = labelDict[l];
                });
                cardDict["labels"] = x.idLabels.join(", ");
                if (x.dateLastActivity) {
                  let date = new Date(x.dateLastActivity);
                  date = date.toDateString();
                  cardDict["last activity"] = date;
                }
                if (x.due) {
                  let date = new Date(x.due);
                  date = date.toDateString();
                  cardDict["due date"] = date;
                }
                if (x.customFieldItems.length > 0) {
                  cardDict["priority"] =
                    priorityDict[x.customFieldItems[0].idValue];
                }
                cardList.push(cardDict);
              });
              // cardList.map(x=>{console.log(x.priority)})
              // console.log(cardList);
              const finalList = [];
              cardList.forEach((x) => {
                finalList.push(Object.values(x));
              });
              console.log(finalList);
            })();
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

