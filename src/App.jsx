import { useState } from "react";
import Header from "./components/Header/Header";
import TaskBoard from "./components/taskboard/Taskboard";
import Container from "./components/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Container
        direction="col"
        title="დავალებების გვერდი"
        customStyle="flex flex-col gap-[40px]"
      >
        <div className="flex gap-[30px]">
          <TaskBoard id={1} />
          <TaskBoard id={2} />
          <TaskBoard id={3} />
          <TaskBoard id={4} />
        </div>
      </Container>
    </>
  );
}

export default App;
