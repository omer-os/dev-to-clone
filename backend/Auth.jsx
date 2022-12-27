import {
  GoogleAuthProvider,
  deleteUser,
  getAuth,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app, db } from "./db";
import { addDoc, collection, deleteDoc, getDocs } from "firebase/firestore";

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const LogInWithGoogle = (UserName, Bio) => {
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

    updateProfile(user, {
      displayName: UserName,
    }).then(() => {
      addDoc(collection(db, "users"), {
        uid: user.uid,
        userName: user.displayName,
        bio: Bio,
        photoUrl: user.photoURL,
      });
    });
  });
};
export const LogOut = () => {
  signOut(auth);
};
export const DeleteMyAccount = async () => {
  deleteUser(auth.currentUser);
};
export const DeleteUsers = async () => {
  const users = await getDocs(collection(db, "users"));
  users.docs.map((i) => deleteDoc(i.ref));
  if (auth.currentUser) {
    DeleteMyAccount();
  }
};
