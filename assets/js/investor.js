import { auth, db } from "./firebase.js";
import {
  collection,
  query,
  where,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

export function loadInvestorData() {
  const user = auth.currentUser;
  if (!user) return;

  const q = query(
    collection(db, "investments"),
    where("investorId", "==", user.uid)
  );

  onSnapshot(q, (snap) => {
    const box = document.getElementById("investment-list");
    box.innerHTML = "";
    snap.forEach(doc => {
      const d = doc.data();
      box.innerHTML += `<p>${d.project} — $${d.amount} (${d.roi}%)</p>`;
    });
  });
}
