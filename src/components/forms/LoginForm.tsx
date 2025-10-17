"use client";
import React, { useRef, useState } from "react";
import { useAppDispatch } from "../../lib/hooks";
import { useForm } from "react-hook-form";
import { login as LoginState } from "../../lib/features/authSlice";
import { useLoginMutation } from "../../lib/api/services/loginApi";
import toast from "react-hot-toast";

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const dispatch = useAppDispatch();
  const [login, { data, isLoading, error, isSuccess, isError }] =
    useLoginMutation() as any;

  const loginSubmit = async (data) => {
    const toastId = toast.loading("Logging in...");
    const res = await login({ email: data.email });

    if (!res.data?.token) {
      return toast.error("Login failed!", { id: toastId });
    }

    toast.success("Logged in successfully!", {
      id: toastId,
    });
    dispatch(LoginState({ token: res.data?.token, email: data.email }));
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        className=" space-y-5 flex flex-col "
        onSubmit={handleSubmit(loginSubmit)}
      >
        <div>
          {" "}
          <label
            htmlFor="email"
            className=" block text-sm/6 text-[#0D1821] font-medium "
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              {...register("email", { required: true })}
              autoComplete="email"
              placeholder="Enter Your email address"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-[#0D1821] outline-1 -outline-offset-1 outline-[#0D1821] placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#0D1821]/60 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className=" cursor-pointer flex w-full justify-center rounded-md bg-[#A44A3F] px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-[#A44A3F]/95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
