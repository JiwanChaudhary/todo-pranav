import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

const UpdateTodo = ({ index }: { index: number }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [updatedTodo, setUpdatedTodo] = useState("");
  const { todoList, updateTodo } = useTodoContext();

  // Removed the currentTodo variable as it's no longer directly used

  // update
  const handleEditClick = () => {
    setShowModal(true);
    // Initialize updatedTodo with the current todo's value when showing the modal
    setUpdatedTodo(todoList[index]);
  };

  // submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTodo(index, updatedTodo);
    setShowModal(false);
  };

  return (
    <div>
      <button
        type="button" // Changed to "button" to prevent form submission
        className="p-1 bg-green-700 rounded-md"
        onClick={handleEditClick}
      >
        Update
      </button>
      {showModal && (
        <>
          <form
            className="border border-black bg-gray-500/20 h-full w-full p-5 rounded-md"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="todo"
              value={updatedTodo} // Use updatedTodo for the input value
              className=" text-black px-3 py-2 rounded-md focus:outline-none"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUpdatedTodo(e.target.value);
              }}
            />
            <button
              type="submit"
              className={`bg-green-700 border-none rounded-md m-2 p-2 disabled:cursor-not-allowed`}
              disabled={!updatedTodo.length}
            >
              Update Todo
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default UpdateTodo;