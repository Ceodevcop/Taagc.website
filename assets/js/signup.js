import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { doc, setDoc } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

window.signup = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const cred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", cred.user.uid), {
    email,
    role,
    createdAt: new Date()
  });

  alert("Account created");
  window.location = "login.html";
};
