import { useSelector } from "react-redux";
import { getCounter } from "../../store/todoSlice";
import Section from "../Section/Section";

const TodoCounter = () => {
  const { completedTaskCounter, unCompletedTaskCounter } =
    useSelector(getCounter);

  return (
    <Section>
      <p>
        Completed Tasks:{" "}
        <span className="text-green-600 font-semibold ">
          {completedTaskCounter}
        </span>
      </p>
      <p>
        Uncompleted Tasks:{" "}
        <span className="text-red-700 font-semibold">
          {unCompletedTaskCounter}
        </span>
      </p>
    </Section>
  );
};

export default TodoCounter;
