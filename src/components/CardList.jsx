import React from "react";
import { useSelector } from "react-redux";
import { CardItem } from "./CardItem";
import { Box, styled } from "@mui/material";

export const TodoList = () => {
  const card = useSelector((task) => task);
  return (
    <CardsContainer>
      {card.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </CardsContainer>
  );
};

const CardsContainer = styled(Box)({
  outline: "solid",
  display: "flex",
  gap: "20px",
});
