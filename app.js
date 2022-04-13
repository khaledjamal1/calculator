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
let num1 = ""
let num2 = ""
let oepration = ""
function numb(){
    const numk = document.querySelectorAll(".number")
    numk.forEach(number => number.addEventListener("click", (e)=>{
        console.log (parseFloat(e.target.outerText))
    }))
}
function oper(){
    const op = document.querySelectorAll(".operation")
    op.forEach(operation => operation.addEventListener("click", (e)=>{
        return (e.target.outerText)
    }))
}

function cal(num1,operation,num2){
    
}