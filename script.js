// Dark mode toggle

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});


// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});