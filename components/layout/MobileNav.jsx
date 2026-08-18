"use client";

import Link from "next/link";
import { useState } from "react";

import { mainNavigation } from "@/lib/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-300 transition hover:border-zinc-700 hover:text-white"
      >
        <span className="sr-only">
          {open ? "Close menu" : "Open menu"}
        </span>

        <span className="flex flex-col gap-1.5">
          <span
            className={`block h-px w-5 bg-current transition ${
              open ? "translate-y-[4px] rotate-45" : ""
            }`}
          />

          <span
            className={`block h-px w-5 bg-current transition ${
              open ? "-rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-zinc-800 bg-black/95 backdrop-blur-xl"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6"
          >
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <div className="my-2 border-t border-zinc-800" />

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
            >
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}