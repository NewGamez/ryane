import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

    storageBucket: "ryane-noir.firebasestorage.app",
    messagingSenderId: "1086131022422",
    appId: "1:1086131022422:web:d7f8ea5cd0180e2169e9f7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerBtn = document.getElementById("register-btn");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

if(registerBtn) {

    registerBtn.addEventListener("click", () => {

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Account erstellt ✨");
                window.location.href = "dashboard.html";
            })
            .catch(error => {
                alert(error.message);
            });
    });
}

if(loginBtn) {

    loginBtn.addEventListener("click", () => {

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Login erfolgreich ✨");
                window.location.href = "dashboard.html";
            })
            .catch(error => {
                alert(error.message);
            });
    });
}

if(logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        signOut(auth)
            .then(() => {
                window.location.href = "login.html";
            });
    });
}

onAuthStateChanged(auth, user => {

    if(user) {
        console.log("Eingeloggt:", user.email);
    }
});
