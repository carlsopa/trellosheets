var t = TrelloPowerUp.iframe();

const submitBtn = document.getElementById('submit')
const idValue = document.getElementById('idValue')
let set = false;
t.render(()=>{
	const aa = t.get('board','shared','bid')
		.then(data=>{
			let d = JSON.stringify(data)
			if(d){
				console.log('found')
				set = true;
			} else {
				console.log('missing')
				set = false;
			}
		})
		console.log(aa)
})

submitBtn.addEventListener('click',()=>{
	if(!set){
		t.set('board','shared','bid',idValue.value)
	} else{
		console.log(idValue.value)
	}
	t.closePopup();
})