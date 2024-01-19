const display = document.querySelector(".calculator-display");
const buttons = document.querySelectorAll("button");

// const two = document.getElementById("button-two");

// function return1(){
//   two.addEventListener("click", ()=>{
//     return 1;
//   })
// }

// console.log(return1());

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function valueInDisplay(value) {
  display.value += value;
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let value = button.textContent;
    if(Number.isInteger(+value)){
      +value++;
    }
    if (value === "C") {
      clearDisplay();
    } else if (value === "=") {
      calculate();
    } else {
      valueInDisplay(value);
    }
  });
});

// function calculate() {
//   try {
//     display.value = calculateExpression(display.value);
//   } catch (error) {
//     display.value = "Error";
//   }
// }

// function calculateExpression(expression) {
//   // Tokenize the expression
//   let tokens = expression.split(/([+\-*/])/).filter(Boolean);

//   // Evaluate the tokens
//   while (tokens.length > 1) {
//     let i = tokens.findIndex(
//       (token, index) => index % 2 === 1 && ["*", "/"].includes(token)
//     );
//     if (i === -1) {
//       i = tokens.findIndex(
//         (token, index) => index % 2 === 1 && ["+", "-"].includes(token)
//       );
//     }
//     let operator = tokens[i];
//     let num1 = parseFloat(tokens[i - 1]);
//     let num2 = parseFloat(tokens[i + 1]);
//     switch (operator) {
//       case "+":
//         tokens.splice(i - 1, 3, String(num1 + num2));
//         break;
//       case "-":
//         tokens.splice(i - 1, 3, String(num1 - num2));
//         break;
//       case "*":
//         tokens.splice(i - 1, 3, String(num1 * num2));
//         break;
//       case "/":
//         tokens.splice(i - 1, 3, String(num1 / num2));
//         break;
//     }
//   }

//   return parseFloat(tokens[0]);
// }
