const url = "https://api.nasa.gov/planetary/apod?api_key=yq5ylhafGMwftv9B8A0E753s7LXQeo9TBCh4N0Q3";
// api key: yq5ylhafGMwftv9B8A0E753s7LXQeo9TBCh4N0Q3

// curl -X GET 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.labs.whatWouldMicahSay&access_token=f92b9a6227eb3c653f615c87290c62f3&format=json'

const photo = document.querySelectorAll(".photo");
const descriptionDiv = document.querySelectorAll(".desc")
const modal = document.querySelector("#modal1")
const modalImg = document.querySelector("#modalImg1")
const photoDiv1 = document.querySelector(".photo1")


// fetch a different photo for each div; can I do this all in one fetch?
// apod 1
	fetch(url)
		.then(res => res.json())
		.then(res => {
			// console.log(res)
			// console.log(res.hdurl)
			let photo1 = document.createElement("IMG");
			photo1.setAttribute ("src", res.hdurl);
			photo1.setAttribute ("class", "apod1")
			photoDiv1.appendChild(photo1)
		})
		.catch(err => console.log("err", err))


for (let i=0; i<photo.length; i++){
	photo[i].addEventListener("click", function(evt){
		evt.preventDefault();
		console.log("photo clicked!")
//on click, open modal showing the image blown up.
		modal.style.display = "block";
		modalImg.src = res.hdurl
	})
}


//why isn't it closing?
const closeButton = document.querySelectorAll(".close");

for(let i=0; i<closeButton.length; i++){
	closeButton[i].addEventListener("click", function(evt){
		evt.preventDefault();
		console.log("clicked close")
		modal.style.display = "none";
	})
}

