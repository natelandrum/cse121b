/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let add1 = Number(document.querySelector("#add1").value)
    let add2 = Number(document.querySelector("#add2").value)

    document.querySelector("#sum").value = add(add1, add2)
}

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2
}

const subtractNumbers = function (){
    let sub1 = Number(document.querySelector("#subtract1").value)
    let sub2 = Number(document.querySelector("#subtract2").value)

    document.querySelector("#difference").value = subtract(sub1, sub2)
}

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2
}

const multiplyNumbers = () => {
    let mul1 = Number(document.querySelector("#factor1").value)
    let mul2 = Number(document.querySelector("#factor2").value)

    document.querySelector("#product").value = multiply(mul1, mul2)
}

/* Open Function Use - Divide Numbers */
const divide = function (number1, number2) {
    return number1 / number2
}

const divideNumbers = () => {
    let div1 = Number(document.querySelector("#dividend").value)
    let div2 = Number(document.querySelector("#divisor").value)

    document.querySelector("#quotient").value = divide(div1, div2)
}

/* Decision Structure */
const getTotal = () => {
    let subtotal = Number(document.querySelector("#subtotal").value)

    let member = document.querySelector("#member")
    if (member.checked) {
        subtotal -= subtotal * 0.15
    }
    document.querySelector("#total").innerText = `
    $${subtotal.toFixed(2)}`

}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
document.querySelector("#array").innerText = numbers
/* Output Odds Only Array */
document.querySelector("#odds").innerText = numbers
.filter(number => number % 2 === 1)
/* Output Evens Only Array */
document.querySelector("#evens").innerText = numbers
.filter(number => number % 2 === 0)
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerText = numbers
.reduce((sum, number) => sum + number, 0)

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerText = numbers
.map(number => number * 2)
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerText = numbers
.map(number => number * 2)
.reduce((sum, number) => sum + number)

document.querySelector("#addNumbers").addEventListener("click", addNumbers)
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers)
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers)
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers)
document.querySelector("#getTotal").addEventListener("click", getTotal)