/////////////MENU HEADER RESPONSIVE/////////////
var loader = gsap.timeline();
loader.to('#loader>img', {y:-40, duration: 1, repeat: -1, ease: 'power1.inOut', yoyo:true})
window.addEventListener('load', function(){
    loader.to('#loader>img', {height:300,  x:1000, rotate: 640, ease: 'power1.inOut'})
    loader.to('#loader', {x:5000, ease: 'power1.inOut', display: 'none'})


    
        if(document.querySelector('#nav__toggle')){
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
        }
    
        
        if(document.querySelector('.js-example-basic-multiple')){
            $('.js-example-basic-multiple').select2({
                width: '40%',
                placeholder: "Seleccione una categoría",
                theme: "bootstrap4"
            });
            
            $('.js-example-basic-single').select2({
                width: '40%',
                theme: "bootstrap4"
            });
        }

})






/////////////MENU ASIDE RESPONSIVE/////////////
// const showAside = (toggleMenuId, asideId) => {
//     const toggle = document.getElementById(toggleMenuId),
//     nav = document.getElementById(asideId)

//     if(toggle && nav){
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle('toggle-aside')
            
            
//         })
//     }
// }

// showAside('toggle-menu', 'aside-menu');