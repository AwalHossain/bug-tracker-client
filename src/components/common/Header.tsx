"use client";

import { useAppSelector } from "@/redux/hooks";
import logo from "../../assets/images/grabbug-logo.png";
// import useAuth from "hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// our menus
interface IMenu {
  name: String;
  path: String;
}

const menus: IMenu[] = [
  {
    name: "Documentation",
    path: "/documentation",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
  {
    name: "About Us",
    path: "/about",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const { user, logout } = useAuth();
  const { user } = useAppSelector((state) => state.auth);
  const logout = () => {
    // logout();
  };
  return (
    <>
      <header>
        <div className="bg-white shadow-lg">
          <nav className="flex items-center justify-between px-4  py-4 md:mx-auto md:max-w-3xl lg:mx-auto lg:max-w-6xl">
            {/* logo */}
            <div className="w-36 flex-shrink-0">
              <Link href="/">
                <>
                  <Image src={logo} alt="logo" />
                </>
              </Link>
            </div>

            {/* nav menus */}
            <ul className="hidden space-x-8 text-sm font-semibold lg:inline-flex">
              {menus.map((menu, i) => (
                <Link
                  key={i}
                  href={`${menu.path}`}
                  className=" text-[18px] text-[#22577E] transition-all duration-[0.3s] ease-in hover:text-[20px]"
                >
                  {menu.name}
                </Link>
              ))}
            </ul>

            {/* login and sign up button */}
            {user?.email ? (
              <button onClick={logout} className="primary-btn">
                Logout
              </button>
            ) : (
              <>
                <div className="hidden space-x-4 lg:inline-flex">
                  <Link href="/login">
                    <button className=" primary-btn">Login</button>
                  </Link>
                  <Link href="/register">
                    <button className="btn-white">Register</button>
                  </Link>
                </div>
              </>
            )}

            {/* hamburger menu for mobile */}
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="z-40 flex cursor-pointer flex-col space-y-2 lg:hidden"
            >
              <div
                className={`${
                  menuOpen && "translate-y-2 rotate-45 transform "
                }  h-[2px] w-8 rounded-lg ${
                  menuOpen ? "bg-[#FD71AF]" : "bg-[#7b68ee]"
                } transition-all`}
              ></div>
              <div
                className={`${
                  menuOpen && "hidden"
                } h-[2px] w-8 rounded bg-[#7b68ee]  transition-all`}
              ></div>
              <div
                className={`${
                  menuOpen && "-translate-y-[2px] -rotate-45"
                } h-[2px] w-8 rounded ${
                  menuOpen ? "bg-[#FD71AF]" : "bg-[#7b68ee]"
                } transition-all`}
              ></div>
            </div>

            <ul
              className={`
                           fixed
                             shadow-2xl transition-all lg:hidden ${
                               menuOpen ? "right-0" : "-right-full"
                             } top-0 z-20 flex h-full w-full  flex-col items-center  justify-center space-y-16 bg-white px-4   text-2xl font-semibold  md:w-[450px] md:text-4xl`}
            >
              {menus.map((menu, i) => (
                <Link
                  key={i}
                  href={`${menu.path}`}
                  className="block hover:text-[#FD71AF]"
                  legacyBehavior
                >
                  {menu.name}
                </Link>
              ))}
              <li className="mx-auto flex w-2/6 flex-col space-y-3">
                <Link href="/login">
                  <button className=" primary-btn">Login</button>
                </Link>
                <Link href="/register">
                  <button className="btn-white">Register</button>
                </Link>
              </li>
            </ul>
          </nav>
          {/* mobile menus */}
        </div>
      </header>
    </>
  );
}

export default Header;
