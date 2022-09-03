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
	

	function calcSavings(){
		const rate=0.1;
		var targetDuration=parseInt(document.getElementById("targetDuration").value)
		var targetAmount=parseInt(document.getElementById("targetAmount").value)

	    console.log((targetAmount/(1+(rate*targetDuration))))

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

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '69777ab306msh505ca15cae9f198p15c351jsn20363828244e',
// 		'X-RapidAPI-Host': 'all-cars.p.rapidapi.com'
// 	}
// };

// fetch('https://all-cars.p.rapidapi.com/cars', options)
// 	.then(response => response.json())
// 	.then(function(data){
		
// 		console.log(data)
    

// const make=document.querySelector("#ul-id")

//     data.forEach(makes => {

// 		// makes.forEach(car=>{

// 		// })
//         const li=document.createElement('h4')
//         li.innerHTML=makes.title  
//         make.appendChild(li)
//     })

// })   