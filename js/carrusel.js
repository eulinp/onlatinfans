///////////////////CARRUSEL//////////////////////////////////
// var mediaqueryList = window.matchMedia("(min-width: 768px)");

// if(mediaqueryList.matches) {
//     new ElderCarousel('.perfiles-creadores-section__perfiles__cards', { items: 3 })
//   }else{
//     new ElderCarousel('.perfiles-creadores-section__perfiles__cards', { items: 1 })
//   }


//   ////////////////////ACORDION BUSCAR-CREADORES///////////





$(document).ready(function () {
    const tog = document.querySelectorAll(".chevron-toggle-acordion"),
    aco = document.querySelectorAll(".acordion");
  for (let i = 0; i < tog.length; i++) {
    tog[i].setAttribute('id-item', i);
    aco[i].setAttribute('id-acordion', i);
    tog[i].addEventListener('click', () => {
      aco[i].classList.toggle("d-block");
      tog[i].classList.toggle("r-180");
    })
  }

  $(".owl-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    stagePadding: 50,
    loop:true,
    margin:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }

    },
    nav: true,
    navText: [`
    <div class='chevron-toggle-acordion'>
      <ion-icon name='chevron-back-outline'></ion-icon>
    </div>`,`
    <div class='chevron-toggle-acordion'>
      <ion-icon name='chevron-forward-outline'></ion-icon>
    </div>`]
   
        

});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
  });
});