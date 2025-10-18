import Link from "next/link";
import React from "react";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Navbar } from "@/components/ui/Navbar";

const CommonLayout = ({ children }) => {
  return (
    <div className=" min-h-screen">
      <SidebarProvider>
        <Navbar />
        <SidebarTrigger />
        <div className=" border-2 w-[100%] px-4 py-2">{children}</div>
      </SidebarProvider>
    </div>
  );
};

export default CommonLayout;
