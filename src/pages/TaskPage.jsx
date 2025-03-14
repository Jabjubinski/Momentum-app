import React from "react";
import Container from "../components/Container";
import Header from "../components/Header/Header";
import TaskBoard from "../components/taskboard/Taskboard";

export default function TaskPage() {
  return (
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
  );
}
