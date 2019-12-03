const url = "https://api.nasa.gov/planetary/apod?api_key=yq5ylhafGMwftv9B8A0E753s7LXQeo9TBCh4N0Q3";

const photo = document.querySelectorAll(".photo");
const descriptionDiv = document.querySelector(".desc");
const modal = document.querySelector("#modal1");
const modalImg = document.querySelector("#modalImg1");
const photoDiv1 = document.querySelector(".photo1");
const closeButton = document.querySelectorAll(".close")[0];
const accordian = document.querySelector(".accordian");
const panel = document.querySelector(".panel");
let i = 0;

//from NASA APOD API
fetch(url)
	.then(res => res.json())
	.then(res => {
		//photo
		if (res.media_type = "image"){
			let photo1 = document.createElement("IMG");
				photo1.setAttribute ("src", res.hdurl);
				photo1.setAttribute ("class", "apod1");
				photoDiv1.appendChild(photo1);
		} else {
			let photo1 = document.createElement("IMG");
				photo1.setAttribute ("src", "https://apod.nasa.gov/apod/image/1906/gendlerM83-New-HST-ESO-S1024.jpg");
				photo1.setAttribute ("class", "apod1");
				photoDiv1.appendChild(photo1);
		}
		// date
		let date = document.createElement("P");
			date.setAttribute ("class", "date");
			date.innerText = res.date;
			descriptionDiv.appendChild(date);
		//title
		let title = document.createElement("H2");
			title.setAttribute ("class", "photoTitle");
			title.innerText = res.title;
			descriptionDiv.appendChild(title);
		//explanation
		let explanation = document.createElement("P");
			explanation.innerText = res.explanation;
			panel.appendChild(explanation);
		//modal
		photo[i].addEventListener("click", function(evt){
			evt.preventDefault();
			modal.style.display = "block";
			if (res.media_type = "image"){
				modalImg.src = res.url;
			} else {
				modalImg.src = "https://apod.nasa.gov/apod/image/1906/gendlerM83-New-HST-ESO-S1024.jpg";
			}
		})
	})
	.catch(err => console.log("err", err))


//close modal
window.onclick = function(evt) {
	evt.preventDefault();
	if (evt.target == modalImg) {
	  modal.style.display = "none";
	}
}

//accordian
accordian.addEventListener("click", function(evt){
	this.classList.toggle("active");
	const panel = this.nextElementSibling;
	if (panel.style.maxHeight) {
    	panel.style.maxHeight = null;
    } else {
    	panel.style.maxHeight = panel.scrollHeight + "px";
    }
});

