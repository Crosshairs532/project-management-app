"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineProduct } from "react-icons/ai";

import { Calendar, Home, Inbox, Package, Plus } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { UserProfileDropDown } from "../user/User";

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
        <Link href={"/"}>
          <h1 className="text-3xl px-5 font-bold">
            Bitech <span className=" text-[#a44a3f]">X</span>
          </h1>
        </Link>
      </SidebarHeader>

      <div className=" my-[50px] bg-[#EFF1F3] text-sm px-4 text-[#A44A3F] rounded-full h-fit mx-auto py-2 w-fit flex items-center justify-center gap-2">
        <div className=" bg-[#A44A3F] text-[#EFF1F3] w-fit h-fit rounded-full">
          <Plus />
        </div>
        <Link href={"/add-product"}>Create new product</Link>
      </div>

      <SidebarContent>
        {items.map((item, index) => (
          <SidebarMenuButton isActive={pathname === item.url} key={index}>
            <item.icon />
            <Link href={`${item.url}`}>{`${item.title}`}</Link>
          </SidebarMenuButton>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <UserProfileDropDown></UserProfileDropDown>
      </SidebarFooter>
    </Sidebar>
  );
}
