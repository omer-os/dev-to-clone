import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeCenter from "../home/HomeCenter";
import HomeLeft from "../home/HomeLeft";
import HomeRight from "../home/HomeRight";

export default function DefaultLayout({ children }) {
  return (
    <div className="bg-back text-white">
      <Navbar />

      <div className="sm:px-5 px-1 mt-3 flex justify-center">
        <div className="transition-all grid gap-3 w-full max-w-[67em] min-h-screen  lg:grid-cols-[minmax(15em,16em)_1fr_minmax(15em,16em)] md:grid-cols-[1fr_minmax(400px,_1fr)_14em] sm:grid-cols-[1fr_minmax(23em,25em)]">
          <HomeLeft />
          <HomeCenter children={children} />
          <HomeRight />
        </div>
      </div>
      <Footer />
    </div>
  );
}
