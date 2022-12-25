import Link from "next/link";
import React, { useState } from "react";

export default function HomeCenter({ children }) {
  const [SelectedTap, setSelectedTap] = useState("/");
  return (
    <div className="px-3">
      <div className="flex gap-5">
        {[
          {
            name: "Relavent",
            link: "/",
          },
          {
            name: "Lastest",
            link: "/lastest",
          },
          {
            name: "Top",
            link: "/top/week",
          },
        ].map((tab, index) => (
          <Link
            className={`${
              tab.link === SelectedTap && "font-bold !text-white"
            } text-zinc-400`}
            key={index}
            href={tab.link}
          >
            {tab.name}
          </Link>
        ))}
      </div>

      <div className="flex flex-col">{children}</div>
    </div>
  );
}
