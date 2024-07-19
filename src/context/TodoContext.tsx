import * as React from "react";

type TodoContextProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todoList: Array<string>;
  setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  updateTodo: (index: number, newTodo: string) => void;
  checkedTodos: boolean[];
  toggleCheck: (index: number) => void;
};

// create context
export const TodoContext = React.createContext<TodoContextProps | null>(null);

// context provider
export const TodoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [todo, setTodo] = React.useState<string>(""); //handle todo change
  const [todoList, setTodoList] = React.useState<Array<string>>([]); //handle todo list
  const [isChecked, setIsChecked] = React.useState<boolean>(false); //check if todo is completed
  const [checkedTodos, setCheckedTodos] = React.useState<boolean[]>([]);

  // update todo function
  const updateTodo = (index: number, newTodo: string) => {
    setTodoList((prevTodoList) => {
      const updatedTodoList = [...prevTodoList];
      updatedTodoList[index] = newTodo;
      setIsChecked(true);
      return updatedTodoList;
    });
  };

  // check if todo is complete
  const toggleCheck = (index: number) => {
    setCheckedTodos((prevCheckedTodos) => {
      const updatedCheckedTodos = [...prevCheckedTodos];
      updatedCheckedTodos[index] = !updatedCheckedTodos[index];
      return updatedCheckedTodos;
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        todoList,
        setTodoList,
        isChecked,
        setIsChecked,
        updateTodo,
        checkedTodos,
        toggleCheck,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// use context
export function useTodoContext() {
  const context = React.useContext(TodoContext);

  if (context === null) {
    throw new Error("Something went wrong");
  }

  return context;
}