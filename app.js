// --- Konfiguracja Firebase ---
const firebaseConfig = {
  apiKey: "AIzaSyAIHn-z2VfBT0efgFQJth9pxXMSm_D5Org",
  authDomain: "login-app-66cf8.firebaseapp.com",
  projectId: "login-app-66cf8",
  storageBucket: "login-app-66cf8.firebasestorage.app",
  messagingSenderId: "571860529777",
  appId: "1:571860529777:web:f9bcbe4d3acd38495561d0"
};

// Inicjalizacja Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// --- Obsługa formularzy ---
const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");

// Rejestracja
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Rejestracja zakończona sukcesem!");
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Logowanie
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Zalogowano!");
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Wylogowanie
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  auth.signOut().then(() => {
    alert("Wylogowano!");
  });
});
