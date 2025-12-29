const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginInput = document.getElementById("loginBtn");
const errorText = document.getElementById("error");
const loginForm = document.getElementById("loginForm");
const logoutInput = document.getElementById("logoutBtn")

if(localStorage.getItem("isLoggedIn") === true){
    errorText.style.color = "green";
    errorText.textContent = "Already Logged in";
    logoutInput.style.display = "block";
}

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

// loading state
loginInput.disabled = true;
loginInput.textContent = "Please wait..."
errorText.style.color = "blue";
errorText.textContent = "Logging in...";


//just fake backend
setTimeout(function() {
    if(email === "pavan@gmail.com" && password === "123456"){
        errorText.style.color = "green";
        errorText.textContent = "Login Successful ";

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);

        logoutInput.style.display = "block";

    } else {
        errorText.style.color = "red";
        errorText.textContent = "Invalid Login Credentials";
    }
    loginInput.disabled = false;
    loginInput.textContent = "Login";
}, 2000);

logoutInput.addEventListener("click", function(){
    localStorage.clear();
    errorText.style.color = "red";
    errorText.textContent = "Logged out successfully";
    logoutInput.style.display = "none";
});
});
