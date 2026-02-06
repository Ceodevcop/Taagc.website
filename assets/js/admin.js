import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const table = document.getElementById("userTable");

async function loadUsers() {
  table.innerHTML = "";

  const snap = await getDocs(collection(db, "users"));

  let total = 0, clients = 0, investors = 0;

  snap.forEach(docSnap => {
    const data = docSnap.data();
    total++;

    if (data.role === "client") clients++;
    if (data.role === "investor") investors++;

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${data.email || "-"}</td>
      <td>${data.role}</td>
      <td>${data.status}</td>
      <td>
        <select onchange="changeRole('${docSnap.id}', this.value)">
          <option value="">--select--</option>
          <option value="admin">Admin</option>
          <option value="client">Client</option>
          <option value="investor">Investor</option>
        </select>
      </td>
      <td>
        <button onclick="toggleStatus('${docSnap.id}', '${data.status}')">
          ${data.status === "active" ? "Suspend" : "Activate"}
        </button>
      </td>
    `;

    table.appendChild(row);
  });

  totalUsers.textContent = total;
  totalClients.textContent = clients;
  totalInvestors.textContent = investors;
}

window.changeRole = async (uid, role) => {
  if (!role) return;
  await updateDoc(doc(db, "users", uid), { role });
  alert("Role updated");
  loadUsers();
};

window.toggleStatus = async (uid, status) => {
  const newStatus = status === "active" ? "suspended" : "active";
  await updateDoc(doc(db, "users", uid), { status: newStatus });
  loadUsers();
};

loadUsers();
