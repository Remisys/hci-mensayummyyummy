// Import necessary libraries and components
"use client";
import { Home } from "./Home";
import { profiles } from "./db";
import { useGetDatabaseValue } from "./meal/[meal]/query";

export default function RootPage() {
  const user = useGetDatabaseValue("user") ?? "undefined";
  const extraCSS = user in profiles ? "flex flex-col lg:flex-row" : "";
  console.log("User exists : ", user in profiles);
  return (
    <div className={`overflow-y-auto h-full max-h-screen w-full ${extraCSS}`}>
      {user in profiles ? (
        <>
          <div className="w-full h-[50%] lg:w-[50%] overflow-y-auto lg:h-full max-h-screen border-r  border-blue-gray-50 ">
            <Home />
          </div>
          <div className="w-full h-[50%] border lg:border-none lg:w-[50%] p-5 overflow-y-auto lg:h-full max-h-screen">
            <Home guestMode />
          </div>
        </>
      ) : (
        <Home />
      )}
    </div>
  );
}
