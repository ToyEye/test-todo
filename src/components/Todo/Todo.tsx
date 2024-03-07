import { RiDeleteBinLine } from "react-icons/ri";
import Text from "../Text/Text";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCheckTodo } from "../../store/todoSlice";
import Heading from "../Heading/Heading";

const Todo = ({
  text,
  id,
  count,
  checked,
}: {
  text: string;
  id: string;
  count: string;
  checked: boolean;
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
        <Heading
          tag="h2"
          text={`TODO #${count}`}
          className="font-medium mb-1"
        />
        <div onClick={handleCheckTodo}>
          <Text type={checked ? "primary" : "secondary"}>{text}</Text>
        </div>
        <button
          className="absolute top-[10px] right-[10px]  transition-transform transform duration-300 hover:scale-105 focus:scale-105 disabled:opacity-50 disabled:text-gray-500 disabled:pointer-events-none text-red-500"
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
