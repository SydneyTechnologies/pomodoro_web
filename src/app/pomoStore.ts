import { create } from "zustand";
import { TimerType } from "./types";

interface PomoStoreType {
  // Add your store properties here
  timerType: TimerType;
  setTimerType: (timerType: TimerType) => void;

  todoList: string[];
  addTodo: (todo: string) => void;
  removeTodo: (todo: string) => void;
}

export const usePomoStore = create<PomoStoreType>()((set) => ({
  // Initialize your store properties here
  timerType: TimerType.WORK,
  setTimerType: (timerType) => set({ timerType }),

  todoList: [],
  addTodo: (todo) => set((state) => ({ todoList: [...state.todoList, todo] })),
  removeTodo: (todo) =>
    set((state) => ({
      todoList: state.todoList.filter((item) => item !== todo),
    })),
}));
