// Import necessary libraries and components
"use client";
import { useContext, useEffect, useState } from "react";
import { ProfilesContext } from "./ProfilesContext";
import { useGetDatabaseValue } from "./meal/[meal]/query";

export const useTimer = () => {
  const [timeLeft, setTimeLeft] = useState(120);

  const user = useGetDatabaseValue("user") ?? "undefined";

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
        if (typeof window !== "undefined") {
          window.location.href = "/";
        }
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
  }, [timeLeft, user, profiles]);
  return timeLeft;
};
