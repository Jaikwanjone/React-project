import { ReactNode } from "react";

interface topbar {
  children: ReactNode;
}

const TopBar = ({ children }: topbar) => {
  return (
    <div className=" w-full h-14 bg-stone-600 fixed top-0 flex justify-between">
      {children}
    </div>
  );
};

export default TopBar;
