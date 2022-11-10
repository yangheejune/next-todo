import { TodoType } from "../../types/todo";
import { readFileSync, writeFileSync } from "fs";

//* 투두리스트 데이터 불러오기
const getList = () => {
  const todosBuffer = readFileSync("data/todos.json");
  const todosString = todosBuffer.toString();
  if (!todosString) {
    return [];
  }
  const todos: TodoType[] = JSON.parse(todosString);
  return todos;
};

//* id의 투두가 있는지 확인하기
const exist = ({ id }: { id: number }) => {
  const todos = getList();
  const todo = todos.some((todo) => todo.id === id);
  return todo;
};

//* 투두리스트 저장하기
const write = async (todos: TodoType[]) => {
  writeFileSync("data/todos.json", JSON.stringify(todos));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getList, exist, write };
