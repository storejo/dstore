function login() {

let password = document.getElementById("password").value;

if(password === "dstore2011") {

document.getElementById("loginBox").style.display = "none";

document.getElementById("adminPanel").style.display = "block";

alert("تم تسجيل الدخول بنجاح");

} else {

alert("كلمة المرور غير صحيحة");

}

}
