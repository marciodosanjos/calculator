
let operatorCalc;
let numberA = "";
let numberB = "";

const screen = document.getElementsByClassName("calculator__screen")[0];

const btn = document.getElementById("btn_result");
const numbers = document.querySelectorAll(".btn-numbers");
const operators = document.querySelectorAll(".btn-operator");

//get numbers
function getValues(number) {
  if (!operatorCalc) {
    numberA += number.target.innerHTML;
    console.log(numberA)
  } else {
    numberB += number.target.innerHTML;
    console.log(numberB)
  }

}

numbers.forEach(number => {
  number.addEventListener('click', getValues);
})

//get operator
function getOperator(operator) {
    let operatorValue = operator.target.innerHTML;
    operatorCalc = operatorValue;
}

operators.forEach(operator => {
  operator.addEventListener('click', getOperator);

});

//calculate
function calculate() {

  if (operatorCalc) {
    switch (operatorCalc) {
      case "+": console.log("Soma");break;
    
      default: "Operacao nao valida"
        break;
    }
    
  }
}

btn.addEventListener('click', calculate)




// const getValues = () => {
//   const btnsNumbers = document.querySelectorAll(".btn-numbers");
//   const operadores = document.querySelectorAll(".btn-operator");
//   const divOperador = document.getElementById("operador");

//   operadores.forEach(function (element) {
//     element.onclick = function () {
//       operator = element.innerText;
//       divOperador.innerHTML = operator;
//     };
//   });

//   const collectNumbers = () =>
//     btnsNumbers.forEach(function (element) {
//       element.onclick = function () {
//         if (!operator) {
//           let divOperator1 = document.getElementById("operando1");
//           arrayOne.push(element.innerHTML);
//           arrayOneFinal = parseInt(arrayOne.join(""));
         
//           divOperator1.innerHTML = arrayOneFinal;
//         } else {
//           let divOperator2 = document.getElementById("operando2");
//           arrayTwo.push(element.innerHTML);
//           arrayTwoFinal = parseInt(arrayTwo.join(""));
     
//           divOperator2.innerHTML = arrayTwoFinal;
//         }
//       };
//     });
//   collectNumbers();


//   const cleanScreen = () => {
//     document.getElementById("operando1").style = "display:none";
//     document.getElementById("operando2").style = "display:none";
//     document.getElementById("operador").style = "display:none";
//   };

//   const calculate = () => {
//     btn.onclick = () => {
//       switch (true) {
//         case operator == "+":
//           cleanScreen();
//           let divMais = document.createElement("div");
//           divMais.innerHTML = arrayOneFinal + arrayTwoFinal;
//           screen.appendChild(divMais);
//           break;

//         case operator == "-":
//           cleanScreen();
//           let divMenos = document.createElement("div");
//           divMenos.innerHTML = arrayOneFinal - arrayTwoFinal;
//           screen.appendChild(divMenos);
//           break;

//         case operator == "*":
//           cleanScreen();
//           let newDivVezes = document.createElement("div");
//           newDivVezes.innerHTML = arrayOneFinal * arrayTwoFinal;
//           screen.appendChild(newDivVezes);
//           break;

//         case operator == "/":
//           cleanScreen();
//           let newscreenDividir = document.createElement("div");
//           newscreenDividir.innerHTML = arrayOneFinal / arrayTwoFinal;
//           screen.appendChild(newscreenDividir);
//           break;

//         default:
//           console.log("Operação não pode ser realizada");
//           break;
//       }
//     };
//   };

//   calculate();

//   reset.onclick = function () {
//     location.reload();
//     document.getElementById("calculator-screen").innerHTML = "";
//   };
// };

// getValues();
