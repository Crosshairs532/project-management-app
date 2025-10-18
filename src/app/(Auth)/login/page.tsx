import React from "react";
import LoginForm from "../../../components/forms/LoginForm";
export const dynamic = "force-dynamic";
const LoginPage = () => {
  return (
    <div className=" grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-x-2.5 h-[100vh]">
      <div className=" hidden lg:flex md:flex Login-text relative bg-[#EFF1F3] justify-center items-center">
        <div className=" absolute w-[10vw] h-[10vw]  bg-[#4E6E5D] -translate-x-1/2 -translate-y-[10%] blur-[80px] "></div>
        <div className=" absolute w-[10vw] h-[10vw]  bg-[#AD8A64] -translate-x-[20%] -translate-y-[90%] blur-[80px] "></div>
        <div className=" z-10 text-left w-[30vw] h-[40vh]">
          <h1 className=" text-6xl font-semibold">
            Welcome to{" "}
            <span>
              BiTech<span className=" text-[#A44A3F]">X</span>
            </span>
            !
          </h1>
          <p className=" pt-1.5">Project Management App</p>
        </div>
      </div>
      <div className=" Login-form flex justify-center  flex-col items-center">
        <div className=" block md:hidden lg:hidden z-10 text-left w-[50%] h-[20vh]">
          <h1 className=" text-4xl font-semibold">
            Welcome to{" "}
            <span>
              BiTech<span className=" text-[#A44A3F]">X</span>
            </span>
            !
          </h1>
          <p className=" pt-1.5">Project Management App</p>
        </div>
        <div className="  w-[50%] h-[50%]">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
