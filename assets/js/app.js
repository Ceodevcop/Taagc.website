/* ==============================
   FIREBASE CONFIG
================================ */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "xtaagc.firebaseapp.com",
  projectId: "xtaagc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

/* ==============================
   GLOBAL HELPERS
================================ */
function qs(id) {
  return document.getElementById(id);
}

function redirect(path) {
  window.location.href = path;
}

/* ==============================
   LOGIN
================================ */
async function login(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  const uid = cred.user.uid;

  const snap = await getDoc(doc(db, "users", uid));
  if (!snap.exists()) throw "User role not assigned";

  const role = snap.data().role;

  if (role === "admin") redirect("/admin/dashboard.html");
  else if (role === "investor") redirect("/investor/dashboard.html");
  else redirect("/client/dashboard.html");
}

/* ==============================
   SIGNUP
================================ */
async function signup(email, password, role = "client") {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, "users", cred.user.uid), {
    email,
    role,
    createdAt: new Date()
  });
  redirect("/login.html");
}

/* ==============================
   AUTH GUARD
================================ */
function requireAuth(requiredRole = null) {
  onAuthStateChanged(auth, async (user) => {
    if (!user) redirect("/login.html");

    if (requiredRole) {
      const snap = await getDoc(doc(db, "users", user.uid));
      if (!snap.exists() || snap.data().role !== requiredRole) {
        redirect("/login.html");
      }
    }
  });
}

/* ==============================
   LOGOUT
================================ */
async function logout() {
  await signOut(auth);
  redirect("/login.html");
}

/* ==============================
   PROFILE UPDATE (CLIENT)
================================ */
async function updateProfile(data) {
  const user = auth.currentUser;
  if (!user) return;
  await updateDoc(doc(db, "users", user.uid), data);
  alert("Profile updated");
}

/* ==============================
   SIDEBAR
================================ */
function initSidebar() {
  const btn = qs("menuToggle");
  const sidebar = qs("sidebar");
  if (btn && sidebar) {
    btn.onclick = () => sidebar.classList.toggle("open");
  }
}

/* ==============================
   PAGE AUTO-DETECT
================================ */
document.addEventListener("DOMContentLoaded", () => {
  initSidebar();

  if (qs("loginForm")) {
    qs("loginForm").onsubmit = (e) => {
      e.preventDefault();
      login(qs("email").value, qs("password").value)
        .catch(err => alert(err));
    };
  }

  if (qs("signupForm")) {
    qs("signupForm").onsubmit = (e) => {
      e.preventDefault();
      signup(qs("email").value, qs("password").value);
    };
  }

  if (qs("logoutBtn")) {
    qs("logoutBtn").onclick = logout;
  }
});

/* ==============================
   EXPORTS (OPTIONAL)
================================ */
window.TAAGC = {
  login,
  signup,
  logout,
  requireAuth,
  updateProfile
};
               
