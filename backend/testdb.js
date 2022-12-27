import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const PostsCollection = collection(db, "posts");
export const getAllPosts = async () => {
  const res = await getDocs(PostsCollection);
  let data = [];
  res.docs.map((i) => {
    data.push(i.data());
  });

  return data
};
