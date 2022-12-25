import React, { useEffect, useState } from "react";
import {
  DeleteAccount,
  SginIn,
  SginOutFromAccount,
} from "../../backend/Functions";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { Authentication } from "../../backend/db";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
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
    <div className="w-full mt-5 flex items-center justify-center px-4">
      <div className="max-w-[25em]">
        <div className="text-3xl mb-3 text-center font-extrabold">
          Create Your Account Now
        </div>
        <div className="bg-zinc-900 p-3 rounded border border-zinc-800">
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
            </div>
          )}
          <div className="flex gap-3">
            {!Logged && (
              <button
                onClick={() => {
                  SginIn(Email, Password);
                  router.push("/");
                }}
                className="bg-blue-500 active:scale-95 transition-all active:bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
                className="active:scale-95 transition-all active:bg-indigo-600/40 bg-indigo-700/20 border border-indigo-600/30 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Out
              </button>
            )}
            {/* <button
              onClick={() => {
                DeleteAccount();
              }}
              className="active:scale-95 transition-all active:bg-indigo-600/40 bg-indigo-700/20 border border-indigo-600/30 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Delete My Account
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
