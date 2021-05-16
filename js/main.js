/////////////MENU HEADER RESPONSIVE/////////////
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav__toggle', 'nav-menu');


///////////////////CARRUSEL//////////////////////////////////
var mediaqueryList = window.matchMedia("(min-width: 768px)");

if(mediaqueryList.matches) {
    new ElderCarousel('.perfiles-creadores-section__perfiles__cards', { items: 3 })
  }else{
    new ElderCarousel('.perfiles-creadores-section__perfiles__cards', { items: 1 })
  }





////////////////////ACORDION BUSCAR-CREADORES///////////


    const tog = document.querySelectorAll(".chevron-toggle-acordion"),
            aco = document.querySelectorAll(".acordion");


for(let i = 0; i < tog.length; i++){
    tog[i].setAttribute('id-item', i);
    aco[i].setAttribute('id-acordion', i);
    tog[i].addEventListener('click', ()=>{
        aco[i].classList.toggle("d-block");
        tog[i].classList.toggle("r-180");
        console.log(aco[i]);
    })
}




/* TITLE E IMG */
// gsap.from('.main-section__img--principal', {opacity: -1, duration: 2.5, delay:.5})
// gsap.from('.home__img', {opacity: -1, duration: 3, x: 100, y:-20})

// // gsap.to('.home__img', {duration: 3, x: 7.5, y:-5, delay:3, repeat: -1, ease: 'power1.inOut', yoyo:true})

// gsap.from('.home__information', {opacity: 0, duration: 1, delay:1.2, y:-30})

// /*BOX*/
// gsap.from('.box__medium', {opacity: 0, duration: 1.5, delay:1.3, y: -50})
// gsap.from('.box__small', {opacity: -1, duration: 1.5, delay:1.4, y: -50})
