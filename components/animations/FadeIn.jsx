"use client";

import { useEffect, useState } from "react";

export default function FadeIn({
  children,
  className = "",
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={[
        "transition-all duration-700",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}