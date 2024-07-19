import AddTodo from "./AddTodo";
import Todos from "./Todos";

const Todo = () => {
  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Welcome to Todo App</h1>
      <div className="flex gap-4">
        <div className="p-5 rounded-lg mb-4  h-fit border">
          <AddTodo />
        </div>
        <div className="w-[500px]">
          <Todos />
        </div>
      </div>
    </>
  );
};

export default Todo;
