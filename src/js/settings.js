var t = TrelloPowerUp.iframe();

const submitBtn = document.getElementById('submit')
const idValue = document.getElementById('idValue')
t.render(()=>{
	const aa = t.get('board','shared','bid')
		.then(data=>{
			return JSON.stringify(data)
		})
		console.log(aa)
})

submitBtn.addEventListener('click',()=>{
	console.log(idValue.value);
	t.closePopup();
})