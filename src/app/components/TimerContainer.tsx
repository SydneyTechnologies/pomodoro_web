"use client";
import { TimerType } from "../types";
import { CustomButton } from "./CustomButton";
import { usePomoStore } from "../../store/pomoStore";
import { useRef, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { ImCheckmark2 } from "react-icons/im";

export default function TimerContainer() {
  const availableTimers = Object.values(TimerType).map((value) => value);

  const [startTimer, setStartTimer] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState<string | number>(25);
  const [timerSeconds, setTimerSeconds] = useState<string | number>("00");
  const [showEditTimer, setShowEditTimer] = useState(false);

  const timerRef = useRef<HTMLHeadingElement>(null);

  const timerType = usePomoStore((state) => state.timerType);
  const timerDuration = usePomoStore((state) => state.timerDuration);
  const initialTime = usePomoStore((state) => state.initialTime);
  const timerObj = usePomoStore((state) => state.timerObj);
  const setTimerType = usePomoStore((state) => state.setTimerType);
  const setTimerDuration = usePomoStore((state) => state.setTimerDuration);
  const setInitialTime = usePomoStore((state) => state.setInitialTime);
  const setTimerObj = usePomoStore((state) => state.setTimerObj);

  const handleChangeTimerType = (timerName: TimerType) => {
    setTimerType(timerName);
    const _duration = setDefaultTimerDuration(timerName);
    handleInitialTimer(_duration);
    resetTimer();
  };

  const handleStartTimer = (duration: number) => {
    if (timerRef.current != null) {
      const timer = setInterval(() => {
        duration = duration - 1;
        setTimerDuration(duration);
        if (duration <= 0) {
          clearInterval(timer);
        }
        const time = formatDuration(duration);
        if (timerRef.current != null) {
          timerRef.current.textContent = `${time.minutes}:${time.seconds}`;
        }
      }, 1000);

      setTimerObj(timer);
    }
  };

  const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    if (seconds < 10) {
      return { minutes, seconds: `0${seconds}` };
    }
    return { minutes, seconds };
  };

  const toggleTimer = () => {
    if (timerObj) {
      clearInterval(timerObj);
    }

    setStartTimer((startTimer) => !startTimer);

    if (!startTimer) {
      handleStartTimer(timerDuration);
    }
  };

  const resetTimer = () => {
    if (timerObj) {
      clearInterval(timerObj);
    }

    setStartTimer(false);

    return startTimer;
  };

  const setDefaultTimerDuration = (timerName: TimerType) => {
    let _duration;
    switch (timerName) {
      case TimerType.WORK:
        _duration = 25 * 60;

        break;
      case TimerType.SHORT_BREAK:
        _duration = 5 * 60;

        break;
      case TimerType.LONG_BREAK:
        _duration = 15 * 60;

        break;
    }

    setTimerDuration(_duration);
    return _duration;
  };

  const handleInitialTimer = (_duration: number) => {
    const initialTimer = formatDuration(_duration);

    setTimerMinutes(initialTimer.minutes);
    setTimerSeconds(initialTimer.seconds);

    setInitialTime(`${initialTimer.minutes}:${initialTimer.seconds}`);
  };

  return (
    <section className="flex justify-start flex-col items-center my-10 w-full">
      <div className="flex flex-col items-center gap-6 timer-bg bg-white rounded-lg py-7 w-11/12 lg:w-6/12 xl:w-4/12 2xl:w-3/12">
        <div className="flex justify-center items-center w-full gap-4">
          {availableTimers.map((timerName) => {
            return (
              <button
                className={`${
                  timerName == timerType && "bg-black/15 font-bold"
                } px-3 py-1 rounded-sm`}
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

            <h1
              className={`text-7xl lg:text-9xl font-bold font-rubik ${
                showEditTimer && "hidden"
              }`}
              ref={timerRef}
            >
              {initialTime}
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div
                className={`flex w-11/12 items-center justify-center initial-timer-bg ${
                  !showEditTimer && "hidden"
                }`}
              >
                <input
                  value={timerMinutes}
                  onChange={(e) => setTimerMinutes(e.target.value)}
                  className="text-7xl text-center lg:text-9xl font-bold font-rubik w-5/12 pr-0 bg-transparent outline-none border-none"
                />
                <span className="text-7xl lg:text-9xl font-bold font-rubik">
                  :
                </span>
                <input
                  value={timerSeconds}
                  onChange={(e) => setTimerSeconds(e.target.value)}
                  className="text-7xl text-center lg:text-9xl font-bold font-rubik w-5/12 pl-0 bg-transparent outline-none border-none"
                />
              </div>
            </div>

            <p>Remaining</p>
          </div>
          <div className="flex items-center justify-center gap-4 relative w-full">
            <CustomButton
              btnName={startTimer ? "Pause" : "Start"}
              onClick={toggleTimer}
            />
            <div
              onClick={() => setShowEditTimer(!showEditTimer)}
              className="absolute right-3 lg:right-10 top-4 cursor-pointer text-2xl"
            >
              {showEditTimer ? <ImCheckmark2 /> : <FiEdit3 />}
            </div>
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
