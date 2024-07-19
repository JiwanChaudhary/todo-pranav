import { useTodoContext } from "../context/TodoContext";

type CompleteTodoProps = {
  index: number;
};

const CompleteTodo = ({ index }: CompleteTodoProps) => {
  const { checkedTodos, toggleCheck } = useTodoContext();

  return (
    <>
      <input
        type="checkbox"
        className="w-[30px] h-[30px] rounded-md"
        onChange={() => {
          toggleCheck(index);
        }}
        checked={checkedTodos[index]}
      />
    </>
  );
};

export default CompleteTodo;