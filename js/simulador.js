      ////////////////////////SIMULADOR INTERACTIVO///////////////
      let aud = document.querySelector("#audiencia"),
      cuo = document.querySelector("#cuota");

      aud.addEventListener('change', ()=> {
          document.querySelector("#audienciaSpan").innerHTML = aud.value;
          document.querySelector("#total").innerHTML = total();
      })

      cuo.addEventListener('change', ()=> {
          document.querySelector("#cuotaSpan").innerHTML = cuo.value;
          document.querySelector("#total").innerHTML = total();

      })


      function total(){
          return (Number(aud.value*cuo.value) - Number(aud.value*cuo.value)*10/100);
      }


