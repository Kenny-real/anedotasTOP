import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBf0C2DBgGPUZuLWvjQVKPLpoX-0gGCZag",
    authDomain: "jokestop-4cc4f.firebaseapp.com",
    projectId: "jokestop-4cc4f",
    storageBucket: "jokestop-4cc4f.appspot.com",
    messagingSenderId: "974445202637",
    appId: "1:974445202637:web:7985ca1a91eec53f55ad84"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
