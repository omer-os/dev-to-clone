import Link from "next/link";
import React from "react";
import { GetAllUsers, GetUserData } from "../../backend/db";
import PostCard from "../../components/common/PostCard";

export default function UserDetails({ data, userPosts }) {
  let UserData = JSON.parse(data)[0];

  return (
    <div className="max-w-[50em] h-10 mx-auto w-full mt-[4em] sm:mt-[7em] min-h-screen sm:px-4">
      <div
        className="bg-zinc-900 border border-zinc-700 rounded 
        w-full h-max flex flex-col sm:items-center"
      >
        {data && (
          <>
            <div className="sm:w-24 sm:h-24 w-16 h-16 ring-8 left-3 sm:left-0 transition-all sm:ring-[.8em] rounded-full ring-black relative -top-10">
              <img
                src={UserData.photoUrl}
                className="w-full h-full rounded-full"
                alt=""
              />
            </div>

            <div className="flex sm:p-0 p-3 sm:mt-0 -mt-8 transition-all flex-col sm:items-center">
              <div className="font-extrabold sm:text-2xl text-xl">
                omar chatin
              </div>
              <div className="text-zinc-400 mt-2 text-sm">{UserData.bio}</div>
            </div>
          </>
        )}

        {/* <hr className="h-[.09em] bg-zinc-800 border-none w-full mt-3" /> */}
        <br />
        {/* <div className="p-2 sm:text-center">
          <div className="text-sm ">Work</div>
          <div className="text-xs text-zinc-400">Web Development</div>

          <Link
            className="text-indigo-600 border border-indigo-600 flex items-center justify-center px-2 rounded hover:bg-indigo-600/20 mt-3 text-sm bg-indigo-600/10 active:scale-95 transition-all capitalize py-2 sm:hidden"
            href="/"
          >
            more about omar chatin
          </Link>
        </div> */}
      </div>

      <div className="flex gap-10">
        <div className="max-w-[12em] w-full sm:block hidden h-full "></div>

        <div className="flex-1 sm:p-2 py-2 flex flex-col gap-3">
          <div className="text-xl font-bold">Recent Posts</div>
          {JSON.parse(userPosts).map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const users = await GetAllUsers();
  let paths = [];
  users.map((i) => {
    paths.push({
      params: {
        userName: i.userName.replace(" ", "-"),
      },
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const userName = params.userName;
  let user = await GetUserData(userName);
  let userData = [];
  user.UserData.docs.map((i) => {
    userData.push(i.data());
  });
  let userPosts = [];

  user.UserPosts.docs.map((i) => {
    userPosts.push(i.data());
  });
  return {
    props: {
      data: JSON.stringify(userData),
      userPosts: JSON.stringify(userPosts),
    },
  };
};
