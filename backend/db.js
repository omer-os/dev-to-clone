import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const GettAllPosts = async () => {
  const res = await getDocs(collection(db, "posts"));
  let data = [];
  res.docs.map((post) => data.push(post.data()));
  return data;
};
export const AddNewPost = async (data) => {
  addDoc(collection(db, "posts"), data);
};
export const GetAllUsers = async () => {
  const res = await getDocs(collection(db, "users"));
  let users = [];
  res.docs.map((i) => {
    users.push(i.data());
  });

  return users;
};
export const GetUserData = async (userName) => {
  const q = query(collection(db, "users"), where("userName", "==", userName));

  const PostsQuery = query(
    collection(db, "posts"),
    where("userName", "==", userName)
  );
  const UserData = await getDocs(q);
  const UserPosts = await getDocs(PostsQuery);

  return { UserData, UserPosts };
};

export const DeletePosts = async () => {
  const posts = await getDocs(collection(db, "posts"));
  posts.docs.map((i) => deleteDoc(i.ref));
};
