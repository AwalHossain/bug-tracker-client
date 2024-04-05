"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";

interface DashboardNavProps {
  items: NavItem[];
  open?: boolean;
}

export function DashboardNav({ items, open }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav
      className={`grid items-start gap-2 px-[0.5rem] py-2 
    ${open ? "w-[234px]" : "w-20 "}
    `}
    >
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link
              key={index}
              href={item.disabled ? "/" : item.href}
              onClick={() => {
                !open;
              }}
            >
              <span
                className={cn(
                  "group flex items-center px-3 py-2 space-x-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent",
                  open ? "justify-start" : "justify-center",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <Icon
                  className={`${
                    open ? "text-[16px]" : "text-[20px]"
                  } origin-left duration-200 h-4 w-4 `}
                />
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-800 text-[12px]`}
                >
                  {item.title}
                </span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
