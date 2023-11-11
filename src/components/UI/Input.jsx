import React from "react";
import styled from "styled-components";

export const Input = ({ value, onChange, props, placeholder }) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

const StyledInput = styled("input")({});
