import { auth, db } from "./firebase.js";
import { doc, setDoc, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";

const storage = getStorage();

window.submitProfile = async function () {
  const user = auth.currentUser;
  if (!user) return alert("User not logged in");

  const fullName = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const bankName = document.getElementById("bankName").value;
  const accountNumber = document.getElementById("accountNumber").value;
  const profileFile = document.getElementById("profilePic").files[0];

  if (!profileFile) return alert("Select a profile picture");

  try {
    // Upload profile picture to Firebase Storage
    const storageRef = ref(storage, `profiles/${user.uid}/${profileFile.name}`);
    await uploadBytes(storageRef, profileFile);
    const profileURL = await getDownloadURL(storageRef);

    // Save profile data to Firestore
    await setDoc(doc(db, "users", user.uid), {
      fullName,
      phone,
      address,
      bankName,
      accountNumber,
      profilePic: profileURL,
      profileCompleted: true,
      updatedAt: serverTimestamp()
    }, { merge: true }); // merge so role/status is not overwritten

    alert("Profile saved successfully!");
  } catch (err) {
    console.error("Profile save failed", err);
    alert(err.message);
  }
};
