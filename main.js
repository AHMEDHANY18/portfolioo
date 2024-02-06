let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 500) {
  mybutton.style.display = "block";
  }else{
    mybutton.style.display = "none";}}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;}
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ["iam Ahmed Hany","iam Software Engineer",""],
        typeSpeed: 100,
        backSpeed: 30,
        startDelay: 100,
        backDelay: 500,
        loop: true,
        showCursor: true,};
    var typed = new Typed('.landing-text h3 span', options);});
var icon=document.getElementById('icon');
icon.onclick=function () {
document.body.classList.toggle("light");
if (document.body.classList.contains("light")){
icon.src="moon.png"
}else{
  icon.src="sun.png"}}