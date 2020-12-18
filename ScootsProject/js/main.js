/*--------------date--------------*/
let date = new Date();
let update = document.lastModified;

document.getElementById("CopyRight-year").innerHTML = date.getFullYear();
document.getElementById("Updated-date").innerHTML = update;

/*------------navigation------------*/
const menubutton = document.querySelector(".menu");
const mainnav = document.querySelector(".navigation");

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

//form//
function changeRating(int) {
	document.getElementById("currentRating").innerHTML = int;
}