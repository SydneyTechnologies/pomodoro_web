export enum TimerType {
  WORK = "Work",
  SHORT_BREAK = "Short Break",
  LONG_BREAK = "Long Break",
}

export type CustomButtonProps = {
  btnName: string;
  onClick?: () => void;
};
