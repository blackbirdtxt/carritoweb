import { db } from "./firebase-config.js";

import {
collection,
getDocs,
addDoc,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const tabla = document.getElementById("tablaProductos");

async function cargarProductos(){

tabla.innerHTML="";

const querySnapshot = await getDocs(collection(db,"productos"));

querySnapshot.forEach((d)=>{

let p = d.data();

let tr = document.createElement("tr");

tr.innerHTML = `
<td>${p.nombre}</td>
<td>$${p.precio}</td>
<td>
<button onclick="eliminar('${d.id}')">Eliminar</button>
</td>
`;

tabla.appendChild(tr);

});

}

window.crearProducto = async ()=>{

let nombre = document.getElementById("nombre").value;
let precio = parseFloat(document.getElementById("precio").value);
let descripcion = document.getElementById("descripcion").value;
let stock = parseInt(document.getElementById("stock").value);

await addDoc(collection(db,"productos"),{

nombre:nombre,
precio:precio,
descripcion:descripcion,
stock:stock

});

alert("Producto agregado");

cargarProductos();

}


window.eliminar = async (id)=>{

await deleteDoc(doc(db,"productos",id));

alert("Producto eliminado");

cargarProductos();

}

cargarProductos();
