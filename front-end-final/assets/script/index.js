let btnScroll = document.getElementById("btn-scroll");

btnScroll.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
})



window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop > 120 || document.body.scrollTop > 120){
        btnScroll.classList.remove("d-none");
    }
    else{
        btnScroll.classList.add("d-none");
    }
})
////////////////////Scroll top button/////////////////////


// function toggle_visibility(id) {
//     var e = document.getElementById(id);
//     if(e.style.display == 'block')
//        e.style.display = 'none';
//     else
//        e.style.display = 'block';
//  }

// Navbar elements
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const socialIcons = document.querySelector(".nav-icons");
const main = document.querySelector('main');
const header = document.querySelector('header');


navToggle.addEventListener("click", () => {
    console.log(links.classList.contains("show-links"));
    
	links.classList.toggle("show-links");
	socialIcons.classList.toggle("show-nav-icons");

});

window.addEventListener("resize", () => links.classList.remove("show-links"));
window.addEventListener("resize", () => socialIcons.classList.remove("show-nav-icons"));

// Slider elements
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
imageBox = document.querySelector('.image-box');
TextBox = document.querySelector('.text-content');


prevBtn.addEventListener('click', (e)=>{
	e.preventDefault();
	slideToPrev();
	clearInterval(autoRotate,4000);
});

nextBtn.addEventListener('click', (e)=>{
	e.preventDefault();
	slideToNext();
	clearInterval(autoRotate,4000);

});


// Slider functions

function slideToPrev(){
	const activeImage = document.querySelector('.image.active');
	const activeText = document.querySelector('.text.active');
	activeImage.classList.remove('active');
	activeText.classList.remove('active');

	if(activeImage.previousElementSibling != null){
		activeImage.previousElementSibling.classList.add('active');
		activeText.previousElementSibling.classList.add('active');
	}
	else{
		imageBox.lastElementChild.classList.add('active');
		TextBox.lastElementChild.classList.add('active');
	}

}

function slideToNext(){
	const activeImage = document.querySelector('.image.active');
	const activeText = document.querySelector('.text.active');
	activeImage.classList.remove('active');
	activeText.classList.remove('active');

	if(activeImage.nextElementSibling != null){
		activeImage.nextElementSibling.classList.add('active');
		activeText.nextElementSibling.classList.add('active');
	}
	else{
		imageBox.firstElementChild.classList.add('active');
		TextBox.firstElementChild.classList.add('active');
	}
}

const autoRotate = setInterval(slideToNext, 4000);

// ------------maps--------------//

// function myMap() {
// 	var mapCanvas = document.getElementById("map");
// 	var mapOptions = {
// 	  center: new google.maps.LatLng(51.5, -0.2), zoom: 10
// 	};
// 	var map = new google.maps.Map(mapCanvas, mapOptions);
//   }