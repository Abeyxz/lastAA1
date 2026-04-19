function validateForm(){

/* CLEAR ALL ERRORS FIRST */
document.getElementById("nameError").innerHTML = "";
document.getElementById("birthError").innerHTML = "";
document.getElementById("sexError").innerHTML = "";
document.getElementById("emailError").innerHTML = "";
document.getElementById("userError").innerHTML = "";
document.getElementById("passError").innerHTML = "";
document.getElementById("confirmError").innerHTML = "";

document.getElementById("dropError").innerHTML = "";
document.getElementById("checkError").innerHTML = "";
document.getElementById("thirdError").innerHTML = "";

document.getElementById("successMessage").innerHTML = "";

let isValid = true;



/* =================================
   PERSONAL INFORMATION
================================= */

/* FULL NAME */
let name = document.getElementById("fullname").value.trim();

if(name === ""){
    document.getElementById("nameError").innerHTML = "Full name is required.";
    isValid = false;
}

if(name.length < 2){
    document.getElementById("nameError").innerHTML = "Name must be at least 2 characters.";
    isValid = false;
}


/* BIRTHDATE */
let birthdate = document.getElementById("birthdate").value;

if(birthdate === ""){
    document.getElementById("birthError").innerHTML = "Birthdate is required.";
    isValid = false;
}

if(birthdate !== ""){

    let birth = new Date(birthdate);
    let today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    if(age < 13){
        document.getElementById("birthError").innerHTML = "User must be 13 years or older.";
        isValid = false;
    }

}


/* SEX (RADIO BUTTON LOOP) */
let sex = document.getElementsByName("sex");
let sexSelected = false;

for(let i = 0; i < sex.length; i++){
    if(sex[i].checked){
        sexSelected = true;
    }
}

if(!sexSelected){
    document.getElementById("sexError").innerHTML = "Please select a sex.";
    isValid = false;
}



/* =================================
   ACCOUNT DETAILS
================================= */

/* EMAIL */
let email = document.getElementById("email").value.trim();

if(email === ""){
    document.getElementById("emailError").innerHTML = "Email is required.";
    isValid = false;
}

if(email !== "" && (!email.includes("@") || !email.includes("."))){
    document.getElementById("emailError").innerHTML = "Email must contain @ and a dot.";
    isValid = false;
}


/* USERNAME */
let username = document.getElementById("username").value.trim();
let usernamePattern = /^[A-Za-z0-9]{8,20}$/;

if(!usernamePattern.test(username)){
    document.getElementById("userError").innerHTML = "Username must be 8–20 letters or digits only.";
    isValid = false;
}


/* PASSWORD */
let password = document.getElementById("password").value;

let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;

if(!passPattern.test(password)){
    document.getElementById("passError").innerHTML =
    "Password must be 10+ characters with uppercase, lowercase, and a digit.";
    isValid = false;
}


/* CONFIRM PASSWORD */
let confirmPassword = document.getElementById("confirmPassword").value;

if(confirmPassword !== password){
    document.getElementById("confirmError").innerHTML = "Passwords must match.";
    isValid = false;
}



/* =================================
   TOPIC QUESTIONS
================================= */

/* DROPDOWN */
let dropdown = document.getElementById("topicSelect").value;

if(dropdown === ""){
    document.getElementById("dropError").innerHTML = "Please choose an option.";
    isValid = false;
}


/* CHECKBOX LOOP */
let checks = document.getElementsByName("interests");
let checked = false;

for(let i = 0; i < checks.length; i++){
    if(checks[i].checked){
        checked = true;
    }
}

if(!checked){
    document.getElementById("checkError").innerHTML = "Select at least one option.";
    isValid = false;
}


/* THIRD QUESTION */
let third = document.getElementById("thirdQuestion").value;

if(third === ""){
    document.getElementById("thirdError").innerHTML = "Please answer this question.";
    isValid = false;
}



/* SUCCESS MESSAGE */

if(isValid){
    document.getElementById("successMessage").innerHTML =
    "Signup successful! Welcome to our community!";
}

return isValid;

}