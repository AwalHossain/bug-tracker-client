/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import { useAppSelector } from "@/redux/hooks";
import logo from "assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsChatLeftDotsFill } from "react-icons/bs";
import {
  FaPlusCircle,
  FaPlusSquare,
  FaProjectDiagram,
  FaTicketAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";

const dashboardRoutes = [
  {
    path: "/dashboard/projects",
    name: "Projects",
    icons: FaProjectDiagram,
  },
  {
    path: "/dashboard/tickets",
    name: "Tickets",
    icons: FaTicketAlt,
  },
  {
    path: "/dashboard/projectCreate",
    name: "Create Project",
    icons: FaPlusSquare,
  },
  {
    path: "/dashboard/createAnIssue",
    name: "Create Issue",
    icons: FaPlusCircle,
  },
  {
    path: "/message",
    name: "Chat",
    icons: BsChatLeftDotsFill,
  },
];

export default function SideBar() {
  const router: any = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  const handelLogout = () => {
    Swal.fire({
      title: "Want to Log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        // logout();
        Swal.fire("Logged out!", "See you again!!", "success");
      }
    });
  };

  return (
    <div className="sidebar-scrollbar h-screen w-full overflow-auto border-r border-r-gray-200 bg-[#ffffff] shadow-xl">
      <div className="flex justify-center">
        <div
          onClick={() => router.push("/dashboard")}
          className="w-[200px] p-3"
        >
          <Image className="cursor-pointer" src={logo} alt="logo" />
        </div>
        {/* <p className="font-semibold uppercase text-[#b3b8d4]">Issue Tracker</p> */}
      </div>
      <div className="border-t border-b pt-4 pb-10">
        {dashboardRoutes.map((route, i) => (
          <div className="w-full" key={i}>
            <Link href={`${route.path}`} legacyBehavior>
              <a
                style={
                  {
                    // pointerEvents: `${
                    //     !user?.isActive && route.path !== "/dashboard/tickets"
                    //         ? "none"
                    //         : "auto"
                    // }`,
                    // filter: `${
                    //     !user.isActive && route.path === "/dashboard/projectCreate"
                    //         ? ""
                    //         : !user.isActive &&
                    //           route.path !== "/dashboard/projectCreate"
                    //         ? "blur(2px)"
                    //         : ""
                    // }`,
                  }
                }
                className={
                  router.pathname === route.path
                    ? "sidebar-routes active my-2"
                    : "sidebar-routes"
                }
              >
                <span>
                  <route.icons className="mr-2 inline" />
                </span>
                {route.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
      <li className="my-4 flex space-x-3 px-6">
        <button
          onClick={handelLogout}
          type="button"
          className="primary-btn w-full"
        >
          Logout
        </button>
      </li>
    </div>
  );
}
