import Link from "next/link";
import React, { useState } from "react";
import NavBarDropDown from "../common/NavBarDropDown";

export default function Navbar() {
  const [OpenDropDown, setOpenDropDown] = useState(false);
  return (
    <div className="sticky z-40 shadow-xl top-0 left-0 bg-zinc-900 flex justify-center">
      <nav className="w-full max-w-[70em] px-4 shadow-xl justify-between items-center py-2 transition-all flex">
        <div className="flex gap-3">
          <button className="p-1 hover:bg-indigo-600/30 hover:ring-2 border-indigo-600/40 active:scale-95 transition-all rounded sm:hidden">
            <img src="/icons/burger.svg" />
          </button>
          <Link href="/" className="logo w-10">
            <img
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt=""
            />
          </Link>

          <input
            type="text"
            placeholder="search..."
            className="bg-black transition-all  sm:flex hidden md:w-[45vmin] w-[40vmin] flex-1 text-zinc-400 border border-zinc-800 rounded px-3"
          />
        </div>
        <div className="right flex gap-4">
          <Link
            className="text-indigo-600 border border-indigo-600 flex items-center justify-center px-2 rounded hover:bg-indigo-600/20 text-sm capitalize"
            href="/create"
          >
            create post
          </Link>

          <div className="p-2 flex items-center justify-center hover:bg-indigo-600/30 hover:ring-2 border-indigo-600/40 active:scale-95 transition-all rounded">
            <img src="icons/notifications.svg" />
          </div>
          {OpenDropDown && <NavBarDropDown setOpenDropDown={setOpenDropDown} />}

          <div
            onClick={() => setOpenDropDown(!OpenDropDown)}
            className="p-1 cursor-pointer object-cover w-10   rounded-full h-10 active:bg-zinc-800 active:scale-95 transition-all ring-0 hover:ring-2"
          >
            <img
              className="w-full avatar rounded-full h-full "
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--IzQa8O37--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/880111/3466b472-ad01-4d41-b1df-dfec0218378f.jpg"
              alt=""
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
