import React from "react";
import styled from "styled-components";

export const Button = ({ type, styles, children, onClick, ...rest }) => {
  return (
    <StyledButton type={type} style={styles} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled("button")({
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
});
