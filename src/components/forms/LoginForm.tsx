"use client";
import React from "react";
import { useAppDispatch } from "../../lib/hooks";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const dispatch = useAppDispatch();

  const loginSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit()}></form>
    </div>
  );
};

export default LoginForm;
