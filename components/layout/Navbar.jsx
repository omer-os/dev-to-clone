import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex bg-zinc-900 justify-between items-center py-2 xl:px-[15vw] lg:px-[13vw] md:px-[10vw] px-5 transition-all">
      <div className="flex gap-3">
        <button className="p-1 hover:bg-indigo-600/30 hover:ring-2 border-indigo-600/40 active:scale-95 transition-all rounded">
          <img src="/icons/burger.svg" />
        </button>
        <div className="logo w-10">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt=""
          />
        </div>

        <input
          type="text"
          placeholder="search..."
          className="bg-black transition-all  sm:flex hidden md:w-[45vmin] w-[40vmin] flex-1 text-zinc-400 border border-zinc-800 rounded px-3"
        />
      </div>
      <div className="right flex gap-4">
        <Link
          className="text-indigo-600 border-2 border-indigo-600 flex items-center justify-center px-2 rounded hover:bg-indigo-600/20 capitalize"
          href="/"
        >
          create post
        </Link>

        <Link
          href="/"
          className="p-2 hover:bg-indigo-600/30 hover:ring-2 border-indigo-600/40 active:scale-95 transition-all rounded"
        >
          <img src="icons/notifications.svg" />
        </Link>

        <Link
          href="/"
          className="p-1 object-cover w-10   rounded-full h-10 active:bg-zinc-800 active:scale-95 transition-all ring-0 hover:ring-2"
        >
          <img
            className="w-full rounded-full h-full "
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--IzQa8O37--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/880111/3466b472-ad01-4d41-b1df-dfec0218378f.jpg"
            alt=""
          />
        </Link>
      </div>
    </nav>
  );
}
