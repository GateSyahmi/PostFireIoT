// Toggle between Login and Signup Forms
function toggleForm() {
    document.getElementById("loginForm").classList.toggle("hidden");
    document.getElementById("signupForm").classList.toggle("hidden");
}

// Handle Login
function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email && password) {
        localStorage.setItem("user", email); // Store user session
        window.location.href = "index.html"; // Redirect to Dashboard
    } else {
        alert("Please enter valid credentials.");
    }
}

// Handle Signup (Placeholder - No real authentication yet)
function signup() {
    alert("Signup functionality not implemented yet.");
}

// Redirect to login if user is not authenticated
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("index.html") && !localStorage.getItem("user")) {
        window.location.href = "login.html"; // Redirect if not logged in
    }
});

// Logout Function
function logout() {
    localStorage.removeItem("user"); // Remove session data
    window.location.href = "login.html"; // Redirect to Login
}
