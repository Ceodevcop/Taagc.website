import { db } from "./firebase.js";
import { addDoc, collection, serverTimestamp } from
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

export async function logAction(uid, action) {
  await addDoc(collection(db, "auditLogs"), {
    uid,
    action,
    timestamp: serverTimestamp()
  });
}
