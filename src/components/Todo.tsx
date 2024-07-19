import AddTodo from "./AddTodo";
import Todos from "./Todos";

const Todo = () => {
  return (
    <>
      <div className="w-[500px] border border-gray-400 p-5 rounded-lg">
        <h1 className=" font-bold text-2xl">Welcome to Todo App</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
};

export default Todo;