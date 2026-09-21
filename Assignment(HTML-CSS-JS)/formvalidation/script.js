// Select Elements
var form = document.getElementById("registerForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passError").innerText = "";

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var valid = true;

    // Name Validation
    if(name === ""){
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    // Email Validation
    if(!emailPattern.test(email)){
        document.getElementById("emailError").innerText = "Enter valid email";
        valid = false;
    }

    // Password Validation
    if(password.length < 6){
        document.getElementById("passError").innerText = "Password must be at least 6 characters";
        valid = false;
    }

    if(valid){
        alert("Registration Successful");
        form.reset();
    }

});