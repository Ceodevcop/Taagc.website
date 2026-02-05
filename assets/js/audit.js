import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

export async function logAction(uid, action) {
  try {
    await addDoc(collection(db, "auditLogs"), {
      uid,
      action,
      timestamp: serverTimestamp()
    });
    console.log("Audit logged:", action);
  } catch (err) {
    console.error("Failed to log audit", err);
  }
}
