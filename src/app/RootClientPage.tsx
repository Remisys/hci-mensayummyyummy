"use client";
import { FC, ReactNode, useState } from "react";
import { ProfilesContext } from "./ProfilesContext";
import { profiles } from "./db";

export const RootClientPage: FC<{ children: ReactNode }> = ({ children }) => {
  const [savedProfiles, setProfiles] = useState(profiles);
  return (
    <ProfilesContext.Provider value={[savedProfiles, setProfiles]}>
      {children}
    </ProfilesContext.Provider>
  );
};
