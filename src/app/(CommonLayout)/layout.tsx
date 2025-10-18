"use client";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Navbar } from "@/components/ui/Navbar";
import BitechxProvider from "@/lib/Provider/BitechxProvider";
import StoreProvider from "../storeProvider";
import SearchFilter from "@/components/product_comp/SearchFilter";
import { usePathname } from "next/navigation";

const CommonLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      <div className=" min-h-screen bg-[#EFF1F3] ">
        <SidebarProvider>
          <Navbar />
          <SidebarTrigger />
          <div className=" w-[100%] px-4 py-2 bg-[#EFF1F3] ">
            {pathname == "/product" && <SearchFilter />}

            {children}
          </div>
        </SidebarProvider>
      </div>
    </>
  );
};

export default CommonLayout;
