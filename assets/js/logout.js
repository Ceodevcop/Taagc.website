import { auth } from "./firebase.js";
import { signOut } from
"https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

window.logout = async function () {
  await signOut(auth);
  window.location.href = "../login.html";
};
