import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { loadJSON } from "./jsonLoader.js";

console.log("Auth.js loaded");

window.loginUser = async function () {
  console.log("Login function called");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const selectedRole = document.getElementById("role").value;

  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);

    if (!cred.user.emailVerified) {
      await sendEmailVerification(cred.user);
      alert("Verification email sent. Please verify your email first.");
      return;
    }

    const snap = await getDoc(doc(db, "users", cred.user.uid));
    if (!snap.exists()) return alert("User role not assigned");

    const role = snap.data().role;
    if (role !== selectedRole) {
      alert("Role mismatch. Select correct role.");
      return;
    }

    const roles = await loadJSON("/assets/json/roles.json");
    window.location.href = roles[role].dashboard;

  } catch (err) {
    console.error("Login failed", err);
    alert(err.message);
  }
};
