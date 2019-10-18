console.log("linked")

// const url = url to the api

const photoDiv = document.querySelectorAll(".photo");
const descriptionDiv = document.querySelectorAll(".desc")

//fetch a different photo for each div; can I do this all in one fetch?
	// fetch(url)
	// 	.then(res => res.json())
	// 	.then(res => {
	// 		// console.log(res)
	// 		// console.log(res[0].url)
	// 		let photo = document.createElement("IMG");
	// 		photo.setAttribute ("src", res[0].url);
	// 		photoDiv.appendChild(photo)
	// 	})
	// 	.catch(err => console.log("err"))

for (let i=0; i<photoDiv.length; i++){
	photoDiv[i].addEventListener("click", function(evt){
		evt.preventDefault();
		console.log("photo clicked!")
//on click, open modal showing the image blown up.
	})
}