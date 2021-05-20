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





////////////////////GRAFICO////////////////////////////////
  
      // anychart.onDocumentReady(function grafico () {
      //   // create data set
      //   var dataSet = anychart.data.set(getData(aud.value, cuo.value));
        
        
       

      //   // map data for the first series, take x from the zero column and value from the first column of data set
      //   var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
  
      //   // map data for the second series, take x from the zero column and value from the second column of data set
      //   var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
  
      //   // create bar chart
      //   var chart = anychart.bar();
  
      //   // turn on chart animation
      //   chart.animation(true);
  
      //   // set padding
      //   chart.padding([10, 20, 5, 20]);
  
      //   // force chart to stack values by Y scale.
      //   chart.yScale().stackMode('value');
  
      //   // format y axis labels so they are always positive
      //   chart
      //     .yAxis()
      //     .labels()
      //     .format(function () {
      //       return Math.abs(this.value).toLocaleString();
      //     });
  
      //   // set title for Y-axis
      //   chart.yAxis(0).title('');
  
      //   // allow labels to overlap
      //   chart.xAxis(0).overlapMode('allow-overlap');
  
      //   // turn on extra axis for the symmetry
      //   chart
      //     .xAxis(1)
      //     .enabled(true)
      //     .orientation('right')
      //     .overlapMode('allow-overlap');
  
      //   // set chart title text
      //   chart.title('Simulador de ganancias');
  
      //   chart.interactivity().hoverMode('by-x');
  
      //   chart
      //     .tooltip()
      //     .title(false)
      //     .separator(false)
      //     .displayMode('separated')
      //     .positionMode('point')
      //     .useHtml(true)
      //     .fontSize(12)
      //     .offsetX(5)
      //     .offsetY(0)
      //     .format(function () {
      //       return (
      //         '<span style="color: #D9D9D9">$</span>' +
      //         Math.abs(this.value).toLocaleString()
      //       );
      //     });
  
      //   // temp variable to store series instance
      //   var series;
  
      //   // create first series with mapped data
      //   series = chart.bar(firstSeriesData);
      //   series.name('Cuota del socio').color('#7135F2');
      //   series.tooltip().position('right').anchor('left-center');
  
      //   // create second series with mapped data
      //   series = chart.bar(secondSeriesData);
      //   series.name('Tamaño de audiencia').color('#05ADD2');
      //   series.tooltip().position('left').anchor('right-center');
  
      //   // turn on legend
      //   chart
      //     .legend()
      //     .enabled(true)
      //     .inverted(true)
      //     .fontSize(13)
      //     .padding([0, 0, 20, 0]);
  
      //   // set container id for the chart
      //   chart.container('container');
  
      //   // initiate chart drawing
      //   chart.draw();
      // });
  
      // function getData(param1, param2) {
      //   return [
      //     ['', param1, -(param2)],
      //   ];
      // }
    






      
      ////////////////////////SIMULADOR INTERACTIVO///////////////
 
        let aud = document.querySelector("#audiencia"),
            cuo = document.querySelector("#cuota");

            aud.addEventListener('change', ()=> {
                document.querySelector("#audienciaSpan").innerHTML = aud.value;
                document.querySelector("#total").innerHTML = total();
                () => {
                  // append data
                  dataSet.append({
                
                    // x value
                    x: -20 + indexSetter,
                
                    // random value from 1 to 500
                    value : Math.floor((Math.random() * 500)+ 1)
                  });
                
                  // removes first point
                  dataSet.remove(0);
                  indexSetter++;
                }, 
                200
            })

            cuo.addEventListener('change', ()=> {
                document.querySelector("#cuotaSpan").innerHTML = cuo.value;
                document.querySelector("#total").innerHTML = total();

            })


            function total(){
                return (Number(aud.value*cuo.value) - Number(aud.value*cuo.value)*10/100);
            }



