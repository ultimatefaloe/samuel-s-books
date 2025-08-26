const form = document.getElementById("f");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const getUserBtn = document.getElementById("getuser_btn");
const display = document.getElementById("display");
const delData = document.getElementById("delete");

form.addEventListener("submit", (e) => {
  e.preventDefault();
    let data = new Array();

  if (!localStorage.getItem("data")) {
    let person = new Object()
    person.username = username.value;
    person.password = password.value;
    person.email = email.value;

    data.unshift(person)
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));

    password.value = "";
    username.value = "";
    email.value = "";
  } else {
    const prevData = JSON.parse(localStorage.getItem('data'))

    prevData.find(email.value) //if else for verification
    let person = new Object()
    person.username = username.value;
    person.password = password.value;
    person.email = email.value;

    data.unshift(...prevData, person  )

    console.log(data);

    localStorage.setItem("data", JSON.stringify(data));

    password.value = "";
    username.value = "";
    email.value = "";

  }
});

getUserBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const personData = JSON.parse(localStorage.getItem("data"));

  if (personData !== null && personData) {
    let count = 0
    personData.map((person)=>{
        count++
        display.innerHTML += `
            <div class="">
                <p>username: ${person.username}</p>
                <p>password: ${person.password}</p>
                <p>email: ${person.email}</p>
                <button id="delete_${count}">
                    Delete my data from LocalStorage
                </button>
            </div>
        `;
    })
    
  } else {
    display.innerHTML = `
            <div>
                <h1>No data found</h1>
            </div>
        `;
  }
});

delData.addEventListener("click", (e) => {
  localStorage.removeItem("data");
//   email to index how array, then use to select item to delete
// define you updated data, but data as me remove before update data is declear
// JSON.stringy the new updated array back to localStorage

  display.innerHTML = `
            <div>
                <h1>Data deleted</h1>
            </div>
        `;
});
