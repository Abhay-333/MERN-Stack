// ### Project Exercise 10: JavaScript Form Validation

// - **Topic Covered:** JavaScript, HTML
// - **Description:** Create a form that includes fields for name, email, and password. Write a JavaScript function to validate the form before submission. Ensure that the name field is not empty, the email follows a valid email format, and the password meets certain criteria (e.g., minimum length). If the validation fails, display an error message next to the respective field and prevent the form from being submitted. Style the form and error messages for clarity.
// - **Skills Covered:** JavaScript form validation, regular expressions for email validation, handling form events, DOM manipulation, and displaying dynamic error messages.

// `use Strict`;
const form = document.querySelector(".box form");
const input = document.querySelector(".userName input[type = 'text']").value;
const validStr =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-";
let userNameInput = null;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  userNameInput = input;

  if (userNameInput === "") {
    alert("Bhai empty form submit mat karo");
  } else {
    let strArr = userNameInput.split("");
    console.log(strArr);

    for (let i = 0; i < strArr.length; i++) {
      if (validStr.includes(strArr[i])) {
        console.log(true);
      } else {
        alert("Please enter lowercase, uppercase, character \'-', and numbers")
        console.log(false);
        return false;
      }
    }
  }
});

// form.requestSubmit()

const person ={
  userName: "abhay",
  id: 1
}

let id = Symbol("id");
person[id] = "100";