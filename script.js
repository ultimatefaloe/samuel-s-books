const editBtn = document.getElementById("edit_btn");
const saveBtn = document.getElementById("save_btn");
const form = document.getElementById('form')
let btnChange = false;

editBtn.addEventListener("click", (e) => {
  editBtn.style.display = "none";
  saveBtn.style.display = "block";
  console.log("Button clicked");
  console.log(btnChange);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  editBtn.style.display = "block";
  saveBtn.style.display = "none";
  const fname = document.getElementById("firstName");
  const lname = document.getElementById("lastName");

  console.log({
    firstname: fname.value,
    Lastname: lname.value,
  });
});
