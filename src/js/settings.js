var t = TrelloPowerUp.iframe();

const submitBtn = document.getElementById('submit')
const idValue = document.getElementById('idValue')
t.render(()=>{
	return t.get('board','shared','bid')
		.then(data=>{
			console.log(JSON.stringify(data))
		})
})

submitBtn.addEventListener('click',()=>{
	console.log(idValue.value);
	t.closePopup();
})