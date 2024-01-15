"use client";

import { profiles } from "@/app/db";
import { FC, ReactNode } from "react";
import { Home } from "../../Home";
import { useGetDatabaseValue } from "./query";

const Layout: FC<{ params: { meal: string }; children: ReactNode }> = ({
  params: { meal },
  children,
}) => {
  const user = useGetDatabaseValue("user") ?? "undefined";
  return (
    <div className="flex flex-col lg:flex-row w-100 h-screen">
      <div
        className={`relative w-full ${
          user in profiles ? "h-[50%] lg:w-[50%] lg:h-full" : ""
        } overflow-y-auto  max-h-screen`}
      >
        {children}
      </div>
      {user in profiles && (
        <div className="w-full h-[50%] border lg:border-none lg:w-[50%] p-5 overflow-y-auto lg:h-full max-h-screen">
          <Home guestMode />
        </div>
      )}
    </div>
  );
};

export default Layout;
