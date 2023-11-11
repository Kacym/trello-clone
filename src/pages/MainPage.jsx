import React from "react";
import { TodoForm } from "../components/CardForm";
import { TodoList } from "../components/CardList";
import styled from "styled-components";

export const MainPage = () => {
  return (
    <StyledMainPage>
      <TodoList />
      <TodoForm />
    </StyledMainPage>
  );
};

const StyledMainPage = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
