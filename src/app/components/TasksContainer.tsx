import { SlOptionsVertical } from "react-icons/sl";
import { MdAddBox } from "react-icons/md";

export function TasksContainer() {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-between items-center w-11/12 lg:w-6/12 xl:w-4/12 2xl:w-3/12 py-3 border-b border-white ">
        <h1 className="text-lg font-bold">Tasks</h1>
        <div className="flex text-xl font-bold items-center bg-white/10 px-2 py-2 rounded-md">
          <SlOptionsVertical />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 w-11/12 lg:w-6/12 xl:w-4/12 2xl:w-3/12">
        <div className="w-full py-6 gap-2 my-4 flex justify-center items-center bg-black/10 rounded-lg border-2 border-white/40 border-dashed">
          <MdAddBox />
          <h2 className="text-white/80 font-bold">Add Task</h2>
        </div>
      </div>
    </section>
  );
}
