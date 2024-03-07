import { ChangeEvent, FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Section from "../Section/Section";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addTodo } from "../../store/todoSlice";
import toast from "react-hot-toast";
import Text from "../Text/Text";

const Form = () => {
  const [query, setQuery] = useState("");

  const characterLimit = 200;

  const dispatch = useDispatch();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (query.length > characterLimit) {
      toast.error("Character limit reached");
      return;
    }

    const todo = {
      id: nanoid(),
      text: query,
      checked: false,
    };

    dispatch(addTodo(todo));

    setQuery("");
  };

  return (
    <Section>
      <form className="max-w-md mx-auto relative mb-10" onSubmit={handleSubmit}>
        <button
          className="w-12 h-12 text-xl font-bold text-dark absolute top-0 right-0"
          type="submit"
        >
          <FiSearch size="16px" />
        </button>

        <input
          className="w-full h-14 border-b border-solid border-gray-700 bg-transparent px-4 pr-10 outline-none transition-all duration-300 focus:border-black text-base text-dark font-light tracking-wide placeholder-font-light"
          onChange={handleInput}
          placeholder="What do you want to write?"
          name="search"
          required
          value={query}
          autoFocus
        />
      </form>
      <Text>
        {query.length}/{characterLimit}
      </Text>
    </Section>
  );
};

export default Form;
