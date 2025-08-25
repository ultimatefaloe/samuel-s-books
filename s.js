const fnInput = document.getElementById("firstname");
const emailInput = document.getElementById("input_for_email");
const form = document.getElementById("script_form");
const formData = new Object()


formData.firstname = fnInput.value;

form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log(formData);
}); 



