import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

window.createUser = async function (name, email, role) {
  try {
    await addDoc(collection(db, "users"), {
      name,
      email,
      role,
      status: "active",
      createdAt: serverTimestamp()
    });
    alert("User created successfully");
  } catch (e) {
    alert(e.message);
  }
};
