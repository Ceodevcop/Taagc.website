import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAI1MrcP977UgRLQoePxl64JOSyj9v4WpI",
  authDomain: "xtaagc.firebaseapp.com",
  projectId: "xtaagc",
  storageBucket: "xtaagc.firebasestorage.app",
  messagingSenderId: "256073982437",
  appId: "1:256073982437:web:8da63bb7acc86c0ca98f0c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
