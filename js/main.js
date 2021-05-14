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





/* TITLE E IMG */
// gsap.from('.main-section__img--principal', {opacity: -1, duration: 2.5, delay:.5})
// gsap.from('.home__img', {opacity: -1, duration: 3, x: 100, y:-20})

// // gsap.to('.home__img', {duration: 3, x: 7.5, y:-5, delay:3, repeat: -1, ease: 'power1.inOut', yoyo:true})

// gsap.from('.home__information', {opacity: 0, duration: 1, delay:1.2, y:-30})

// /*BOX*/
// gsap.from('.box__medium', {opacity: 0, duration: 1.5, delay:1.3, y: -50})
// gsap.from('.box__small', {opacity: -1, duration: 1.5, delay:1.4, y: -50})
