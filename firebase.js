import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

import {
getFirestore
} from
"https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {

apiKey: "ضع apiKey هنا",

authDomain: "ضع authDomain هنا",

projectId: "ضع projectId هنا",

storageBucket: "ضع storageBucket هنا",

messagingSenderId: "ضع messagingSenderId هنا",

appId: "ضع appId هنا"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);