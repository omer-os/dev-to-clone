import React from "react";
import {
  DeleteAllDocuments,
  DeletePosts,
  DeleteUsers,
} from "../backend/Functions";
import { PostsCollection, UsersCollection } from "../backend/collections";

export default function Test() {
  return (
    <div className="p-3 flex flex-wrap gap-4">
      <button
        onClick={() => {
          DeleteUsers();
        }}
        className="bg-zinc-900 text-xl font-bold p-2 rounded border border-zinc-800 active:scale-95 transition-all active:bg-zinc-800 capitalize"
      >
        delete all users
      </button>
      <button
        onClick={() => {
          DeletePosts();
        }}
        className="bg-zinc-900 text-xl font-bold p-2 rounded border border-zinc-800 active:scale-95 transition-all active:bg-zinc-800 capitalize"
      >
        delete all posts
      </button>
    </div>
  );
}
