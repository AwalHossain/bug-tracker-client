"use client";

import logo from "@/assets/images/bug-logo.png";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { BellIcon, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { UserNav } from "./user-nav";

export default function Header() {
  const oviousClass =
    "text-white hover:bg-[#3e4066] transition-colors duration-200 ease-in-out p-1 rounded-md cursor-pointer";
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-[#323452] backdrop-blur z-20">
      <nav className="h-10 flex items-center justify-between px-4">
        <div className="">
          <Link href={"/"} className="w-8 h-8">
            <Image src={logo} alt="logo" width={32} height={32} />
          </Link>
        </div>

        {/* <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div> */}
        <div className="flex items-center gap-2">
          <div>{/* <ComboboxDemo /> */}</div>
          <Link
            href={"/workspace"}
            className={`flex justify-center items-center space-x-1 p-1 ${oviousClass} `}
          >
            <PlusCircle className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-[12px] md:text-[14px]">New</span>
          </Link>
          <div className={`${oviousClass}`}>
            <BellIcon className="h-4 w-4 md:h-5 md:w-5" />
          </div>
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
