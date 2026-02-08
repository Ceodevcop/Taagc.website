import { auth } from "./firebase.js";
import { signOut } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener("click", e => {
  if (e.target.id === "logoutBtn") {
    signOut(auth).then(() => location.href = "/login.html");
  }
});
