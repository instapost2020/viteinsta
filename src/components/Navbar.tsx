import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const scroll = () => {
    const valueScroll = window.scrollY;

    if (valueScroll > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
  });
  return (
    <nav
      className={
        scrolled
          ? "w-full h-auto fixed mb-24 z-50 top-0 left-0 flex font-semibold bg-transparent duration-300 ease-out transition-all"
          : "w-full h-auto fixed mb-24 z-50 top-0 left-0 flex font-semibold bg-white duration-300 ease-out transition-all"
      }
      style={{ fontFamily: "RalewayMedium" }}
    >
      <div
        className={
          scrolled
            ? "w-full max-w-2xl mx-auto items-center justify-between flex mt-2 rounded-3xl bg-gray-100 px-4"
            : "w-full max-w-2xl mx-auto items-center justify-between flex rounded-sm bg-white"
        }
      >
        <div className="flex gap-3 items-center">
          <Link to="/">
            <img
              className="w-20 h-20 -mt-1 object-contain object-center"
              src="/instaAssets/logo.png"
              alt=""
            />
          </Link>
          <div className="gap-3 hidden md:flex">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Services</Link>
            <Link to="/">Shops</Link>
          </div>
        </div>
        <div>
          <Link to="/">HIRE US</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
