var t = TrelloPowerUp.iframe();

const submitBtn = document.getElementById('submit')
const idValue = document.getElementById('idValue')
const update = document.getElementById('updateLink')
let set = false;
t.render(()=>{
	return t.get('board','shared','bid')
		.then(data=>{
			let d = JSON.stringify(data)
			if(d){
				set = true;
				idValue.value = data;
				idValue.readOnly = true
				update.style.display = true;
				submitBtn.disabled = true;
			} else {
				console.log('missing')
				update.style.display = false;
				set = false;

			}
		})
})

submitBtn.addEventListener('click',()=>{
	console.log(set)
	if(!set){
		console.log(idValue.value)
		return t.set('board','shared','bid',idValue.value)
	} else{
		console.log(idValue.value)
	}
	t.closePopup();
})
update.addEventListener('click',()=>{
	console.log('you want to update');
	idValue.readOnly = false
	submitBtn.disabled = false;
	set = false;
})