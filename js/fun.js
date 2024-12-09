
import data from './data.json' with { type: 'json' };

// data contiene el array de objetos 

// window.onload = init;
// const btn = document.getElementById("btn1");
// const card = document.getElementById("sugerencias");
// const listaUl = document.querySelectorAll(".ullist");
// const widthCard = card.clientWidth;
// function init() {

//     listaUl.forEach(lusi => {

//         const listaLi = lusi.getElementsByTagName("li");
//         console.log(listaLi);
//         // se usa metoda Array.prototype.forEach.call para trabajar con  htmlcollecccions
//         Array.prototype.forEach.call(listaLi, el => {
//             let hyphen = el.querySelector(".hyphen"); // creo variable par poder introducir guiones en espacios en blanco
//             const span = el.querySelector(".sp").offsetWidth; //creo constante span con el ancho en px del texto
//             while (hyphen.offsetWidth + span < widthCard - 50) { //mientras el ancho de guiones + el ancho del texto sean menores al ancho del card
//                 hyphen.textContent += "-";    // se agrega un guion mas al texto        
//             }
//         });
//     });
// }

const array = ["sugerencias", "entrada", "Platos criollos", "Pescados y mariscos", "Tallarin", "Especiales", "Postres y jugos", "Bebidas"];
const box = document.querySelector(".box");
const boxwidth = box.clientWidth;
let cont = 0;
Object.entries(data).forEach(([key, element]) => {  //con objects.entries recorremos los array d objetos
    const div = document.createElement("div");
    DOMTokenList.prototype.add.apply(div.classList, ['subtittle', 'border-bottom', 'border-danger']);//agregamos multiples clasess al div
    div.innerHTML = array[cont]; cont++;         //no logre obtener el nombre de cada objeot asi que cree un array para  poner los tiulos        
    box.appendChild(div);
    const ul = document.createElement("ul");
    DOMTokenList.prototype.add.apply(ul.classList, ['navbar-nav', 'col']); //agregamos multiples clasess al ul

    div.appendChild(ul);

    element.forEach(e => {
        const li = document.createElement("li");
        li.classList.add("nav-item");
        li.classList.add("list");
        ul.appendChild(li);
        li.innerHTML = '<span class="sp">' + e.name + '<span class="hy"></span> $' + e.price + "</span>"
        const sp = li.querySelector(".sp").offsetWidth;
        let hyp = li.querySelector(".hy");

        while (sp + hyp.offsetWidth < boxwidth - 75) { //mientras el ancho de guiones + el ancho del texto sean menores al ancho del box
            hyp.textContent += "-";
        }
    })
});


