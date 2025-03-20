import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import CustomOutlet from "./components/CustomOutlet";
import CreateTaskPage from "./pages/CreateTaskPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Page404 from "./pages/Page404";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route element={<CustomOutlet />}>
        <Route path="/" element={<TaskPage />} />
        <Route path="/task/add" element={<CreateTaskPage />} />
        <Route path="task/:id" element={<TaskDetailsPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
