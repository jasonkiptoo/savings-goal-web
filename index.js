document.addEventListener('DOMContentLoaded',()=>{

	let form=document.querySelector('form')
	form.addEventListener('submit', (e)=>{
		e.preventDefault()
		//  console.log(e.target.targetAmount.value)
	});

	const submitBtn=document.querySelector("#submitBtn");
	submitBtn.addEventListener("click",()=>{
		calcSavings()
	});
	
//method to calculate how much to save per month
	function calcSavings(){
		const rate=0.1;
		let targetDuration=parseInt(document.getElementById("targetDuration").value)
		var targetAmount=parseInt(document.getElementById("targetAmount").value)
	    let totalSavings=((targetAmount*(rate*targetDuration))+targetAmount)/(12*targetDuration)
			console.log(totalSavings)
		displayAmount(totalSavings,targetDuration)

	}
/////function to display the target amount per month.
	function displayAmount(totalSavings,targetDuration){
		const displayValue=document.getElementById("display-values")
		// let amount=totalSavings;
		// document.getElementById("display-Values-Form").style.border = "thick solid red";
		const amountSaved=document.getElementById('disp-Amount');
		amountSaved.textContent=`Pay ${totalSavings} Ksh every month for the next ${targetDuration} year(s) to achieve your goal !`
		displayValue.appendChild(amountSaved)
	}
	})
  


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '69777ab306msh505ca15cae9f198p15c351jsn20363828244e',
// 		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
// 	}
// };

// fetch('https://car-data.p.rapidapi.com/cars/makes', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '69777ab306msh505ca15cae9f198p15c351jsn20363828244e',
		'X-RapidAPI-Host': 'cardekho.p.rapidapi.com'
	}
};

fetch('https://cardekho.p.rapidapi.com/search?make=%3CREQUIRED%3E&model=%3CREQUIRED%3E', options)
	.then(response => response.json())
	.then(function(data){
		console.log(data)	
		const make=document.querySelector("#ul-id")
    data.slice(0, 10).forEach(makes => {
       const li=document.createElement('h4')
        li.innerHTML=makes.name  
        make.appendChild(li)
    })

	//code to fetch imagees on to the card
	// Change image every 2 seconds
	let slideIndex = 0;
	showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}

})   