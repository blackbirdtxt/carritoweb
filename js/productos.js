
import { db } from "./firebase-config.js";
import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const cont = document.getElementById("productos");

async function cargar(){

const querySnapshot = await getDocs(collection(db,"productos"));

querySnapshot.forEach(doc=>{

let p = doc.data();

let div = document.createElement("div");
div.className="product";

div.innerHTML=`
<h3>${p.nombre}</h3>
<p>$${p.precio}</p>
<button onclick="agregar('${doc.id}','${p.nombre}',${p.precio})">Agregar</button>
`;

cont.appendChild(div);

});

}

window.agregar=(id,nombre,precio)=>{

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

carrito.push({id,nombre,precio});

localStorage.setItem("carrito",JSON.stringify(carrito));

alert("Producto agregado");

}

cargar();
