// oeprations
function add(num1,num2){
    return num1+num2
}
function sub(num1,num2){
    return num1-num2
}
function multi(num1,num2){
    return num1*num2
}
function divide(num1,num2){
    return num1/num2
}
// buttons function
let num1 =+ numb()
let num2 = ""
let operation = oper()
function numb(){
    const numk = document.querySelectorAll(".number")
    numk.forEach(number => number.addEventListener("click", (e)=>{
        current.textContent += (e.target.innerText)
    }))
}
function oper(){
    const op = document.querySelectorAll(".operation")
    op.forEach(operation => operation.addEventListener("click", (e)=>{
        return (e.target.outerText)
        console.log(e.target.outerText)
    }))
}
// cal
const scr = document.querySelector(".output")
const pre = document.querySelector(".pre")
const current = document.querySelector(".current")
function test1(){
    let test = numb()
    console.log(test)
}


numb()
