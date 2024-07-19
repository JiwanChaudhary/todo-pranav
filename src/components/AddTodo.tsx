import * as React from "react";
import { useTodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const { todo, setTodo, todoList = [], setTodoList } = useTodoContext();

  //   handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  //   handle submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // prevent default behaviour
    e.preventDefault();

    // add todo to todo list
    setTodoList([...todoList, todo]);

    // empty the todo after adding
    setTodo("");
  };

  return (
    <section className="flex items-center justify-center">
      <form className="bg-rose-400 text-lg rounded-md flex w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create new todo"
          className=" py-2 px-3 outline-none focus:outline-none rounded-l-md text-black w-full flex-[2]"
          name="todo"
          value={todo}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="border-none px-3 py-2 active:scale-95 disabled:cursor-not-allowed"
          disabled={!todo.length}
        >
          Create Todo
        </button>
      </form>
    </section>
  );
};

export default AddTodo;