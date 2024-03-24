"use client";

import DashboardHeader from "@/components/dashboardPages/DashboardHeader";
import SideBar from "@/components/sidebar/Sidebar";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggle, setToggle] = useState(false);

  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return null; // or redirect to login
  }
  return (
    <section>
      <div>
        {/* Header */}
        <DashboardHeader />
      </div>
      <div onClick={() => setToggle(false)} className="relative lg:flex">
        {/* dashboard Menu */}
        <div className="lg:w-[20%] ">
          <div
            className={`fixed z-[101] w-[300px] transition-all lg:left-0 lg:w-[20%] ${
              toggle ? "left-0" : "-left-full"
            }`}
          >
            <SideBar />
          </div>
          {toggle && (
            <div className="z-100 fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.3)]" />
          )}
        </div>

        {/* Dashboar content will go here */}

        <div className="w-full py:10 lg:w-[80%] lg:py-0">
          {/* Hamburger Menu */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setToggle(true);
            }}
            className="z-40 mx-4 mb-8 flex h-10 w-10  cursor-pointer flex-col items-center justify-center space-y-1 rounded-full bg-gray-700 p-1 lg:hidden"
          >
            <div className="h-[2px] w-4 rounded bg-white" />
            <div className="h-[2px] w-4 bg-white" />
            <div className="h-[2px] w-4 bg-white" />
          </div>

          {/* child */}

          {children}
        </div>
      </div>
    </section>
  );
}
