const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginInput = document.getElementById("loginBtn");
const errorText = document.getElementById("error");
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event){
    event.preventDefault();
const email = emailInput.value.trim();
const password = passwordInput.value.trim();

errorText.style.color = "red";
errorText.innerText = "";

//validation 

if(email === "" || password === ""){
    errorText.textContent = "Email and Password are required"
    return;
}

//conditions

if(email.includes("@gmail.com")){
    if(!email.includes("@") && !email.length <5){
    errorText.textContent = "Please enter a valid email";
    }
}
    else{
    if (!/^[0-9]{6,15}$/.test(email)) {
    errorText.textContent = "Please enter a valid email or phone number";
    return;
}
}


if(password.length <6){
    errorText.innerText = "Password must be at least 6 characters";
    return;
}

//success for temporary
errorText.style.color = "green"
errorText.textContent = "Login data is good ";
});
