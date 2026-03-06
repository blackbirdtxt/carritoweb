
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCochv627I1dkM_brNkYMmJyH9FO5LJgNI",
  authDomain: "carrito-web-928bf.firebaseapp.com",
  projectId: "carrito-web-928bf",
  storageBucket: "carrito-web-928bf.firebasestorage.app",
  messagingSenderId: "410039719184",
  appId: "1:410039719184:web:e2aa06ce2216c862f78195",
  measurementId: "G-C741QWJ9D7"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
