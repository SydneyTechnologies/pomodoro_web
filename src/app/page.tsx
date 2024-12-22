"use client";
import Nav from "./components/Nav";
import { TasksContainer } from "./components/TasksContainer";
import TimerContainer from "./components/TimerContainer";
import { usePomoStore } from "./pomoStore";
export default function Home() {
  const timerType = usePomoStore((state) => state.timerType);

  const slugify = (value: string) => {
    return value.toLowerCase().replace(/\s/g, "-");
  };

  return (
    <main
      className={`bg-background min-h-screen ${slugify(timerType.valueOf())}`}
    >
      <Nav />
      <TimerContainer />
      <TasksContainer />
    </main>
  );
}
