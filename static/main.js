"use strict";
/*Loading */
//POINTER POSITION

window.addEventListener("beforeunload", function(event){
    
    document.title = "Sali de la pagina";

});

//
//DECLARACION DE FUNCIONES

//BOM
//window



function showLoading() {
    document.getElementsByClassName("loader")[0].style.display = "flex";
}

function hideLoading() {
    document.getElementsByClassName("loader")[0].style.display = "none";
}

const LOADER = document.getElementsByClassName("spinner");
var width_spinner = 10;
var INCREMENTO_WITH = 5;

for (let i = 0; i < LOADER.length; i++) {
    let newWidth = width_spinner + INCREMENTO_WITH;
    LOADER[i].style.width = newWidth + "px";
    LOADER[i].style.height = newWidth + "px";
    width_spinner = newWidth;
}


document.addEventListener("DOMContentLoaded", function () {
    showLoading();
    setTimeout(function () {
        // Ocultar el loading después de cierto tiempo
        hideLoading();
    }, 2000);
});
/*Loading */


/*Toggle*/
const TOGGLE = document.getElementsByClassName("btn-toggle")[0];
const NAV_MENU = document.getElementsByClassName("nav-menu");
const BTN_CLOSE = document.getElementById("btn-cerrar-menu");
const ITEMS_MENU = document.getElementsByClassName("items-menu");

TOGGLE.addEventListener("click", function () {
    NAV_MENU[0].classList.add("active");
});

/*

// se agrega una función de devolución de llamada (callback) usando una arrow function (() => { ... }) como segundo argumento del método addEventListener
TOGGLE.addEventListener("click", () =>{
    NAV_MENU[0].classList.toggle("active");
});
*/

BTN_CLOSE.addEventListener("click", function () {
    NAV_MENU[0].classList.remove("active");
});

for (let i = 0; i < ITEMS_MENU.length; i++) {
    ITEMS_MENU[i].addEventListener("click", function () {
        NAV_MENU[0].classList.remove("active");
    });
};
/*Toggle*/



const CATEGORIAS_PARTICIPANTES = {
    "Estudiante": 80,
    "Trainee": 50,
    "Junior": 15
};

const clave = Object.keys(CATEGORIAS_PARTICIPANTES);


const COLOR_CATEGORIAS = ["blue", "green", "yellow"];

const ITEMS_CATEGORIAS = document.getElementById("containerDivsDEsct");

const ITEM = ITEMS_CATEGORIAS.querySelectorAll("div");
const VALUE_DCST = ITEMS_CATEGORIAS.querySelectorAll("h3");


for (let it = 0; it < ITEM.length; it++) {
    ITEM[it].style.border = `1px solid ${COLOR_CATEGORIAS[it]}`; //change border color for each item in the container 
    VALUE_DCST[it].textContent = `${Object.values(CATEGORIAS_PARTICIPANTES)[it]} %`; //send value to discount
};



const VALOR_TICKET = parseInt(200);  //Valor inicial del ticket

document.getElementById("valorTkc").textContent = `Valor del ticket $ ${VALOR_TICKET}`;

// Definicion de variables
var totalAPagar = 0;  
var totalAPagarconDescuento = 0;
var total_a_pagar_sin_descuento = 0;
var total_a_pagar_con_descuento = 0 ;
var descuentoAplicado = 0;





const BTN_RESUMEN = document.getElementById("resumenPago"); //obtenemos el boton de resumen
const div_ResumenCompra = document.getElementById("resumenDeCompra"); //Obtenemos el div completo del resumen
const CATEGORIA_COMPRADOR = document.getElementById("categoriaComprador");
const BTN_CONFIRMAR_COMPRA =  document.getElementById("confirmarCompra");
const SECTION_FORM_COMPRA = document.getElementById("seccionTicket");
const BTN_COMPRAR_TICKETS = document.getElementById("btnComprarTickets");
const ITEM_NAV_COMPRAR_TICKETS = document.getElementById("comprartickets");



BTN_RESUMEN.addEventListener("click", function () {
    
    div_ResumenCompra.style.display = "block"; //Inicialmente en css tenemos un display: none;
    BTN_RESUMEN.style.display = "none";
BTN_CONFIRMAR_COMPRA.style.display = "block";
    var cantidad_tickets = parseInt(document.getElementById("cantidad_tickets").value);

//sin descuento
    function calcularPrecio() {
        totalAPagar = cantidad_tickets * VALOR_TICKET;
        
        return totalAPagar;
    }

/*=================== */
    //PRECIO CON DESCUENTO
    function conDescuento(total){
        const SELECT_ITEM = document.getElementById("category").options[document.getElementById("category").selectedIndex].value;
        console.log(SELECT_ITEM);
        switch(SELECT_ITEM){
        case "estudiante" :
            totalAPagarconDescuento = total*0.20;
            break;
            case "trainee":
            totalAPagarconDescuento = total*0.5;
            break;
        case "junior":
            totalAPagarconDescuento = total*0.85;
            break;
        }
        return totalAPagarconDescuento;
    }
        /*==========================*/

    total_a_pagar_sin_descuento = calcularPrecio();
    total_a_pagar_con_descuento = conDescuento(total_a_pagar_sin_descuento);
    descuentoAplicado = total_a_pagar_sin_descuento -  total_a_pagar_con_descuento ;
    
    const SELECT_ITEM = document.getElementById("category").options[document.getElementById("category").selectedIndex].value;
    

    CATEGORIA_COMPRADOR.textContent = SELECT_ITEM;
    document.getElementById("cantidadIngresada").textContent = cantidad_tickets;
    document.getElementById("totalSDscto").textContent = total_a_pagar_sin_descuento;
    document.getElementById("totalPagoConDescuento").textContent = descuentoAplicado;
    document.getElementById("totalPagoResumen").textContent = (parseFloat(total_a_pagar_con_descuento).toFixed(2));
});

/*BOTON PARA LIMPIAR LOS DATOS*/
const BOTON_BORRAR_FORM = document.getElementById("borrarForm");

BOTON_BORRAR_FORM.addEventListener("click", function () {
    document.getElementById("comprartktForm").reset();
    div_ResumenCompra.style.display = "none";
    BTN_RESUMEN.style.display = "block";
    BTN_CONFIRMAR_COMPRA.style.display = "none";
});
/*BOTON PARA LIMPIAR LOS DATOS*/


BTN_CONFIRMAR_COMPRA.addEventListener("click",function(){
    
    alert("Gracias por su compra")
    
    SECTION_FORM_COMPRA.style.display = "none";
})


BTN_COMPRAR_TICKETS.addEventListener("click", function () {
    SECTION_FORM_COMPRA.style.display = "block";
    div_ResumenCompra.style.display = "none";
    
})

ITEM_NAV_COMPRAR_TICKETS.addEventListener("click", function () {
    div_ResumenCompra.style.display = "none";
    SECTION_FORM_COMPRA.style.display = "block";
})

