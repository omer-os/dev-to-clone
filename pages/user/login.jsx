import React, { useEffect, useState } from "react";
import {
  DeleteAccount,
  GetMyDetails,
  SginIn,
  SginOutFromAccount,
} from "../../backend/Functions";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { Authentication } from "../../backend/db";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [UserName, setUserName] = useState("");
  const router = useRouter();
  const [Logged, setLogged] = useState(false);

  useEffect(() => {
    onAuthStateChanged(Authentication, (user) => {
      if (user) {
        setLogged(true);
      } else {
        setLogged(false);
      }
    });
  }, []);

  return (
    <div className="w-full mt-10 flex items-center justify-center px-4">
      <div className="sm:max-w-[25em] w-full ">
        <div className="bg-zinc-900 p-3 rounded border border-zinc-800">
          {Logged && (
            <div className="flex items-center flex-col">
              <div className="w-[6em] h-[6em]">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--IzQa8O37--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/880111/3466b472-ad01-4d41-b1df-dfec0218378f.jpg"
                  className="w-full h-full object-cover rounded-full"
                  alt=""
                />
              </div>

              <div className="text-2xl font-extrabold">omar chatin</div>
              <div className="text-zinc-400 text-center px-10 mt-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
                rerum?
              </div>
            </div>
          )}
          {!Logged && (
            <div className="flex mb-5 flex-col">
              <div>
                <label
                  className="block font-bold text-gray-700 text-sm mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 appearance-none border rounded w-full py-2 px-3 text-zinc-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mt-5">
                <label
                  className="block font-bold text-gray-700 text-sm mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 appearance-none border rounded w-full py-2 px-3 text-zinc-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mt-5">
                <label
                  className="block font-bold text-gray-700 text-sm mb-2"
                  htmlFor="password"
                >
                  user name
                </label>
                <input
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 appearance-none border rounded w-full py-2 px-3 text-zinc-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="UserName"
                  type="text"
                  placeholder="Enter your user name"
                />
              </div>
            </div>
          )}
          <div className="flex mt-5 gap-3">
            {!Logged && (
              <button
                onClick={() => {
                  SginIn(Email, Password);
                  router.push("/");
                }}
                className="bg-blue-500 flex-1 active:scale-95 transition-all active:bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            )}

            {Logged && (
              <button
                onClick={() => {
                  SginOutFromAccount();
                }}
                className="active:scale-95 flex-1 transition-all active:bg-indigo-600/40 bg-indigo-700/20 border border-indigo-600/30 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
