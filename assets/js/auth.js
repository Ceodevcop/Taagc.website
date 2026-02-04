import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.loginUser = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCred.user.uid;

    const userSnap = await getDoc(doc(db, "users", uid));
    const role = userSnap.data().role;

    if (role === "admin") window.location.href = "dashboard/admin.html";
    if (role === "investor") window.location.href = "dashboard/investor.html";
    if (role === "client") window.location.href = "dashboard/client.html";

  } catch (err) {
    alert("Login failed: " + err.message);
  }
};
