import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, deleteDoc, getDocs, query, where } from "firebase/firestore";
import { Authentication } from "./db";
import { PostsCollection, UsersCollection } from "./collections";

export const DeleteAllDocuments = async (col) => {
  const res = await getDocs(col);
  res.docs.map((doc) => {
    deleteDoc(doc.ref);
  });
};
export const AddDocumentToCollection = async (col, data) => {
  await addDoc(col, data);
};
export const getAllDocuments = async (col) => {
  const res = await getDocs(col);
  var data = [];
  res.docs.map((doc) => {
    data.push(doc.data());
  });

  return data;
};
export const SginIn = (email, password) => {
  signInWithEmailAndPassword(Authentication, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === "auth/wrong-password") {
        alert("wrong-password");
      }
      if (errorCode === "auth/user-not-found") {
        CreateAccount(email, password);
      }
    });
};
export const CreateAccount = (email, password) => {
  createUserWithEmailAndPassword(Authentication, email, password)
    .then((user) => {
      AddDocumentToCollection(UsersCollection, {
        userName: "jhon doe",
        userId: user.user.uid,
      });
    })

    .catch((error) => {
      if (error.code == "auth/email-already-in-use") {
        alert("The email address is already in use");
      } else if (error.code == "auth/invalid-email") {
        alert("The email address is not valid.");
      } else if (error.code == "auth/operation-not-allowed") {
        alert("Operation not allowed.");
      } else if (error.code == "auth/weak-password") {
        alert("The password is too weak.");
      }
    });
};

export const CheckIfLogged = () => {
  onAuthStateChanged(Authentication, (user) => {
    if (user) {
      console.log("logged in");
      return true;
    } else {
      console.log("not logged");
      return false;
    }
  });
};
export const SginOutFromAccount = () => {
  signOut(Authentication);
};

export const GetUserPosts =async (uid) => {
  const q = query(PostsCollection, where("userId", "==", uid));
  
  const posts = await getDocs(q)
  return posts
};

export const GetAllUserIds = () => {
  const userids = getAllDocuments(UsersCollection);
  return userids;
};
