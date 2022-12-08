var t = TrelloPowerUp.iframe();

const submitBtn = document.getElementById('submit')
const idValue = document.getElementById('idValue')
let set = false;
t.render(()=>{
	t.get('board','shared','bid')
		.then(data=>{
			console.log(data)
			let d = JSON.stringify(data)
			if(d){
				console.log('found')
				set = true;
			} else {
				console.log('missing')
				set = false;
			}
		})
})

submitBtn.addEventListener('click',()=>{
	console.log(set)
	if(!set){
		t.set('board','shared','bid',idValue.value)
	} else{
		console.log(idValue.value)
	}
	t.closePopup();
})