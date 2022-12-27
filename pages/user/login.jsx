import React, { useEffect, useState } from "react";
import { LogInWithGoogle, LogOut, auth } from "../../backend/Auth";
import { onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const [UserName, setUserName] = useState("");
  const [Bio, setBio] = useState("");
  const [LoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  const userNameHandeler = (value) => {
    let sanitizedValue = value;
    sanitizedValue = sanitizedValue.replace(/[^a-zA-Z0-9]/g, "");
    sanitizedValue = sanitizedValue.replace(/\s/g, "-");
    setUserName(sanitizedValue);
  };

  return (
    <div className="w-full mt-10 flex items-center justify-center px-4">
      <div className="sm:max-w-[25em] w-full bg-zinc-900 border p-4 rounded flex flex-col items-center gap-2 border-zinc-800">
        {!LoggedIn && (
          <div className="flex gap-1 w-full flex-col">
            <div className="font-bold">Enter your userName</div>
            <input
              type="text"
              className="rounded bg-zinc-800 text-zinc-400 p-2 w-full"
              placeholder="your username"
              value={UserName}
              onChange={(e) => userNameHandeler(e.target.value)}
            />
            <br />
            <div className="font-bold">Short bio text about you</div>
            <input
              type="text"
              className="rounded bg-zinc-800 text-zinc-400 p-2 w-full"
              placeholder="your bio"
              value={Bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <br />
            <button
              onClick={() => LogInWithGoogle(UserName,Bio)}
              className="p-3 rounded font-bold  bg-blue-600 active:scale-95 transition-all active:bg-blue-800 w-full"
            >
              Login With Google
            </button>
          </div>
        )}

        {LoggedIn && (
          <button
            onClick={() => LogOut()}
            className="p-3 rounded font-bold  bg-blue-600/30 border-blue-600 border active:scale-95 transition-all active:bg-blue-800/20 w-full"
          >
            LogOut
          </button>
        )}
      </div>
    </div>
  );
}
