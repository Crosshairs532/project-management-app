import React from "react";
import { useAppSelector } from "../../lib/hooks";

const AuthViewer = () => {
  const authState = useAppSelector((state) => state.auth);
  return (
    <div className="flex gap  border-1 border-black p-20">
      You are now {authState ? "Logged  In" : "Logged Out"}
    </div>
  );
};
export default AuthViewer;
