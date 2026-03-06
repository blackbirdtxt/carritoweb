import { auth } from "./firebase-config.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


export async function registrar(email,password){

try{

await createUserWithEmailAndPassword(auth,email,password);

return true;

}catch(error){

throw error;

}

}


export async function login(email,password){

try{

await signInWithEmailAndPassword(auth,email,password);

window.location="../index.html";

}catch(error){

alert("Error al iniciar sesión: "+error.message);

}

}


export function logout(){

signOut(auth)
.then(()=>{

window.location="../index.html";

})
.catch((error)=>{

alert("Error al cerrar sesión");

});

}
