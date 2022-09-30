let value1 = "";
let value2 = "";
let sign = '';
let finish = false;

let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
let operation = ['+', '-', 'X', '/'];

const output = document.querySelector(".output"); 
output.addEventListener("click", function() {
    if(output.value == "0")
    output.value = "";
})

// получаем нажатую кнопку
let btn = document.querySelector('.numbers');
btn.addEventListener("click", GetNumber);

// кнопка АС
document.querySelector(".AC").addEventListener("click", ClearAll);
function ClearAll() {
    value1 = "";
    value2 = "";
    sign = ""
    output.value = "0";
    finish = false;
}


function GetNumber(event) {
// очистить от 0
if(output.value == "0" || output.value == "AC") output.value = "";
// кнопка АС
if(event.target.textContent == "AC") {
    ClearAll(); 

}
const key = event.target.textContent;

// нажатие кнопки
    if(numbers.includes(key)) {
      if(value2 == "" && sign == "") {
      value1 += key;
      console.log(value1);
      output.value = value1;
      console.log(value1, sign, value2);
      }


      else if(value1 !== "" && value2 !== "" && finish) {
      value2 = key;
      finish = false;
      output.value = value2;
      console.log(value1, sign, value2);
      }
      else {
      value2 += key;
      output.value = value2;
      }
      console.log(value1, sign, value2);
      return;
    }


    if(key === '+/-') {
        if(output.value == value1) {
        value1 = -value1;
        output.value = value1;
        } 
        if(output.value == value2) {
        value2 = -value2;
        output.value = value2;
        }

    }
    
    if(operation.includes(key)) {
            sign = key;
            output.value = key;
            console.log(value1, sign, value2);
            return;
    }

    if(key === "%") {
        if(value2 !== "") {
        value2 = value1/100*value2;
        output.value = value2;
        } 
        if(value2 == "") {
        value1 = value1/100;
        output.value = value1;
        } 

    }
    
        
 
// нажата =
    if (key === '=') {
      if(value2 === "") value2 = value1;
      switch(sign) {
        case "+":
            value1 = (+value1) + (+value2);
            break;
        case "-":
            value1 = value1 - value2;
            break;
        case "X":
            value1 = value1 * value2;
            break;
        case "/":
            if(value2 == "0") {
                output.value = "Error";
                value1 = "";
                value2 = "";
                sign = "";
                return;
            }
            value1 = value1 / value2;
            break;
      }
      finish = true;
      output.value = (+value1);
      console.log(value1);

    }
}
