
import { db,auth } from "./firebase-config.js";
import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

const lista=document.getElementById("lista");
let total=0;

carrito.forEach(p=>{

let li=document.createElement("li");
li.innerText=p.nombre+" $"+p.precio;
lista.appendChild(li);

total+=p.precio;

});

document.getElementById("total").innerText=total;

async function pagar(){

await addDoc(collection(db,"pedidos"),{
usuario:auth.currentUser?.email || "anon",
productos:carrito,
total:total,
fecha:new Date()
});

localStorage.removeItem("carrito");

window.location="confirmacion.html";

}

window.pagar=pagar;
