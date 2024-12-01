window.onload = init;
const btn = document.getElementById("btn1");
const card = document.getElementById("sugerencias");
const listaUl = document.querySelectorAll(".ullist");
const widthCard = card.clientWidth;
function init() {

    listaUl.forEach(lusi => {

        const listaLi = lusi.getElementsByTagName("li");
        console.log(listaLi);
        // se usa metoda Array.prototype.forEach.call para trabajar con  htmlcollecccions
        Array.prototype.forEach.call(listaLi, el => {
            let hyphen = el.querySelector(".hyphen"); // creo variable par poder introducir guiones en espacios en blanco
            const span = el.querySelector(".sp").offsetWidth; //creo constante span con el ancho en px del texto
            while (hyphen.offsetWidth + span < widthCard - 50) { //mientras el ancho de guiones + el ancho del texto sean menores al ancho del card
                hyphen.textContent += "-";    // se agrega un guion mas al texto        
            }
        });
    });
}




