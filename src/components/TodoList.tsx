import { useRecoilValue } from "recoil"
import { todoListState } from "../states/atoms/todoListState"
import { TodoItemCreator } from "./TodoItemCreator"

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState)
  return(
    <>
      <TodoItemCreator></TodoItemCreator>
    </>
  )
}