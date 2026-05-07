import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
    storageBucket: "DEIN-PROJEKT.appspot.com",
    messagingSenderId: "123456789",
    appId: "APP_ID"
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
