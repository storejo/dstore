let products = JSON.parse(localStorage.getItem("products")) || [
{
name:"هاتف سامسونج",
price:15000,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
},
{
name:"لاب توب احترافي",
price:30000,
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
}
];

let orders = JSON.parse(localStorage.getItem("orders")) || [];

const productsContainer = document.getElementById("products");

function showProducts(){
productsContainer.innerHTML = "";

products.forEach((product,index)=>{
productsContainer.innerHTML += `
<div class="product">
<img src="${product.image}">
<h3>${product.name}</h3>
<p class="price">${product.price} EGP</p>
<button onclick="buyNow(${index})">شراء الآن</button>
</div>
`;
});
}

showProducts();

function buyNow(index){
localStorage.setItem("selectedProduct",JSON.stringify(products[index]));
window.location.href = "checkout.html";
  }  } else {

    alert("تم إرسال الطلب بنجاح");

  }
}

async function trackOrder() {

  const phone =
    document.getElementById("trackPhone").value;

  const { data, error } = await supabaseClient
    .from("orders")
    .select("*")
    .eq("phone", phone);

  if (data.length > 0) {

    document.getElementById("result").innerHTML =
      "حالة الطلب: " + data[0].status;

  } else {

    document.getElementById("result").innerHTML =
      "لا يوجد طلب بهذا الرقم";

  }
}
