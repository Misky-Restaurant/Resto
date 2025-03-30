
import data from './data.json' with { type: 'json' };

const array = ["sugerencias", "entrada", "Platos criollos", "Pescados y mariscos", "Tallarin", "Especiales", "Postres y jugos", "Bebidas", "Extras"];
const box = document.querySelector(".box");

let cont = 0;
let contid = 1;
Object.entries(data).forEach(([key, element]) => {  //con objects.entries recorremos los array d objetos
    const div = document.createElement("div");
    DOMTokenList.prototype.add.apply(div.classList, ['subtittle', 'border-bottom', 'border-danger', 'mycard']);//agregamos multiples clasess al div
    div.innerHTML = array[cont]; cont++;         //no logre obtener el nombre de cada objeot asi que cree un array para  poner los tiulos        
    div.id = 'id' + contid;
    contid++;
    box.appendChild(div);
    const card = document.querySelector(".mycard");//I select mycard class to get its width 

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

        while (sp + hyp.offsetWidth < card.offsetWidth - 40) { //mientras el ancho de guiones + el ancho del texto sean menores al ancho del box
            hyp.textContent += "-";
        }
    })
});


