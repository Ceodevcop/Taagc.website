import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { doc, getDoc } from
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

window.loginUser = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const uid = cred.user.uid;

    const snap = await getDoc(doc(db, "users", uid));
    if (!snap.exists()) return alert("User role not assigned");

    const userRole = snap.data().role;

    if (userRole !== role) {
      alert("Role mismatch!");
      return;
    }

    window.location.href = `dashboard/${role}.html`;
  } catch (err) {
    alert(err.message);
  }
};
