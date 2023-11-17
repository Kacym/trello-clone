import React from "react";
import styled from "styled-components";

export const Input = ({ value, onChange, placeholder, ...rest }) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

const StyledInput = styled("input")({});
