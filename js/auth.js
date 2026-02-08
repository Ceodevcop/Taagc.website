import { auth, db } from "./firebase.js";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function signup(email, password, role="client") {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, "users", user.user.uid), {
    email,
    role,
    createdAt: new Date()
  });
}

export async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}
