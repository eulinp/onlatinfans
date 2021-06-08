///////////////////CARRUSEL//////////////////////////////////
var mediaqueryList = window.matchMedia("(min-width: 768px)");

if(mediaqueryList.matches) {
    new ElderCarousel('.perfiles-creadores-section__perfiles__cards', { items: 6 })
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
})
}
