var t = TrelloPowerUp.iframe();

const submitBtn = document.getElementById('submit')
const idValue = document.getElementById('idValue')

submitBtn.addEventListener('click',()=>{
	console.log(idValue.value);
	t.closePopup();
})