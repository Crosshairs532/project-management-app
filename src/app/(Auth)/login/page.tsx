import React from "react";
import LoginForm from "../../../components/forms/LoginForm";
const LoginPage = () => {
  return (
    <div className=" grid grid-cols-2 gap-x-2.5 h-[100vh]">
      <div className=" border-2 flex justify-center items-center">
        <div className=" border-2 text-left  w-[30vw] h-[40vh]">
          <h1 className=" text-3xl font-semibold">
            Welcome to{" "}
            <span>
              BiTech<span>X</span>
            </span>
            !
          </h1>
          <p>Project Management App</p>
        </div>
      </div>
      <div className=" border-2">
        Login form
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
