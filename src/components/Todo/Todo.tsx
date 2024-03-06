import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import Text from "../Text/Text";
import { useDispatch } from "react-redux";
import { addCurrentTodo, deleteTodo } from "../../store/todoSlice";

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
  return (
    <li className="flex flex-col items-center justify-center">
      <div className="p-10 bg-gray-200 rounded-lg text-gray-600 shadow-md relative w-full h-full">
        <Text>TODO #{count}</Text>

        <Text>{text}</Text>
        <button
          className="absolute top-0 p-5 transition-transform transform duration-300 hover:scale-105 focus:scale-105 disabled:opacity-50 disabled:text-gray-500 disabled:pointer-events-none text-red-500"
          type="button"
          onClick={handleDelete}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          className="absolute bottom-0 p-5 transition-transform transform duration-300 hover:scale-105 focus:scale-105 disabled:opacity-50 disabled:text-gray-500 disabled:pointer-events-none text-light-blue"
          type="button"
          onClick={() => dispatch(addCurrentTodo({ id, text }))}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </li>
  );
};

export default Todo;
