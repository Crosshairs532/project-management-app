"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const BitechxProvider = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default BitechxProvider;
