import { collection } from "firebase/firestore";
import { db } from "./db";

export const PostsCollection = collection(db, "posts");
