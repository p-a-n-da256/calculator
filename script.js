// let num = 42
// let firstName = 'Mihail'
// const isProgrammer = true


/*Can do
let $ = 'test'
let $num = 42
let num$ = 42
let _= 49
let _num = 12
let num_ = 21
let first_name = 'Elena' // это не совсем правильное объявление кода
let myNum = 34 // это уже правильное написание\объявление кода
let num42 = 10
*/

/*Restricted запрещённые названия переменных
let 42num = '11'
let my-num = 1
let false
let const
let let
*/

// firstName = 'Max'
// isProgrammer = false // error because of const

// alert (firstName)
// console.log ('Test', num, firstName)


// console.log(num + 10)
// console.log(num * 23)
// console.log(num - 1)
// console.log(num / 12345)
// console.log(num)

// let num2 = num + 10
// console.log (num, num2)

// num = num2 - num
// num2 = num2 + 1
// console.log (num, num2)


// let num3 = num + (10 * 2) / 5 * 1
// console.log(num3)

// const fullName = firstName + ' Culis'
// const fullName = firstName + ' ' + 'Culis'
// console.log(fullName)


const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const umnojitiBtn = document.getElementById('umnojiti')
const razdelitBtn = document.getElementById('razdelit')
let action = '+'

// console.log(input2.value)
// console.log(resultElement.textContent)
// resultElement.textContent = 42


// console.log(typeof sum)

plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}
umnojitiBtn.onclick = function () {
    action = '*'
}
razdelitBtn.onclick = function () {
    action = '/'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    } 
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    // if (actionSymbol == '+') {
    //     return num1 + num2
    // } else if (actionSymbol == '-') {
    //     return num1 - num2
    if (actionSymbol == '*') {
        return num1 * num2
    } else if (actionSymbol == '/') {
        return num1 / num2
    }

    return actionSymbol == '+' ? num1 + num2 : num1 - num2 
}


submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)


    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult(sum)
    // } else if (action == '-') {
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)
    //     // } else if (action == '*') {
    //     //     const sum = Number(input1.value) * Number(input2.value)
    //     //     printResult(sum)
    //     // } else if (action == '/') {
    //     //     const sum = Number(input1.value) / Number(input2.value)
    //     //     printResult(sum)
    //     // 
    // }

}


// // if (action == '*') {
// //     const sum = Number(input1.value) * Number(input2.value)
// //     resultElement.textContent = sum
// // } else if (action == '/') {
// //     const sum = Number(input1.value) / Number(input2.value)
// //     resultElement.textContent = sum
// }


