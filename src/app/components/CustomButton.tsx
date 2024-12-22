import { CustomButtonProps } from "../types";

export function CustomButton({ btnName, onClick }: CustomButtonProps) {
  return (
    <div className="w-fit relative">
      <div className="absolute top-1 left-0 w-full h-full bg-white opacity-50 rounded-md"></div>
      <button
        onClick={onClick}
        className="bg-white relative z-10 text-background uppercase text-xl font-bold min-w-[200px] min-h-[55px] px-4 py-2 rounded-md"
      >
        {btnName}
      </button>
    </div>
  );
}
