import React from "react";
import {DeletePosts } from "../backend/db"
import { DeleteUsers } from "../backend/Auth";

export default function dashboard() {
  return (
    <div className="w-full mt-10 flex items-center justify-center px-4">
      <div className="sm:max-w-[25em] w-full bg-zinc-900 border p-4 rounded flex flex-col items-center gap-4 border-zinc-800">
        <button
          onClick={() => DeleteUsers()}
          className="p-3 rounded font-bold  bg-blue-600 active:scale-95 transition-all active:bg-blue-800 w-full"
        >
          Delete My Account
        </button>
        <button
          onClick={() => DeletePosts()}
          className="p-3 rounded font-bold  bg-blue-600 active:scale-95 transition-all active:bg-blue-800 w-full"
        >
          Delete All Posts
        </button>
      </div>
    </div>
  );
}
