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

const CommonLayout = ({ children }) => {
  return (
    <body className={`antialiased`} suppressHydrationWarning={true}>
      <BitechxProvider>
        <StoreProvider>
          <div className=" min-h-screen">
            <SidebarProvider>
              <Navbar />
              <SidebarTrigger />
              <div className=" w-[100%] px-4 py-2">{children}</div>
            </SidebarProvider>
          </div>
        </StoreProvider>
      </BitechxProvider>
    </body>
  );
};

export default CommonLayout;
