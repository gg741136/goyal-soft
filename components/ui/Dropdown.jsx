"use client";

import { useEffect, useRef, useState } from "react";

export default function Dropdown({
  label = "Options",
  children,
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-700 hover:text-white"
      >
        {label}

        <span
          aria-hidden="true"
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ↓
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 min-w-48 rounded-xl border border-zinc-800 bg-zinc-950 p-1 shadow-2xl"
        >
          {children}
        </div>
      )}
    </div>
  );
}