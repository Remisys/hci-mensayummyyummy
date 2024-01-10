// Import necessary libraries and components
"use client";
import { Home } from "./Home";

export default function RootPage() {
  return (
    <div className="overflow-y-auto h-full max-h-screen w-full px-10">
      <Home />
    </div>
  );
}
