import { useState } from "react";
import Header from "./components/Header/Header";
import TaskBoard from "./components/taskboard/Taskboard";
import Container from "./components/Container";
import { Route, Routes } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import CustomOutlet from "./components/CustomOutlet";
import CreateTaskPage from "./pages/CreateTaskPage";
import Page404 from "./pages/Page404";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route element={<CustomOutlet />}>
        <Route path="/" element={<TaskPage />} />
        <Route path="/task/add" element={<CreateTaskPage />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
