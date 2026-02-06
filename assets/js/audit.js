import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { doc, getDoc } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const cred = await signInWithEmailAndPassword(auth, email, password);
  const snap = await getDoc(doc(db, "users", cred.user.uid));

  const role = snap.data().role;

  if (role === "admin") location.href = "dashboard/admin.html";
  if (role === "investor") location.href = "dashboard/investor.html";
  if (role === "client") location.href = "dashboard/client.html";
};
