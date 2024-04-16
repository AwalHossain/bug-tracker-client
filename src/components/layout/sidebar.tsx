"use client";
import control from "@/assets/images/control.png";
import { DashboardNav } from "@/components/dashboard-nav";
import { getNavItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const { workspaceId } = useParams();

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      const isMediumScreen = window.innerWidth < 1024;
      setIsSmallScreen(isMediumScreen);
      if (isMediumScreen) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const strng = workspaceId as string;
  const navItems = getNavItems(strng) as NavItem[];

  return (
    <nav
      className={cn(
        `${open ? "w-[234px]" : "w-20 "} relative h-screen  border-r pt-16 
        duration-300 text-[#2a2e34] border-gray-400 bg-[#F7F8F9] box-border
        dark:bg-[#2A2E34] dark:text-[#F7F8F9]
        `,
      )}
    >
      <div className="space-y-4 py-4">
        <div className=" py-2">
          <div className="space-y-1">
            {/* <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Overview
            </h2> */}
            <DashboardNav items={navItems} open={open} />
          </div>
        </div>
      </div>
      <div className="flex">
        <Image
          src={control}
          alt="control"
          className={`absolute cursor-pointer -right-3 top-14 w-8 border-2 border-white rounded-full duration-300 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        {/* <p className="font-semibold uppercase text-[#b3b8d4]">Issue Tracker</p> */}
      </div>
    </nav>
  );
}
