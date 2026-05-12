import {
db
} from "./firebase.js";

import {
collection,
addDoc,
getDocs
} from
"https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const productsContainer =
document.getElementById("productsContainer");

const orderModal =
document.getElementById("orderModal");

let currentProduct = "";

async function loadProducts(){

const querySnapshot =
await getDocs(collection(db,"products"));

querySnapshot.forEach((doc)=>{

const product = doc.data();

productsContainer.innerHTML += `

<div class="product-card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>${product.price} ج.م</p>

<button onclick="openOrder('${product.name}')">
اطلب الآن
</button>

</div>

`;

});

}

window.openOrder = function(productName){

currentProduct = productName;

orderModal.style.display = "flex";

}

document.getElementById("confirmOrder")
.addEventListener("click",async()=>{

const name =
document.getElementById("customerName").value;

const phone =
document.getElementById("customerPhone").value;

const address =
document.getElementById("customerAddress").value;

const payment =
document.getElementById("paymentMethod").value;

await addDoc(collection(db,"orders"),{

name,
phone,
address,
payment,
product:currentProduct,
date:new Date()

});

alert("تم إرسال الطلب بنجاح");

orderModal.style.display = "none";

});

loadProducts();