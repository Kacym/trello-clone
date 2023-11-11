import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoReducer";
import styled from "styled-components";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

export const TodoForm = () => {
  const card = useSelector((card) => card);
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

  const addNewTodoHandler = () => {
    if (inputValue) {
      const newTodo = {
        title: inputValue,
        id: Math.floor(Math.random() * 10000000),
      };
      setInputValue("");
      openAndCloseInputHandler()
      dispatch(addTodo(newTodo));
    } else {
      alert("Заполните текстовое поле");
    }
  };

  return (
    <div>
      {openAndCloseInput ? (
        <StyledNewTaskInputContainer>
          <Input
            placeholder="Ввести заголовок списка"
            onChange={getInputValue}
            value={inputValue}
          />
          <AddCardAndCancelContainer>
            <Button
              styles={{ backgroundColor: "blue", color: "white" }}
              onClick={addNewTodoHandler}
              title="Добавить список"
            />
            <CancelButton onClick={openAndCloseInputHandler}>X</CancelButton>
          </AddCardAndCancelContainer>
        </StyledNewTaskInputContainer>
      ) : (
        <Button
          onClick={openAndCloseInputHandler}
          title={
            card.length > 0
              ? "+ Добавить еще одну колонку"
              : "+ Добавить колонку"
          }
        />
      )}
    </div>
  );
};

const StyledNewTaskInputContainer = styled("div")({
  border: "solid",
});

const AddCardAndCancelContainer = styled("div")({
  display: "flex",
});

const CancelButton = styled("p")({
  cursor: "pointer",
});
