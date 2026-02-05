import { db, auth } from "./firebase.js";
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Record a new payment (placeholder, integrate with Paystack/Flutterwave)
window.recordPayment = async function(amount) {
  try {
    await addDoc(collection(db, "payments"), {
      investorId: auth.currentUser.uid,
      amount,
      currency: "USD",
      status: "pending",
      createdAt: serverTimestamp()
    });
    alert("Payment recorded successfully. Await confirmation.");
  } catch (err) {
    console.error("Payment recording failed", err);
    alert(err.message);
  }
};

// List all payments made by current investor
export async function loadPayments() {
  try {
    const q = query(
      collection(db, "payments"),
      where("investorId", "==", auth.currentUser.uid)
    );
    const snap = await getDocs(q);
    const container = document.getElementById("investorPayments");
    container.innerHTML = "";
    snap.forEach(doc => {
      const p = doc.data();
      container.innerHTML += `<li>${p.amount} ${p.currency} - ${p.status}</li>`;
    });
  } catch (err) {
    console.error("Failed to load payments", err);
  }
}
