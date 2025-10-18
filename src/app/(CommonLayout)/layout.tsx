"use client";
import React from "react";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Navbar } from "@/components/ui/Navbar";
import BitechxProvider from "@/lib/Provider/BitechxProvider";
import StoreProvider from "../storeProvider";
import SearchFilter from "@/components/product_comp/SearchFilter";
import { usePathname } from "next/navigation";

const CommonLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <body className={`antialiased`} suppressHydrationWarning={true}>
      <BitechxProvider>
        <StoreProvider>
          <div className=" min-h-screen">
            <SidebarProvider>
              <Navbar />
              <SidebarTrigger />
              <div className=" w-[100%] px-4 py-2">
                {pathname == "/product" && <SearchFilter />}

                {children}
              </div>
            </SidebarProvider>
          </div>
        </StoreProvider>
      </BitechxProvider>
    </body>
  );
};

export default CommonLayout;
