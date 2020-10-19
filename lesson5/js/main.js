const menubutton = document.querySelector(".menu");
const mainnav = document.querySelector(".navigation");

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

let date = new Date();
let update = document.lastModified;

document.getElementById("CopyRight-year").innerHTML = date.getFullYear();

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('Updated-date').innerHTML = new Date().toLocaleDateString('en-gb', options); 