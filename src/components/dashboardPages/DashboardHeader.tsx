"use client";

import logo from "assets/images/bug-logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function DashboardHeader() {
  const [workspaceName, setWorkspaceName] = useState("My Workspace");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | null) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event?.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center bg-white shadow-md">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <div
          onClick={() => router.push("/dashboard")}
          className="w-[120px] p-3"
        >
          <Image className="cursor-pointer" src={logo} alt="logo" />
        </div>
      </div>

      {/* Right side */}
      <div className="relative flex items-center space-x-4">
        <select
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="Workspace 1">Workspace 1</option>
          <option value="Workspace 2">Workspace 2</option>
          {/* Add more options as needed */}
        </select>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex -space-x-2 overflow-hidden px-2"
        >
          <Image
            className="inline-block h-8 w-8 rounded-full ring-2 ring-cdwhite"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="avatar"
            width={32}
            height={32}
          />
        </button>
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 top-full w-48 bg-white border rounded shadow-lg py-1 z-10"
          >
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Logout
            </a>
            {/* Add more links as needed */}
          </div>
        )}
      </div>
    </header>
  );
}
