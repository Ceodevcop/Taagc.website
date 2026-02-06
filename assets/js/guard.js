import { auth, db } from "./firebase.js";
import { onAuthStateChanged } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { doc, getDoc } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export function protectPage(allowedRoles = []) {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      window.location.href = "../login.html";
      return;
    }
    const snap = await getDoc(doc(db, "users", user.uid));
    if (!snap.exists()) {
      await auth.signOut();
      window.location.href = "../login.html";
      return;
    }
    const role = snap.data().role;
    if (!allowedRoles.includes(role)) {
      alert("Access denied");
      window.location.href = "../login.html";
    }
  });
}
