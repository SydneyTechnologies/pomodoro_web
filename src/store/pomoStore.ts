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
  timerStateDuration: number;
  setTimerStateDuration: (timerStateDuration: number) => void;
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
  timerStateDuration: 25 * 60,
  setTimerStateDuration: (timerStateDuration) => set({ timerStateDuration }),
}), {
  name: "pomo-storage",
  // storage: createJSONStorage(() => localStorage),
  }
));
