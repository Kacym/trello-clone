import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardItem } from "./CardItem";
import { Box, styled } from "@mui/material";
import { getTodos } from "../redux/todoReducer";

export const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])
  return (
    <CardsContainer>
      {todos.map((card) => (
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
