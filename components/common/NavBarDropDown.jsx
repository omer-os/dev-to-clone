import Link from "next/link";
import React from "react";

export default function NavBarDropDown({ setOpenDropDown, userName }) {
  return (
    <div className="absolute p-2 bg-zinc-900 top-[4em] right-2 sm:right-[5em] rounded border border-zinc-800 w-[10em]">
      <Link
        onClick={() => setOpenDropDown(false)}
        href={`/user/${userName}`}
        className="flex py-1 px-2 rounded border-b hover:text-indigo-400 hover:bg-indigo-600/30 group hover:underline transition-all border-zinc-800 pb-2 flex-col"
      >
        <div className="flex flex-col">
          <div className="text-xs group-hover:text-indigo-400 text-zinc-400">
            @{userName}
          </div>
        </div>
      </Link>

      <div className="mt-1 text-xs capitalize flex flex-col ">
        {[
          { name: "dashboard", link: "/dashboard" },
          { name: "create post", link: "/create" },
          { name: "reading list", link: "/reading" },
          { name: "settings", link: "/settings" },
        ].map((i, index) => (
          <Link
            onClick={() => setOpenDropDown(false)}
            key={i.name}
            href={i.link}
            className="p-2 font-bold hover:text-indigo-400 hover:bg-indigo-600/30 rounded"
          >
            {i.name}
          </Link>
        ))}

        <div className="border-b border-zinc-800 pb-2"></div>

        <Link
          onClick={() => setOpenDropDown(false)}
          href={"/user/login"}
          className="p-2 font-bold mt-4 w-full hover:text-indigo-400 hover:bg-indigo-600/30 rounded"
        >
          Account{" "}
        </Link>
      </div>
    </div>
  );
}
