import React from "react";
import { DeleteAllDocuments } from "../backend/Functions";
import { PostsCollection, UsersCollection } from "../backend/collections";

export default function Test() {
  return (
    <div className="p-3 flex flex-wrap gap-4">
      <button
        onClick={() => {
          DeleteAllDocuments(PostsCollection);
        }}
        className="bg-zinc-900 text-xl font-bold p-2 rounded border border-zinc-800 active:scale-95 transition-all active:bg-zinc-800 capitalize"
      >
        delete all users
      </button>
      <button
        onClick={() => {
          DeleteAllDocuments(UsersCollection);
        }}
        className="bg-zinc-900 text-xl font-bold p-2 rounded border border-zinc-800 active:scale-95 transition-all active:bg-zinc-800 capitalize"
      >
        delete all posts
      </button>
    </div>
  );
}
