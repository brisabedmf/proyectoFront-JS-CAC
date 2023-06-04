
function scrollearA(nombreBoton,idSection){

    const botonScrollear = document.getElementById(nombreBoton);
    const sectionTarget = document.getElementById(idSection);

    botonScrollear.addEventListener('click', function() {
        sectionTarget.scrollIntoView({ behavior: 'smooth' });
    });

}


scrollearA('boton-quiero-ser-orador','convertite-orador');

scrollearA('boton-verde','comprar-tickets');



function validarValor(){

    var input = document.getElementById('categoria').value;
    var valoresPermitidos = ["Estudiante","estudiante", "Trainee", "trainee","Junior","junior"];
  
    if (! valoresPermitidos.includes(input)) {
      alert("Valor invalido. Introduzca uno de los valores permitidos: Estudiante, Trainee o Junior");
      return false;
    }

    return true;
}


function porcentajeSegun(){
    const categoria = document.getElementById('categoria').value;

    if(categoria=="Estudiante" || categoria=="estudiante"){
        return 0.8;
    }

    if(categoria=="Trainee" || categoria=="trainee"){
        return 0.5;
    }

    if(categoria=="Junior" || categoria=="junior"){
        return 0.15;
    }

}

function generarTotalAPagar(){
    const cantidad = document.getElementById('cantidad').value;

    const porcentaje = porcentajeSegun();

    const totalAPagar = 200*cantidad*porcentaje;

    document.getElementById('resultado').textContent = "Total a Pagar: $ " + String(totalAPagar);
}

const botonResumen = document.getElementById('resumen');

botonResumen.addEventListener('click', function(event) {
    
    event.preventDefault(); 

    if(validarValor()){
        generarTotalAPagar();
    }

});