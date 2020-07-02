//create a calculator function that accepts
//two numbers and a callback function which will
//some math (add, multiply) on these two numbers.

function calculator (x, y, equipment) {
    const output = equipment(x, y)
    return output
}

function add (x, y) {
    return x + y
}

function multiply (x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

const addOuput = calculator(1, 2, add)
const multiplyOutput = calculator(1, 2, multiply)
const divideOutput = calculator(1, 2, divide)

console.log({
    addOuput,
    multiplyOutput,
    divideOutput,
})
console.assert(addOuput === 3, "Addition expected 3")
console.assert(multiplyOutput === 2, "multiplication expected 2")
console.assert(divideOutput === 0.5, "Division expected 0.5")