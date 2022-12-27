import Link from "next/link";
import React from "react";

export default function PostCard({ post }) {
  return (
    <div className="flex bg-zinc-900 rounded border border-zinc-800 flex-col">
      {post.postImageData && (
        <div className="h-[13em] ">
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--GtkxwFqF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uy0g5ifw9r9lisf609xl.png"
            className="w-full object-cover rounded-t h-full"
            alt=""
          />
        </div>
      )}

      <div className="flex p-3 flex-col">
        <div className="left flex gap-3">
          <div className="rounded-full w-7 h-7">
            {post.userImage && (
              <img
                src={post.userImage}
                className="w-full object-cover rounded-full h-full"
                alt=""
              />
            )}
          </div>
          <div className="flex text-xs flex-col">
            <div className="font-bold capitalize">{post.userName}</div>
            <div className="text-zinc-400">Dec 24 (10 hours ago)</div>
          </div>
        </div>

        <div className="right pl-2">
          <div className="text-2xl font-extrabold mt-1">{post.postTitle}</div>

          <div className="flex sm:gap-4 gap-2 text-sm my-2 text-zinc-400">
            {post.postTags.map((i, index) => (
              <Link key={index} href="/">
                {i}
              </Link>
            ))}
          </div>

          <div className="flex justify-between">
            <div className="flex mt-3 gap-1">
              {post && (
                <button className="flex gap-1 rounded text-xs active:scale-95 transition-all active:bg-zinc-700 hover:bg-zinc-900 p-2 items-center">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="white"
                      d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"
                    ></path>
                  </svg>
                  <span>{post.postReactions} Reactions</span>
                </button>
              )}

              <button className="flex gap-1 rounded text-xs active:scale-95 transition-all active:bg-zinc-700 hover:bg-zinc-900 p-2 items-center">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="white"
                    d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"
                  ></path>
                </svg>
                <span>Add Comment</span>
              </button>
            </div>

            <div className="text-xs text-zinc-400 self-end">4 mins read</div>
          </div>
        </div>
      </div>
    </div>
  );
}
