
import { auth } from "./firebase-config.js";
import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

export async function registrar(email,password){
    await createUserWithEmailAndPassword(auth,email,password);
    alert("Usuario creado");
}

export async function login(email,password){
    await signInWithEmailAndPassword(auth,email,password);
    window.location="../inicio.html";
}

export function logout(){
    signOut(auth);
    window.location="../inicio.html";
}
