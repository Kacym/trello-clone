import React from "react";
import styled from "styled-components";

export const Button = ({ styles, title, onClick }) => {
  return (
    <StyledButton style={styles} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled("button")({
  border: "none",
  cursor: "pointer",
});
