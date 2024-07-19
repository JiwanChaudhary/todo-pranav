import { useTodoContext } from "../context/TodoContext";
import UpdateTodo from "./UpdateTodo";
import React from "react";

const Todos = () => {
  const { todoList, setTodoList } = useTodoContext();

  return (
    // main section
    <section className="mt-5">
      <div className="p-4 border border-gray-300 rounded-lg">
        {/* all todo */}
        <h2 className="m-2 text-lg font-semibold">My Todo</h2>
        <hr />
        {todoList?.length === 0 ? (
          <div className=" m-2 text-lg">No todos</div>
        ) : (
          <>
            {todoList?.map((todo, index) => (
              <React.Fragment key={index}>
                <li
                  className="m-2 p-2 rounded-md flex items-center justify-between"
                  key={index}
                >
                  <span
                    className={`flex-[4] text-left`}
                  >
                    {todo}
                  </span>
                  {/* update button */}
                  <div className="flex flex-[2] justify-between items-center gap-2">
                    <UpdateTodo index={index} />

                    {/* delete button */}
                    <button
                      type="submit"
                      className="p-1 bg-red-700 rounded-md"
                      onClick={() =>
                        setTodoList(todoList.filter((item) => item !== todo))
                      }
                    >
                      Delete
                    </button>

                  </div>
                </li>
                <hr />
              </React.Fragment>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Todos;