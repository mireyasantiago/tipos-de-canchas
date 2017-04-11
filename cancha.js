alert("mensaje");
// se llaman los id de los botones
var botonFut = document.getElementById("futbol");
var botonBasket = document.getElementById("basket");
var botonTenis = document.getElementById("tenis");
var ocultarCancha= document.getElementById("ocultar");

// se llaman los id de donde estan los contenedores de las conchas
var canchaFut = document.getElementById("canchaFutbol");
var canchaBasket = document.getElementById("canchaBasketball");
var canchaTenis = document.getElementById("canchaTennis");



/*se realiza un switch para que cada vez que se de click en el
 boton correspondiente se muestre la cancha*/
function detectarBoton(event){
    switch(event.toElement){
        case botonFut:

            mostrarCancha(canchaFut);
            break;

        case botonBasket:
            mostrarCancha(canchaBasket);
            break;

        case botonTenis:
            mostrarCancha(canchaTenis);
            break;
    }
}



function mostrarCancha(cancha){
    console.log(event);
    /*con estas propiedades muestra en forma de bloque  */
    cancha.style.display = "block";
}

function ocultarCancha(cancha){
  /*con estas propiedades se ocultara  */
    cancha.style.display = "none";
}

// al hacer click se realizara la funcion correspondiente
botonFut.addEventListener("click",ocultarCancha);
botonFut.addEventListener("click",detectarBoton);
botonBasket.addEventListener("click",detectarBoton);
botonTenis.addEventListener("click",detectarBoton);
