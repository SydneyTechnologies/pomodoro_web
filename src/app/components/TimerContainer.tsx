"use client";
import { TimerType } from "../types";
import { CustomButton } from "./CustomButton";
import { usePomoStore } from "../pomoStore";

export default function TimerContainer() {
  const availableTimers = Object.values(TimerType).map((value) => value);

  const setTimerType = usePomoStore((state) => state.setTimerType);
  const timerType = usePomoStore((state) => state.timerType);

  const handleChangeTimerType = (timerName: TimerType) => {
    setTimerType(timerName);
  };

  return (
    <section className="flex justify-start flex-col items-center my-10 w-full">
      <div className="flex flex-col items-center gap-6 timer-bg bg-white rounded-lg py-7 w-11/12 lg:w-6/12 xl:w-4/12 2xl:w-2/12">
        <div className="flex justify-center items-center w-full gap-4">
          {availableTimers.map((timerName) => {
            return (
              <button
                className={`${
                  timerName == timerType && "bg-black/15 font-bold"
                } px-3 py-1 min-w-[100px] rounded-sm `}
                key={timerName}
                onClick={() => handleChangeTimerType(timerName)}
              >
                {timerName}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="flex flex-col items-center gap-2">
            {/* <Image
              src="/grow.gif"
              width={100}
              height={100}
              alt="a dragon"
              className="white-bg-opacity "
            /> */}
            {/* <Image src="/hand.gif" width={100} height={100} alt="a dragon" /> */}

            <h1 className="text-7xl lg:text-9xl font-bold font-rubik">25:00</h1>
            <p>Remaining</p>
          </div>
          <div className="flex items-center gap-4">
            <CustomButton btnName="Start" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-lg mt-4">
        <p className="text-white/60">#1</p>
        <p>Let&apos;s get it!</p>
      </div>
    </section>
  );
}
