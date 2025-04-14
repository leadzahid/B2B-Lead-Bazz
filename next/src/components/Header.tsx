"use client";

import Logo from "@/../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

function Header() {
  const [isToggole, setIsToggole] = useState(false);
  const handleToggole = () => {
    setIsToggole(() => !isToggole);
  };

  const navItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Services", link: "/#services" },
    { id: 3, name: "Why Hire Us", link: "/why-hire-us" },
    { id: 4, name: "Pricing", link: "/pricing" },
    { id: 5, name: "About", link: "/about-us" },
    { id: 6, name: "Contact", link: "/#contact" },
  ];
  const pathname = usePathname();

  return (
    <>
      <div
        className=" sticky top-0 z-50"
        style={{
          background:
            "linear-gradient(90deg, hsla(252, 40%, 29%, 1) 0%, hsla(270, 77%, 71%, 1) 100%)",
        }}
      >
        {/* big screen nav bar  */}
        <nav className=" max-w-7xl mx-auto px-5  flex items-center justify-between gap-4 py-3">
          {/* company logo  */}
          <div>
            <Link href={"/"}>
              <Image src={Logo} alt="logo" width={170} />
            </Link>
          </div>

          {/* large device navigation menu  */}
          <div className="min-[950px]:flex hidden gap-8 items-center">
            <div className="flex">
              {navItems.map((item) => (
                <Link
                  href={item.link}
                  key={item.id}
                  className={`group text-white px-3 font-light`}
                >
                  {item.name}
                  <div className="group-hover:w-full w-0 h-[1.3px] bg-white transition-all duration-300 ease-linear mt-0.5 "></div>
                </Link>
              ))}
            </div>
            <Link
              href={"/order"}
              className=" text-white font-medium text-xs cursor-pointer px-4 py-2.5 rounded  bg-[#392d69]"
            >
              GET 50 FREE
            </Link>
          </div>
          {/* toggole button  */}
          <div
            className="min-[950px]:hidden block p-2 transition-all duration-200 ease-linear cursor-pointer text-white hover:bg-blue-900/50 rounded"
            onClick={handleToggole}
          >
            {isToggole ? <FaXmark size={22} /> : <FaBarsStaggered size={22} />}
          </div>
        </nav>
      </div>
      {/* // small screen nav bar */}
      <div className="min-[950px]:hidden block relative z-50">
        <div
          style={{
            background:
              "linear-gradient(90deg, hsla(252, 40%, 29%, 1) 0%, hsla(270, 77%, 71%, 1) 100%)",
          }}
          className={`flex flex-col gap-5 fixed pt-3 top-[60px] ${
            isToggole ? "left-0 right-0" : "-left-96"
          } transition-all duration-500 ease-out`}
        >
          <div className="flex flex-col  mx-5">
            {navItems.map((item) => (
              <Link
                key={item.id}
                className="
                  group transition-all hover:bg-purple-700 py-3 px-5 duration-200 text-sm text-white rounded "
                href={item.link}
                onClick={() => setIsToggole(() => !isToggole)}
              >
                {item.name}
                <div
                  className={`group-hover:max-w-max h-[1.5px] bg-white transition-all duration-300 ease-linear ${
                    pathname === item.link ? "max-w-max" : "max-w-0"
                  }`}
                ></div>
              </Link>
            ))}
          </div>
          <Link
            href="/order"
            className="bg-[#392d69] mx-5 mb-3 text-white font-medium text-xs cursor-pointer p-3 rounded border text-center"
          >
            GET 50 FREE
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
