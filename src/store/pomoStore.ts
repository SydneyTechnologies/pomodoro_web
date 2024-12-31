import { create } from "zustand";
import { TimerType } from "../app/types";
import { persist, createJSONStorage } from "zustand/middleware";

interface PomoStoreType {
  // Add your store properties here
  timerType: TimerType;
  setTimerType: (timerType: TimerType) => void;
  todoList: string[];
  addTodo: (todo: string) => void;
  removeTodo: (todo: string) => void;
  timerDuration: number;
  setTimerDuration: (timerDuration: number) => void;
  initialTime: string;
  setInitialTime: (initialTime: string) => void;
  timerObj: NodeJS.Timeout | null;
  setTimerObj: (timerObj: NodeJS.Timeout | null) => void;
  workDuration: number;
  setWorkDuration: (WorkDuration: number) => void;
  shortBreakDuration: number;
  setShortBreakDuration: (shortBreakDuration: number) => void;
  longBreakDuration: number;
  setLongBreakDuration: (longBreakDuration: number) => void;
  setTimerStateDuration: (duration: number) => void;
}

export const usePomoStore = create<PomoStoreType>()(
  persist(
  (set) => ({
  // Initialize your store properties here
  timerType: TimerType.WORK,
  setTimerType: (timerType) => set({ timerType }),
  todoList: [],
  timerDuration: 25 * 60,
  setTimerDuration: (timerDuration) => set({ timerDuration }),
  addTodo: (todo) => set((state) => ({ todoList: [...state.todoList, todo] })),
  removeTodo: (todo) =>
    set((state) => ({
      todoList: state.todoList.filter((item) => item !== todo),
    })),
  initialTime: "25:00",
  setInitialTime: (initialTime) => set({ initialTime }),
  timerObj: null,
  setTimerObj: (timerObj) => set({ timerObj }),
  workDuration: 25 * 60,
  setWorkDuration: (workDuration) => set({ workDuration }),
  shortBreakDuration: 5 * 60,
  setShortBreakDuration: (shortBreakDuration) => set({ shortBreakDuration }),
  longBreakDuration: 15 * 60,
  setLongBreakDuration: (longBreakDuration) => set({ longBreakDuration }),
  setTimerStateDuration: (duration) => {
    const currentTimerState = usePomoStore.getState().timerType;
    switch (currentTimerState) {
      case TimerType.WORK:
        usePomoStore.getState().setWorkDuration(duration);
        break;
      case TimerType.SHORT_BREAK:
        usePomoStore.getState().setShortBreakDuration(duration);
        break;
      case TimerType.LONG_BREAK:
        usePomoStore.getState().setLongBreakDuration(duration);
        break;
    }
  }
}), {
  name: "pomo-storage",
  // storage: createJSONStorage(() => localStorage),
  }
));
