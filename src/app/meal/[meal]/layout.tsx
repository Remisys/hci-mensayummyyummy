"use client";

import { FC, ReactNode } from "react";
import { Home } from "../../Home";

const Layout: FC<{ params: { meal: string }; children: ReactNode }> = ({
  params: { meal },
  children,
}) => {
  return (
    <div className="flex flex-row w-100 h-screen">
      <div className="w-[50%] overflow-y-auto h-100 max-h-screen">
        {children}
      </div>
      <div className="w-[50%] p-5 overflow-y-auto h-full max-h-screen">
        <Home showingMeal={meal} />
      </div>
    </div>
  );
};

export default Layout;
