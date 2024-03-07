import { useSelector } from "react-redux";
import Section from "../Section/Section";
import Todo from "../Todo/Todo";

import { selectFilteredTodos } from "../../store/selectors";

const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <Section>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
        {todos.map(({ id, text, checked }, idx) => (
          <Todo
            key={id}
            text={text}
            id={id}
            count={(idx + 1).toString()}
            checked={checked}
          />
        ))}
      </ul>
    </Section>
  );
};

export default TodoList;
