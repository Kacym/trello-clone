import React from "react";
import styled from "styled-components";

export const Button = ({ styles, title, onClick, ...rest }) => {
  return (
    <StyledButton style={styles} onClick={onClick} {...rest}>
      {title}
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
