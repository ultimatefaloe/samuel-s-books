const screenResult = document.getElementById("screenResult");
const screenInput = document.getElementById("screenInput");
const form  = document.getElementById('calForm')

// Sign Oprand
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const clear = document.getElementById("clear");
const del = document.getElementById("del");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const percent = document.getElementById("percent");
const point = document.getElementById("point");

// Values
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

let value = "";

function performTask(e){
  var num = e.target.value;
  screenInput.innerText += num;
  value += num;
}

one.addEventListener('click', (e)=>{
    performTask(e)
})
two.addEventListener('click', (e)=>{
  performTask(e)
})
three.addEventListener('click', (e)=>{
  performTask(e)
})
four.addEventListener('click', (e)=>{
  performTask(e)
})
five.addEventListener('click', (e)=>{
  performTask(e)
})
six.addEventListener('click', (e)=>{
  performTask(e)
})
seven.addEventListener('click', (e)=>{
  performTask(e)
})
eight.addEventListener('click', (e)=>{
  performTask(e)
})
nine.addEventListener('click', (e)=>{
  performTask(e)
})
zero.addEventListener('click', (e)=>{
  performTask(e)
})
add.addEventListener('click', (e)=>{
  performTask(e)
})
subtract.addEventListener('click', (e)=>{
  performTask(e)
})
divide.addEventListener('click', (e)=>{
  performTask(e)
})
multiply.addEventListener('click', (e)=>{
  performTask(e)
})
percent.addEventListener('click', (e)=>{
  performTask(e)
})
point.addEventListener('click', (e)=>{
  performTask(e)
})
clear.addEventListener('click', (e)=> {
  var ce = e.target.value;
  screenResult.innerText = ce;
  screenInput.innerText = ce;
  value = ce;
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const result = eval(value)
  screenResult.innerText = result;
  console.log(result)
});
