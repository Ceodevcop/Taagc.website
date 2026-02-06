import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { doc, getDoc } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const cred = await signInWithEmailAndPassword(auth, email, password);
  if (!cred.user.emailVerified) {
    alert("Please verify your email first.");
    return;
  }

  const snap = await getDoc(doc(db, "users", cred.user.uid));
  const role = snap.data().role;

  if (role === "admin") window.location = "dashboard/admin.html";
  if (role === "investor") window.location = "dashboard/investor.html";
  if (role === "client") window.location = "dashboard/client.html";
};
