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
    <div>
      <form onSubmit={handleSubmit(loginSubmit)}>
        <input
          {...register("email")}
          type="email"
          placeholder="Enter Your Email.."
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
