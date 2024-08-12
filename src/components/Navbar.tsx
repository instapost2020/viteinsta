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
      className="w-full h-auto fixed z-50 top-0 left-0 flex font-semibold"
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
          <div className="gap-3 flex">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Services</Link>
            <Link>Shops</Link>
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
