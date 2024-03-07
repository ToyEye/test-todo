import { Filter } from "./components/Filter/Filter";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Form />
      <Filter />
      <TodoList />
      <Toaster />
    </>
  );
}

export default App;
