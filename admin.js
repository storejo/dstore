importimport { db } from "./firebase.js";

import {
collection,
addDoc,
getDocs
} from
"https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const loginBtn =
document.getElementById("loginBtn");

const loginBox =
document.getElementById("loginBox");

const adminPanel =
document.getElementById("adminPanel");

adminPanel.style.display = "none";

loginBtn.onclick = ()=>{

const password =
document.getElementById("adminPassword").value;

if(password === "dstore2011"){

loginBox.style.display = "none";

adminPanel.style.display = "block";

loadOrders();

}else{

alert("كلمة المرور خاطئة");

}

};

document.getElementById("addProduct")
.onclick = async()=>{

const name =
document.getElementById("productName").value;

const price =
document.getElementById("productPrice").value;

const image =
document.getElementById("productImage").value;

await addDoc(collection(db,"products"),{

name,
price,
image

});

alert("تم إضافة المنتج");

};

async function loadOrders(){

const ordersContainer =
document.getElementById("ordersContainer");

const querySnapshot =
await getDocs(collection(db,"orders"));

document.getElementById("ordersCount")
.innerText = querySnapshot.size;

querySnapshot.forEach((doc)=>{

const order = doc.data();

ordersContainer.innerHTML += `

<div class="order">

<h3>${order.product}</h3>

<p>الاسم: ${order.name}</p>

<p>الهاتف: ${order.phone}</p>

<p>العنوان: ${order.address}</p>

<p>الدفع: ${order.payment}</p>

</div>

`;

});

}