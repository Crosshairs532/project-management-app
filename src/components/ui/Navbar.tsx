"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineProduct } from "react-icons/ai";

import { Calendar, Home, Inbox, Package, Plus } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Products",
    url: "/product",
    icon: Package,
  },
  {
    title: "Category",
    url: "/category",
    icon: Inbox,
  },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-3xl font-bold">
          Bitech <span className=" text-[#a44a3f]">X</span>
        </h1>
      </SidebarHeader>

      {/* <SidebarContent> */}
      <div className=" my-[50px] bg-[#EFF1F3] text-sm px-4 text-[#A44A3F] rounded-full h-fit mx-auto py-2 w-fit flex items-center justify-center gap-2">
        {/* <SidebarMenuButton> */}
        <div className=" bg-[#A44A3F] text-[#EFF1F3] w-fit h-fit rounded-full">
          <Plus />
        </div>
        <Link href={"/add-product"}>Create new project</Link>
        {/* </SidebarMenuButton> */}
      </div>
      {/* </SidebarContent> */}
      <SidebarContent>
        {items.map((item, index) => (
          <SidebarMenuButton isActive={pathname === item.url} key={index}>
            <item.icon />
            <Link href={`${item.url}`}>{`${item.title}`}</Link>
          </SidebarMenuButton>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

// return (
//   <nav className=" border-2 border-red-900 flex flex-col gap-4 ">
//     <Link
//       className={` ${
//         pathname == "/product"
//           ? "active bg-[#EFF1F3] text-[#A44A3F] rounded-3xl"
//           : "text-[#EFF1F3] hover:text-[#A44A3F] "
//       }  px-3 py-2 rounded flex items-center gap-2`}
//       href={"/product"}
//     >
//       <AiOutlineProduct />
//       Products
//     </Link>
//     <Link
//       className={` ${
//         pathname == "/pr"
//           ? "active bg-[#EFF1F3] text-[#A44A3F] rounded-3xl"
//           : "text-[#EFF1F3] hover:text-[#A44A3F] "
//       } px-3 py-2 rounded `}
//       href={"/product"}
//     >
//       other
//     </Link>
//     <Link
//       className={` ${
//         pathname == "/pro"
//           ? "active bg-[#EFF1F3] text-[#A44A3F] rounded-3xl"
//           : "text-[#EFF1F3] hover:text-[#A44A3F] "
//       }  px-3 py-2 rounded `}
//       href={"/product"}
//     >
//       other
//     </Link>
//     <Link
//       className={` ${
//         pathname == "/prod"
//           ? "active bg-[#EFF1F3] text-[#A44A3F] rounded-3xl"
//           : "text-[#EFF1F3] hover:text-[#A44A3F] "
//       }  px-3 py-2 rounded `}
//       href={"/product"}
//     >
//       other
//     </Link>
//   </nav>
// );
