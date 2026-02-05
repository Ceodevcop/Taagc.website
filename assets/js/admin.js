import { db } from "./firebase.js";
import { doc, getDoc, setDoc, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const editor = document.getElementById("jsonEditor");
const staffRef = doc(db, "config", "staff");

// Load staff from Firestore
async function loadStaff() {
  const snap = await getDoc(staffRef);
  if (snap.exists()) {
    editor.value = JSON.stringify(snap.data(), null, 2);
  } else {
    editor.value = JSON.stringify({ staff: [] }, null, 2);
  }
}

// Save staff to Firestore
window.saveStaff = async function () {
  const data = JSON.parse(editor.value);
  await setDoc(staffRef, data);
  alert("Staff updated successfully");
};

loadStaff();

// Create new user request
window.createUser = async function (email, role) {
  await addDoc(collection(db, "userRequests"), {
    email,
    role,
    status: "pending",
    createdAt: serverTimestamp()
  });
  alert("User request created");
};
