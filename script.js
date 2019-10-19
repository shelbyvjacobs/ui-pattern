const url = "https://api.nasa.gov/planetary/apod?api_key=yq5ylhafGMwftv9B8A0E753s7LXQeo9TBCh4N0Q3";

const photo = document.querySelectorAll(".photo");
const descriptionDiv = document.querySelector(".desc")
const modal = document.querySelector("#modal1")
const modalImg = document.querySelector("#modalImg1")
const photoDiv1 = document.querySelector(".photo1")
const closeButton = document.querySelectorAll(".close")[0];
const accordian = document.querySelector(".accordian")
const panel = document.querySelector(".panel");
let i = 0;

//apod
fetch(url)
	.then(res => res.json())
	.then(res => {
		let photo1 = document.createElement("IMG");
			photo1.setAttribute ("src", res.hdurl);
			photo1.setAttribute ("class", "apod1");
			photoDiv1.appendChild(photo1);
		//date
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
			console.log("photo clicked!");
			modal.style.display = "block";
			modalImg.src = res.hdurl;
		})
	})
	.catch(err => console.log("err", err))


//close modal
closeButton.addEventListener("click", function(evt){
	evt.preventDefault();
	console.log("clicked close")
	modal.style.display = "none";
}); //maybe it's not closing because when you click on the X it triggers the closeButton and the photo eventListeners at the same time?
//Cancels itself out???

//accordian
accordian.addEventListener("click", function(evt){
	this.classList.toggle("active");
	const panel = this.nextElementSibling;
	// if (panel.style.display === "block") {
	// 	panel.style.display = "none";
	// } else {
	// 	panel.style.display = "block";
	// }
	if (panel.style.maxHeight) {
    	panel.style.maxHeight = null;
    } else {
    	panel.style.maxHeight = panel.scrollHeight + "px";
    }
});

