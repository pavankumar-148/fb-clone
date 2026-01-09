// protect page
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "index.html";
}

const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

// show email
userEmail.textContent = localStorage.getItem("userEmail");

// logout
logoutBtn.addEventListener("click", function () {
  localStorage.clear();
  window.location.href = "index.html";
});
