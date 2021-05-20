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