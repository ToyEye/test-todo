import { useSelector } from "react-redux";
import { getCounter } from "../../store/todoSlice";
import Section from "../Section/Section";

const TodoCounter = () => {
  const { completedTaskCounter, unCompletedTaskCounter } =
    useSelector(getCounter);

  return (
    <Section>
      <p>Completed Tasks: {completedTaskCounter}</p>
      <p>Uncompleted Tasks: {unCompletedTaskCounter}</p>
    </Section>
  );
};

export default TodoCounter;
