import { sendEmailVerification } from
"https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

if (!cred.user.emailVerified) {
  await sendEmailVerification(cred.user);
  alert("Verification email sent. Please verify.");
  return;
}
import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { doc, getDoc } from
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { loadJSON } from "./jsonLoader.js";

window.loginUser = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const selectedRole = document.getElementById("role").value;

  const roles = await loadJSON("/assets/json/roles.json");

  const cred = await signInWithEmailAndPassword(auth, email, password);
  const uid = cred.user.uid;

  const snap = await getDoc(doc(db, "users", uid));
  if (!snap.exists()) return alert("User role not assigned");

  const role = snap.data().role;

  if (role !== selectedRole) {
    alert("Role mismatch");
    return;
  }

  window.location.href = roles[role].dashboard;
};
