
const tabla=document.getElementById("carritoTabla");
const totalEl=document.getElementById("total");

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

let total=0;

carrito.forEach(p=>{

let tr=document.createElement("tr");

tr.innerHTML=`
<td>${p.nombre}</td>
<td>$${p.precio}</td>
`;

tabla.appendChild(tr);

total+=p.precio;

});

totalEl.innerText=total;

function comprar(){
window.location="checkout.html";
}

window.comprar=comprar;
