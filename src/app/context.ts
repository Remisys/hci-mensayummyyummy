"use client";

import { createContext } from "react";
import { LanguageType } from "./db";

export const contextLanguage = createContext<LanguageType>("en");
