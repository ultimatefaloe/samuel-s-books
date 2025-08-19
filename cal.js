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
const cos = document.getElementById("cos");
const sin = document.getElementById("sin");
const tane = document.getElementById("tan");
const ob = document.getElementById("ob");
const cb = document.getElementById("cb");
const squr = document.getElementById("squr");

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
// let value = " ";

function performTask(e){
  var num = e.target.value;
  screenInput.innerText += num;
  value += num;
}

// value = "15+25"
function delValue (e) {
  e.preventDefault()
  if (value.includes("**")){
    var squa
    squa = value.replaceAll("**", "^");
    value = squa.slice(0, -1)
    screenInput.innerText = value
    console.log(value)
  } 
  if (value.includes("Math.sin")){
    var s
    s = value.replaceAll("Math.sin", "sin");
    value = s.slice(0, -1)
    screenInput.innerText = value
    console.log(value)
  }
  if (value.includes("Math.cos")){
    value = value.replaceAll("Math.cos", "cos");
    value = value.slice(0, -1)
    screenInput.innerText = value
    console.log(value)
  }
  if (value.includes("Math.tan")){
    value = value.replaceAll("Math.tan", "tan");
    value = value.slice(0, -1)
    screenInput.innerText = value
    console.log(value)
  }
  if(value !== null){
    value = value.slice(0, -1)
    screenInput.innerText = value
    console.log(value)
    return value
  } else {
    console.log(value);
    console.log("No value is provided")
  }
}
function square (e) {
  e.preventDefault ()
  var squa;
  squa = value.replaceAll("**", "^");
  screenInput.innerText = squa
  console.log(squa)
}
function sine (e) {
  e.preventDefault ()
  var sinValue;
  sinValue = value.replaceAll("Math.sin", "sin");
  screenInput.innerText = sinValue
  console.log(sinValue)
}
function tan (e) {
  e.preventDefault ()
  var sinValue;
  sinValue = value.replaceAll("Math.tan", "tan");
  screenInput.innerText = sinValue
  console.log(sinValue)
}
function cosine (e) {
  e.preventDefault ()
  var sinValue;
  sinValue = value.replaceAll("Math.cos", "cos");
  screenInput.innerText = sinValue
  console.log(sinValue)
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
cos.addEventListener('click', (e)=>{
  performTask(e)
  cosine(e)
})
sin.addEventListener('click', (e)=>{
  performTask(e)
  sine(e)
})
tane.addEventListener('click', (e)=>{
  performTask(e)
  tan(e)
})
ob.addEventListener('click', (e)=>{
  performTask(e)
})
cb.addEventListener('click', (e)=>{
  performTask(e)
})
del.addEventListener('click', (e)=>{
  delValue(e)
})
squr.addEventListener('click', (e)=>{
  performTask(e)
  square(e)
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
