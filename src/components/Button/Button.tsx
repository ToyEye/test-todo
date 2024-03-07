import { useDispatch } from "react-redux";
import { addfilter } from "../../store/filterSlice";

type TBtn = {
  name: string;
  text: string;
};

const Button = ({ name, text }: TBtn) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addfilter(name));
  };

  return (
    <button
      name={name}
      type="button"
      onClick={handleClick}
      className="block w-48 h-10 mx-auto mb-16 border-b-2 border-solid border-gray-800 bg-transparent outline-none transition-all duration-300 text-center text-md text-dark font-light tracking-wide placeholder-font-light placeholder-gray-500   "
    >
      {text}
    </button>
  );
};

export default Button;
