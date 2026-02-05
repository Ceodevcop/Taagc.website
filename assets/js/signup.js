import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { loadJSON } from "./jsonLoader.js";

console.log("Signup.js loaded");

window.signupUser = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  try {
    // Create Firebase Auth user
    const cred = await createUserWithEmailAndPassword(auth, email, password);

    // Send verification email
    await sendEmailVerification(cred.user);
    alert("Verification email sent. Check your inbox!");

    // Create Firestore document with role
    await setDoc(doc(db, "users", cred.user.uid), {
      email,
      role,
      status: "pending", // admin can approve later
      createdAt: serverTimestamp()
    });

    console.log(`User created: ${email}, role: ${role}`);
    window.location.href = "login.html";

  } catch (err) {
    console.error("Signup failed", err);
    alert(err.message);
  }
};
