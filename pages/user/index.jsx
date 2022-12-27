import Link from "next/link";
import React from "react";
import PostCard from "../../components/common/PostCard";

export default function User() {
  return (
    <div className="max-w-[50em] h-10 mx-auto w-full mt-[4em] sm:mt-[7em] min-h-screen sm:px-4">
      <div
        className="bg-zinc-900 border border-zinc-700 rounded 
        w-full h-max flex flex-col sm:items-center"
      >
        <div className="sm:w-24 sm:h-24 w-16 h-16 ring-8 left-3 sm:left-0 transition-all sm:ring-[.8em] rounded-full ring-black relative -top-10">
          <img
            src="https://i.stack.imgur.com/xpNqK.jpg?s=64&g=1"
            className="w-full h-full rounded-full"
            alt=""
          />
        </div>

        <div className="flex sm:p-0 p-3 sm:mt-0 -mt-8 transition-all flex-col sm:items-center">
          <div className="font-extrabold sm:text-2xl text-xl">omar chatin</div>
          <div className="text-zinc-400 mt-2 text-sm">
            Creative Ui/Ux Designer And Front End Web Developer.
          </div>
        </div>
        <hr className="h-[.09em] bg-zinc-800 border-none w-full mt-3" />

        <div className="p-2 sm:text-center">
          <div className="text-sm ">Work</div>
          <div className="text-xs text-zinc-400">Web Development</div>

          <Link
            className="text-indigo-600 border border-indigo-600 flex items-center justify-center px-2 rounded hover:bg-indigo-600/20 mt-3 text-sm bg-indigo-600/10 active:scale-95 transition-all capitalize py-2 sm:hidden"
            href="/"
          >
            more about omar chatin
          </Link>
        </div>
      </div>

      <div className="bg-zinc-900 flex gap-10">
        <div className="max-w-[10em] h-full w-full"></div>

        <div className="flex-1 flex flex-col gap-3">{/* <PostCard  /> */}</div>
      </div>
    </div>
  );
}
