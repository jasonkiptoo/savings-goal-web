
const init = ()=>{

	document.getElementById("body-content").style.border = "thin solid black";

console.log("fuckk")

// let imgg=document.createElement('h3');
// fetchComments();

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
		'X-RapidAPI-Host': 'all-cars.p.rapidapi.com'
	}
};

fetch('https://all-cars.p.rapidapi.com/cars', options)
	.then(response => response.json())
	.then(function(data){
		console.log(data)
    

const make=document.querySelector("#ul-id")

    data.forEach(makes => {

		// makes.forEach(car=>{

		// })
        const li=document.createElement('h4')
        li.innerHTML=makes.title  
        	make.appendChild(li)
    })

})}



// 	// .catch(err => console.error(err));

    

// }

    // )
// }






// function fetchComments(){
//     // fetch(`http://localhost:3000/comments`)
//     // fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos`)
//     fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`)
//     // fetch('https://vehapi.com/api/v1/car-lists/get/all/car/makes')
    
//     .then(res=>res.json())

//     .then(function(data){

//         console.log(data)
              
       
//         data.forEach(comment =>{

//             let commentList=document.getElementById("image-src")
//             let commentListt=document.getElementById("ul")
//         let li=document.createElement('li')
//         let lis=document.createElement('ol')

//         li.textContent=comment.author
//         lis.textContent=comment.nome

//         commentList.appendChild(li)
//         commentListt.appendChild(lis)
            
//     }) 
// }
// )
// .catch((err)=>err(console.log("Error")))

// }
    

document.addEventListener('DOMContentLoaded',init)
    