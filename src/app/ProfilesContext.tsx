"use client";
import { Dispatch, SetStateAction, createContext } from "react";
import { profiles } from "./db";

type UpdatingProfiles = Dispatch<
  SetStateAction<{
    thomas: string[];
    lena: string[];
    hans: string[];
  }>
>;
export const ProfilesContext = createContext<
  [typeof profiles, UpdatingProfiles]
>([profiles, () => {}]);
