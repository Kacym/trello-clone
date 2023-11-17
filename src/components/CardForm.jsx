import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/todoReducer";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

export const TodoForm = () => {
  const card = useSelector((card) => card.todoReducer.todos);
  console.log(card);
  const [openAndCloseInput, setOpenAndCloseInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const openAndCloseInputHandler = () => {
    setOpenAndCloseInput((prevState) => !prevState);
  };
  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const dispatch = useDispatch();

  console.log(card);

  const addNewTodoHandler = () => {
    if (inputValue) {
      const newTodo = {
        title: inputValue,
        card: {},
        id: Math.floor(Math.random() * 10000000),
      };
      setInputValue("");
      openAndCloseInputHandler();
      dispatch(addTodo(newTodo));
    } else {
      alert("Заполните текстовое поле");
    }
  };

  return (
    <>
      {openAndCloseInput ? (
        <StyledNewTaskInputContainer>
          <StyledInput
            placeholder="Ввести заголовок списка"
            onChange={getInputValue}
            value={inputValue}
          />
          <AddCardAndCancelContainer>
            <StyledButton onClick={addNewTodoHandler} title="Добавить список" />
            <CancelButton onClick={openAndCloseInputHandler}>
              &#10005;
            </CancelButton>
          </AddCardAndCancelContainer>
        </StyledNewTaskInputContainer>
      ) : (
        <StyledButton
          onClick={openAndCloseInputHandler}
          title={
            card.length > 0
              ? "+ Добавить еще одну колонку"
              : "+ Добавить колонку"
          }
        />
      )}
    </>
  );
};

const StyledNewTaskInputContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  border: "solid",
});

const AddCardAndCancelContainer = styled("div")({
  display: "flex",
  gap: "5px",
});

const CancelButton = styled("p")({
  cursor: "pointer",
});

const StyledButton = styled(Button)({
  backgroundColor: "blue",
});

const StyledInput = styled(Input)({
  padding: "10px 5px",
});
