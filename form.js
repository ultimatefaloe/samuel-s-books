const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const form = document.getElementById("userForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let Person = new Object();
  let data = new Array();
  Person.nameValue = nameInput.value;
  Person.emailValue = emailInput.value;
  Person.usernameValue = usernameInput.value;
  data.unshift(Person);

  if (localStorage.getItem("users")) {
    const prevData = JSON.parse(localStorage.getItem("users"));
    const newData = [...prevData, data];
    localStorage.setItem("users", JSON.stringify(newData));
  } else {
    localStorage.setItem("users", JSON.stringify(data));
  }
});
