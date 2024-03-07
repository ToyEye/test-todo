import { RiDeleteBinLine } from "react-icons/ri";
import Text from "../Text/Text";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCheckTodo } from "../../store/todoSlice";

const Todo = ({
  text,
  id,
  count,
}: {
  text: string;
  id: string;
  count: string;
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleCheckTodo = () => {
    dispatch(toggleCheckTodo(id));
  };

  return (
    <li className="flex flex-col items-center justify-center">
      <div className="p-10 bg-gray-200 rounded-lg text-gray-600 shadow-md relative w-full h-full">
        <Text>TODO #{count}</Text>
        <div onClick={handleCheckTodo}>
          <Text>{text}</Text>
        </div>
        <button
          className="absolute top-0 p-5 transition-transform transform duration-300 hover:scale-105 focus:scale-105 disabled:opacity-50 disabled:text-gray-500 disabled:pointer-events-none text-red-500"
          type="button"
          onClick={handleDelete}
        >
          <RiDeleteBinLine size={24} />
        </button>
      </div>
    </li>
  );
};

export default Todo;
