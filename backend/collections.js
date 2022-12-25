import { collection } from "firebase/firestore";
import { db } from "./db";

export const PostsCollection = collection(db, "posts");
export const UsersCollection = collection(db, "users");
