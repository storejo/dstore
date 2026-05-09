const SUPABASE_URL = "اhttps://vdlwplfgdhqljgeqysek.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_z29bkoeLNQ4xRotEQ_33NQ_f9SnsLLt";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function orderNow(productName) {

  const customer_name = prompt("ادخل اسمك");
  if (!customer_name) return;

  const phone = prompt("ادخل رقم الهاتف");
  if (!phone) return;

  const address = prompt("ادخل العنوان");
  if (!address) return;

  const { error } = await supabaseClient
    .from("orders")
    .insert([
      {
        customer_name,
        phone,
        address,
        product_name: productName,
        status: "قيد المراجعة"
      }
    ]);

  if (error) {

    alert("حدث خطأ");
    console.log(error);

  } else {

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