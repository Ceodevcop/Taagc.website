import { db, auth } from "./firebase.js";
import { collection, addDoc, query, where, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Submit a support request or project request
window.submitRequest = async function(title, description) {
  try {
    await addDoc(collection(db, "tickets"), {
      clientId: auth.currentUser.uid,
      title,
      description,
      status: "open",
      createdAt: serverTimestamp()
    });
    alert("Request submitted successfully.");
  } catch (err) {
    console.error("Request submission failed", err);
    alert(err.message);
  }
};

// Load all requests for this client
export async function loadRequests() {
  try {
    const q = query(
      collection(db, "tickets"),
      where("clientId", "==", auth.currentUser.uid)
    );
    const snap = await getDocs(q);
    const container = document.getElementById("clientRequests");
    container.innerHTML = "";
    snap.forEach(doc => {
      const r = doc.data();
      container.innerHTML += `<li>${r.title} - ${r.status}</li>`;
    });
  } catch (err) {
    console.error("Failed to load requests", err);
  }
}
