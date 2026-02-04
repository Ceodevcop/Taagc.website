import { auth, db } from "./firebase.js";
import { onAuthStateChanged } from
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { doc, getDoc } from
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

export function protectPage(requiredRole) {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      window.location.href = "../login.html";
      return;
    }

    const snap = await getDoc(doc(db, "users", user.uid));
    if (!snap.exists() || snap.data().role !== requiredRole) {
      alert("Access denied");
      window.location.href = "../login.html";
    }
  });
}
