import { NextPage } from "next";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  {
    id: 1,
    text: "SaniTOX EP 서버 데이터베이스 정리",
    color: "red",
    checked: false,
  },
  { id: 2, text: "SaniTOX EP UI 설명", color: "orange", checked: false },
  { id: 3, text: "음료수 가지고 오기", color: "yellow", checked: false },
  { id: 4, text: "TodoList 클론코딩 하기", color: "green", checked: true },
  { id: 5, text: "설거지 하기", color: "blue", checked: false },
  { id: 6, text: "게임 정리하기", color: "navy", checked: false },
];

const app: NextPage = () => {
  return <TodoList todos={todos} />;
};

export default app;
