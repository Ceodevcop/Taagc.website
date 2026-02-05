import { db } from "./firebase.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const container = document.getElementById("clientsContainer");

async function loadClients() {
  try {
    // Get all users with role 'client'
    const q = query(collection(db, "users"), where("role", "==", "client"));
    const snap = await getDocs(q);

    container.innerHTML = "";

    snap.forEach(doc => {
      const data = doc.data();
      container.innerHTML += `
        <div class="client-card">
          <img src="${data.profilePic || 'default-profile.png'}" alt="${data.fullName || data.email}" class="profile-pic">
          <h3>${data.fullName || "N/A"}</h3>
          <p>Email: ${data.email}</p>
          <p>Phone: ${data.phone || "N/A"}</p>
          <p>Address: ${data.address || "N/A"}</p>
          <p>Bank: ${data.bankName || "N/A"}</p>
          <p>Account: ${data.accountNumber || "N/A"}</p>
          <p>Status: ${data.profileCompleted ? "Completed" : "Pending"}</p>
        </div>
      `;
    });

  } catch (err) {
    console.error("Failed to load clients", err);
    container.innerHTML = "<p>Error loading clients.</p>";
  }
}

loadClients();
