import React, { useState } from "react";
import ExportLogo from "../assets/ExportLogo1.png";
import { navigation } from "../constants/index";
import { Link, useLocation } from "react-router-dom";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import { HamburgerMenu } from "./design/Header";
import Button from "./button";

function Navbar() {
  const pathname = useLocation();
  const [OpenNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (OpenNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };
  const handleClick = () => {
    if (!OpenNavigation) return;
    setOpenNavigation(false);
  };
  return (
    <div
      className={`fixed top-0 z-50 backdrop-blur-sm bg-white border-b border-gray-200 w-full`}
    >
      <div className="flex items-center px-5 lg:px-5 xl:px-4 max-lg:py-2 xl:my-2 md:mr-[5rem]">
        <Link to="/" className="block">
          <img src={ExportLogo} alt="Lol" className="w-9/12 md:w-3/6" />
        </Link>
        <nav
          className={`${
            OpenNavigation ? "flex top-[3.7rem]" : "hidden top-[5rem]"
          } fixed left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div
            className={`${
              OpenNavigation
                ? "w-full border-black border-2 drop-shadow-sm bg-n-14"
                : ""
            } relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row`}
          >
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`block relative font-fredoka uppercase ${
                  OpenNavigation ? "sm:text-sm font-bold" : "text-[22px]"
                } transition-colors hover:text-color-7 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-8 md:py-8 lg:-mr-0.25 lg:font-bold ${
                  item.url === pathname.pathname ? "z-2 xl:text-color-7" : ""
                } ${OpenNavigation ? "py-3" : "py-8"}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
        <button className="ml-auto lg:hidden" onClick={toggleNavigation}>
          <img
            src={`${OpenNavigation ? Close : Menu}`}
            alt=""
            height={100}
            width={60}
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
