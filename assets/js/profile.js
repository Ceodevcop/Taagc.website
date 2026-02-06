import { auth, db, storage } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

window.saveProfile = async () => {
  const fullName = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const bankAccount = document.getElementById("bankAccount").value;
  const profilePhoto = document.getElementById("profilePhoto").files[0];
  const kycDocument = document.getElementById("kycDocument").files[0];

  let profileUrl = "", kycUrl = "";

  if(profilePhoto){
    const storageRef = ref(storage, `profiles/${auth.currentUser.uid}/photo`);
    await uploadBytes(storageRef, profilePhoto);
    profileUrl = await getDownloadURL(storageRef);
  }

  if(kycDocument){
    const storageRef = ref(storage, `profiles/${auth.currentUser.uid}/kyc`);
    await uploadBytes(storageRef, kycDocument);
    kycUrl = await getDownloadURL(storageRef);
  }

  await setDoc(doc(db, "clients", auth.currentUser.uid), {
    fullName, phone, bankAccount,
    profilePhoto: profileUrl,
    kycDocument: kycUrl,
    updatedAt: new Date()
  }, { merge: true });

  alert("Profile updated successfully!");
};
