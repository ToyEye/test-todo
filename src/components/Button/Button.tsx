import { useDispatch } from "react-redux";
import { addfilter } from "../../store/filterSlice";
import clsx from "clsx";

type TBtn = {
  name: string;
  text: string;
};

const Button = ({ name, text }: TBtn) => {
  const buttonStyle = clsx(
    "cursor-pointer transition-all  text-white px-6 py-2 rounded-lg  border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]",
    name === "showAll" && "bg-blue-500 border-blue-600",
    name === "showChecked" && "bg-green-500 border-green-600",
    name === "showUnChecked" && "bg-red-500 border-red-600"
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addfilter(name));
  };

  return (
    <button
      name={name}
      type="button"
      onClick={handleClick}
      className={buttonStyle}
    >
      {text}
    </button>
  );
};

export default Button;
