import { auth } from "./firebase.js";
import { signOut } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

window.logout = async () => {
  await signOut(auth);
  location.href = "../login.html";
};
