/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/images/bug-logo.png";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-400 py-4">
      <div className="md:max-w-3xl lg:mx-auto lg:max-w-6xl">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between">
          <div className="w-full md:w-[200px]">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
            <p className="text-center text-[#22577E]">
              Grab your bug and end it's life cycle
            </p>
          </div>
          <div className="flex items-center px-5">
            <Link
              href="/documentation"
              className="text-[20px] font-bold text-[#22577E]"
            >
              Documentation
            </Link>
          </div>
          <div className="flex items-center px-5">
            <Link
              href="/contact"
              className="text-[20px] font-bold text-[#22577E]"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex items-center px-5">
            <Link
              href="/about"
              className="text-[20px] font-bold text-[#22577E]"
            >
              About Us
            </Link>
          </div>
          <div className="flex items-center">
            <a
              href="https://github.com/blooming-volcanoes/issue-tracker-client-side"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
