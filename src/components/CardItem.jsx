import { Box, styled } from "@mui/material";
import React from "react";

export const CardItem = ({ card }) => {
  return (
    <StyledCardItem component="div">
      <h3>{card.title}</h3>
    </StyledCardItem>
  );
};

const StyledCardItem = styled(Box)({
  width: "15rem",
  textAlign: "center",
  backgroundColor: "lightgray",
  borderRadius: "6px",
});
