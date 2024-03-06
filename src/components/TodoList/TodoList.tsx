import { useSelector } from "react-redux";
import Section from "../Section/Section";
import Todo from "../Todo/Todo";
// import { getTodos } from "../../store/todoSlice";
import { selectFilteredTodos } from "../../store/selectors";

const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <Section>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-20">
        {todos.map(({ id, text }, idx) => (
          <Todo key={id} text={text} id={id} count={(idx + 1).toString()} />
        ))}
      </ul>
    </Section>
  );
};

export default TodoList;
