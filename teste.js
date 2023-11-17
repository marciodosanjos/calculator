const operandoA = () => {

    let arr1 = [];
    let arrJoin1 = [];
    btnsNumbers.forEach(function (element) {
        //criando a div de id operando1
        element.onclick = function () {

        }
    })

}

const operador = () => {
    const operadores = document.querySelectorAll(".btn-operation");
    const divOperador = document.getElementById("operador");

    //0 - variável que vai armazenar o operador
    let operador = "";

    //2 - pegando valor do operador 
    operadores.forEach(function (element) {

        element.onclick = function () {
            operador = element.innerText;
            divOperador.innerHTML = operador;
            screen.appendChild(divOperador)
        }
    })

}

const operandoB = () => {

    let arr2 = [];
    let arrJoin2 = [];
    btnsNumbers.forEach(function (element) {
        //criando a div de id operando1
        element.onclick = function () {
            arr1.push(element.innerHTML);
            arrJoin2 = arr2.join("");
            let divOperando2 = document.getElementById("operando2");
            divOperando2.innerHTML = parseInt(arrJoin2);
        }
    })

}