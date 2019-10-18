const url = "https://api.nasa.gov/planetary/apod?api_key=yq5ylhafGMwftv9B8A0E753s7LXQeo9TBCh4N0Q3";

const photo = document.querySelectorAll(".photo");
const descriptionDiv = document.querySelectorAll(".desc")
const modal = document.querySelector("#modal1")
const modalImg = document.querySelector("#modalImg1")
const photoDiv1 = document.querySelector(".photo1")

//apod
	fetch(url)
		.then(res => res.json())
		.then(res => {
			// console.log(res)
			// console.log(res.hdurl)
			let photo1 = document.createElement("IMG");
			photo1.setAttribute ("src", res.hdurl);
			photo1.setAttribute ("class", "apod1")
			photoDiv1.appendChild(photo1)
			//modal
			const i = 0;
			photo[i].addEventListener("click", function(evt){
			evt.preventDefault();
			console.log(res);
			console.log("photo clicked!")
		//on click, open modal showing the image blown up.
			modal.style.display = "block";
			modalImg.src = res.hdurl; //link it to the image from nasa again
	})
		})
		.catch(err => console.log("err", err))




//close modal
const closeButton = document.querySelectorAll(".close");

for(let i=0; i<closeButton.length; i++){
	closeButton[i].addEventListener("click", function(evt){
		evt.preventDefault();
		console.log("clicked close")
		modal.style.display = "none";
	})
};

//accordian
const accordian = document.querySelector(".accordian")

	accordian.addEventListener("click", function(evt){
		this.classList.toggle("active");
		const panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});

