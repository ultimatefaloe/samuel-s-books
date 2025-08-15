const screen = document.getElementById("screen");
const form  = document.getElementById('calForm')

// Sign Oprand
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");

// Values
const one = document.getElementById("one");
const two = document.getElementById("two");

let value = "";

function performTask(e){
  var num = e.target.value;
  screen.innerText += num;
  value += num;
}

one.addEventListener('click', (e)=>{
    performTask(e)
})
two.addEventListener('click', (e)=>{
  performTask(e)
})
add.addEventListener('click', (e)=>{
  performTask(e)
})
subtract.addEventListener('click', (e)=>{
  performTask(e)
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const result = eval(value)
  screen.innerText = result;
  console.log(result)
});
