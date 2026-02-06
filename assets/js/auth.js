import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const auth = getAuth();
const db = getFirestore();

window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const cred = await signInWithEmailAndPassword(auth, email, password);

  const ref = doc(db, "users", cred.user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    alert("User role not assigned");
    return;
  }

  const role = snap.data().role;

  if (role === "admin") {
    window.location.href = "/dashboard/admin.html";
  } else if (role === "client") {
    window.location.href = "/dashboard/client.html";
  } else if (role === "investor") {
    window.location.href = "/dashboard/investor.html";
  } else {
    alert("Invalid role");
  }
};
