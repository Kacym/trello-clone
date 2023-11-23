import { Box, styled } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import GoogleButton from "react-google-button";
import { UserAuth } from "../../context/AuthContext";

export const SignIn = () => {
  const { googleSignIn, logOut, user } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const { register, handleSubmit } = useForm({
    defaultValues: { firstName: "" },
  });

  const onSubmit = (userData) => console.log(userData);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignUpForm component="form" onSubmit={handleSubmit(onSubmit)}>
      <input onChange={(e) => e.target.value} {...register("firstName")} />
      <button type="submit">click</button>
      <GoogleButton onClick={handleGoogleSignIn} />
      {user?.displayName ? (
        <button onClick={handleLogOut}>sign out</button>
      ) : null}
    </SignUpForm>
  );
};

const SignUpForm = styled(Box)({});
