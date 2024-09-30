const main = document.getElementById('main');
const topbutton = document.querySelector('.backtotop');
const nav = document.querySelector(".container-button");
const navbaritems = document.querySelector(".navbar-ul");
const navbar = document.querySelector(".navbar");


function switchBurguer(x) {
  nav.classList.toggle("change");
  navbaritems.classList.toggle("active");
  navbar.classList.toggle("active");
  main.classList.toggle("inactive");
  topbutton.classList.toggle("inactive");
}

function scrollWin() {
  window.scrollTo(0, 0);
}

window.addEventListener('scroll', function(){
    if (this.window.scrollY > 400){
        topbutton.classList.add("active");
    }else{
        topbutton.classList.remove("active");
    }
});

topbutton.addEventListener('click', function(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
});