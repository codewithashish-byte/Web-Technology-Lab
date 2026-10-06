document.getElementById("registrationForm").addEventListener("submit", function(event) {
event.preventDefault();
let name = document.getElementById("name").value.trim(); let email = document.getElementById("email").value.trim(); let password = document.getElementById("password").value; let phone = document.getElementById("phone").value.trim();
let valid = true;
// Clear previous errors using loop
let errors = document.querySelectorAll(".error");
for (let i = 0; i < errors.length; i++) { errors[i].innerHTML = "";
}
// Name validation if (name == "") {
document.getElementById("nameError").innerHTML = "Name is required";
valid = false;
}
// Email validation
if (email == "" || !email.includes("@")) { document.getElementById("emailError").innerHTML =
"Enter a valid email"; valid = false;
}
// Password validation
if (password.length < 6) { document.getElementById("passwordError").innerHTML =
"Password must contain at least 6 characters"; valid = false;
}
// Phone validation
if (phone.length != 10 || isNaN(phone)) { document.getElementById("phoneError").innerHTML =
"Enter a valid 10-digit phone number"; valid = false;
}
// Final condition if (valid) {
alert("Registration Successful!");
}
});
