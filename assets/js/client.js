import { auth, db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

window.submitRequest = async function (title, description) {
  const user = auth.currentUser;
  if (!user) return alert("Login required");

  await addDoc(collection(db, "tickets"), {
    clientId: user.uid,
    title,
    description,
    status: "open",
    createdAt: serverTimestamp()
  });

  alert("Request sent");
};

export function loadRequests() {
  const user = auth.currentUser;
  if (!user) return;

  const q = query(
    collection(db, "tickets"),
    where("clientId", "==", user.uid)
  );

  onSnapshot(q, (snap) => {
    const box = document.getElementById("tickets-list");
    box.innerHTML = "";
    snap.forEach(doc => {
      const d = doc.data();
      box.innerHTML += `<p>${d.title} — ${d.status}</p>`;
    });
  });
}
