import React from "react";
import { TextField } from "@mui/material";

export const Input = ({ onChange, placeholder }) => {
  return <TextField onChange={onChange} placeholder={placeholder} />;
};
