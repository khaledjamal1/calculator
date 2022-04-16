
// buttons function
let currentnum = ""
let prenum = ""
let operation = ""



const numk = document.querySelectorAll(".number")
const oper = document.querySelectorAll(".operation")
const current = document.querySelector(".current")
const pred = document.querySelector(".pre")
const equal = document.querySelector(".equal")
const del = document.querySelector(".delete")


numk.forEach(Number => Number.addEventListener("click", (e) =>{
    handlenumber(e.target.textContent)
}))
function handlenumber(number){
    currentnum += number 
    current.textContent = currentnum
}
oper.forEach(operation => operation.addEventListener("click", (e) =>{
    handleoperation(e.target.textContent)
}))
function handleoperation(op){
    if(prenum != ""){
        calculate()
        
    }
    operation = op 
    prenum = currentnum
    currentnum = ""
    current.textContent = ""
    pred.textContent = prenum + op
    
}
equal.addEventListener("click", calculate)
function calculate() {
    prenum = Number(prenum);
    currentnum = Number(currentnum);
    if (operation === "+"){
        prenum = prenum + currentnum
    } else if (operation === "-"){
        prenum = prenum - currentnum
    } else if (operation === "/"){
        prenum = prenum / currentnum  
    } else if (operation === "x"){
        prenum = prenum * currentnum
    }
    currentnum = prenum
    current.textContent = prenum
    prenum=""
    pred.textContent = ""
}
const ac = document.querySelector(".ac")
ac.addEventListener("click", () =>{
    currentnum = ""
    prenum = ""
    current.textContent = ""
    pred.textContent = ""
})
del.addEventListener("click",dele)
function dele(){
    currentnum = currentnum.slice(0,-1)
    current.textContent = currentnum
}
