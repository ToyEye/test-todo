import { useDispatch } from "react-redux";
import { addfilter } from "../../store/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      className="block w-48 h-10 mx-auto mb-16 border-b-2 border-solid border-gray-800 bg-transparent outline-none transition-all duration-300 text-center text-md text-dark font-light tracking-wide placeholder-font-light placeholder-gray-500"
      placeholder="Find it"
      name="filter"
      onChange={(event) => dispatch(addfilter(event.target.value))}
    />
  );
};
