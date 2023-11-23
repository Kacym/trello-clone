import { Box, styled } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import GoogleButton from "react-google-button";

export const SignUp = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: { firstName: "" },
  });

  const onSubmit = (userData) => console.log(userData);

  return (
    <SignUpForm component="form" onSubmit={handleSubmit(onSubmit)}>
      <input onChange={(e) => e.target.value} {...register("firstName")} />
      <button type="submit">click</button>
      <GoogleButton />
    </SignUpForm>
  );
};

const SignUpForm = styled(Box)({});
