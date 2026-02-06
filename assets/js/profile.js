import { auth, db, storage } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

window.saveProfile = async () => {
  const fullName = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const bankAccount = document.getElementById("bankAccount").value;
  const profilePhoto = document.getElementById("profilePhoto").files[0];

  let photoUrl = "";
  if(profilePhoto){
    const storageRef = ref(storage, `profiles/${auth.currentUser.uid}`);
    await uploadBytes(storageRef, profilePhoto);
    photoUrl = await getDownloadURL(storageRef);
  }

  await setDoc(doc(db, "clients", auth.currentUser.uid), {
    fullName, phone, bankAccount, profilePhoto: photoUrl
  }, { merge: true });

  alert("Profile updated successfully.");
};
