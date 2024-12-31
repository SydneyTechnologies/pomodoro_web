import { FaListCheck } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

export default function Nav() {
  return (
    <nav className="flex justify-center items-center w-full">
      <div className="flex justify-between items-center w-11/12 lg:w-7/12 py-3 border-b border-black/10 ">
        <div className="flex items-center gap-2">
          <FaListCheck />
          <h1 className="text-lg font-bold">PomoTimer</h1>
        </div>
        <ul className="flex justify-center gap-2 items-center">
          <li className="flex justify-center items-center gap-1 white-bg-opacity cursor-pointer">
            <IoMdSettings />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
