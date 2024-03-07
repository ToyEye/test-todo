import { Filter } from "./components/Filter/Filter";
import Form from "./components/Form/Form";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoList from "./components/TodoList/TodoList";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Form />
      <Filter />
      <TodoCounter />
      <TodoList />
      <Toaster />
    </>
  );
}

export default App;
