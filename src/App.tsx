import { Filter } from "./components/Filter/Filter";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoList from "./components/TodoList/TodoList";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Form />
      <Filter />
      <TodoCounter />
      <TodoList />
      <Toaster />
    </>
  );
}

export default App;
