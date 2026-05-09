function login() {

const password = document.getElementById("password").value;

if (password === "dstore2011") {

document.getElementById("login-box").style.display = "none";

document.getElementById("admin-panel").style.display = "block";

showProducts();

showOrders();

} else {

alert("كلمة المرور غير صحيحة");

}

}

function addProduct() {

const name = document.getElementById("pname").value;

const price = document.getElementById("pprice").value;

const image = document.getElementById("pimage").value;

if(name === "" || price === "" || image === ""){

alert("املأ جميع البيانات");

return;

}

let products = JSON.parse(localStorage.getItem("products")) || [];

products.push({

name: name,

price: price,

image: image

});

localStorage.setItem("products", JSON.stringify(products));

alert("تم إضافة المنتج");

showProducts();

}

function showProducts() {

let products = JSON.parse(localStorage.getItem("products")) || [];

const box = document.getElementById("admin-products");

box.innerHTML = "";

products.forEach((product, index) => {

box.innerHTML += `

<div class="product">

<img src="${product.image}" width="200">

<h3>${product.name}</h3>

<p>${product.price} EGP</p>

<button onclick="deleteProduct(${index})">

حذف المنتج

</button>

</div>

`;

});

}

function deleteProduct(index) {

let products = JSON.parse(localStorage.getItem("products")) || [];

products.splice(index, 1);

localStorage.setItem("products", JSON.stringify(products));

showProducts();

}

function showOrders() {

let orders = JSON.parse(localStorage.getItem("orders")) || [];

const box = document.getElementById("orders");

box.innerHTML = "";

orders.forEach(order => {

box.innerHTML += `

<div class="product">

<h3>${order.product}</h3>

<p>العميل: ${order.customer}</p>

<p>الهاتف: ${order.phone}</p>

<p>العنوان: ${order.address}</p>

<p>الدفع: ${order.payment}</p>

<p>الحالة: ${order.status}</p>

</div>

`;

});

  }
