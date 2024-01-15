// Import necessary libraries and components
"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ProfilesContext } from "./ProfilesContext";
import { setDatabaseValue, useGetDatabaseValue } from "./meal/[meal]/query";

export const useTimer = () => {
  const [timeLeft, setTimeLeft] = useState(120);

  const user = useGetDatabaseValue("user") ?? "undefined";
  const params = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [profiles, _] = useContext(ProfilesContext);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTime = parseInt(localStorage.getItem("timeLeft") ?? "120");
      setTimeLeft(storedTime);
    }
  }, []);

  useEffect(() => {
    if (user in profiles) {
      if (timeLeft === 0) {
        localStorage.removeItem("timeLeft");
        const newParams = new URLSearchParams(params);
        newParams.delete("user");
        setDatabaseValue("user", "undefined");
        replace(`${pathname}?${newParams.toString()}`);
        return;
      }

      const timerId = setTimeout(() => {
        setTimeLeft((oldTime) => {
          const newTime = oldTime - 1;
          localStorage.setItem("timeLeft", newTime.toString());
          return newTime;
        });
      }, 1000);

      return () => clearTimeout(timerId);
    } else {
      localStorage.removeItem("timeLeft");
      setTimeLeft(120);
    }
  }, [timeLeft, user, profiles, params, replace, pathname]);
  return timeLeft;
};

export const timerStyle = `
absolute top-0 left-0 m-4
bg-white text-black
px-3 py-2 z-[100]
border border-gray-300
rounded-lg
shadow
font-bold text-lg
`;

export const timerStyleRed = `
absolute top-0 left-0 m-4
bg-red-500 text-white
px-3 py-2 z-[100]
border border-gray-300
rounded-lg
shadow
font-bold text-lg
`;
