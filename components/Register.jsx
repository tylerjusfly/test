"use client";
import React from "react";
import InputComponent from "./InputComponent";
import Button from "./Button";
import { inputValidators } from "@/utils/formValidation";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const registerUserHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="font-nunito w-full">
      <form onSubmit={handleSubmit(registerUserHandler)} noValidate>
        <InputComponent
          label="Full name"
          type="text"
          placeholder="Abdullah Ejim"
          register={register}
          error={errors}
          disabled={false}
          validation={inputValidators.name}
          name="fullName"
        />
        <InputComponent
          label="Email"
          type="email"
          placeholder="ejim@gmail.com"
          register={register}
          error={errors}
          disabled={false}
          validation={inputValidators.email}
          name="email"
        />
        <InputComponent
          label="Password"
          type="password"
          placeholder="******"
          register={register}
          error={errors}
          disabled={false}
          validation={inputValidators.password}
          name="password"
        />
        <Button
          text="Register"
          type={"submit"}
          styles="bg-[#5c7cfa] text-color-white w-full text-center py-[1rem] rounded-[.5rem] text-[1.7rem] font-medium mt-[2rem]"
        />
      </form>
    </div>
  );
};

export default Register;
