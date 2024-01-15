"use client";

export const YesNoIcon: React.FC<{ checked: boolean; text: string }> = ({
  checked,
  text,
}) => (
  <div className="flex gap-2">
    <p>{text}</p>
    <p>{checked ? "✅" : "❌"}</p>
  </div>
);
