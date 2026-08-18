"use client";

import { useState } from "react";

const navigation = [
  {
    label: "Products",
    items: [
      "Projects",
      "Libraries",
      "Frameworks",
      "Developer Tools",
      "APIs",
      "Extensions",
    ],
  },
  {
    label: "Learn",
    items: [
      "Documentation",
      "Tutorials",
      "Blog",
      "Examples",
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.07] bg-black/70 backdrop-blur-xl">
      <div className="goyal-container">
        <div className="flex h-16 items-center justify-between">
          
          <a
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-sm font-bold">
              G
            </div>

            <span className="font-semibold tracking-tight">
              GoyalSoft
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            <a
              href="/projects"
              className="rounded-lg px-4 py-2 text-sm text-neutral-400 transition hover:bg-white/[0.05] hover:text-white"
            >
              Projects
            </a>

            {navigation.map((menu) => (
              <div
                key={menu.label}
                className="relative"
              >
                <button
                  onClick={() =>
                    setOpenMenu(
                      openMenu === menu.label
                        ? null
                        : menu.label
                    )
                  }
                  className="rounded-lg px-4 py-2 text-sm text-neutral-400 transition hover:bg-white/[0.05] hover:text-white"
                >
                  {menu.label}
                  <span className="ml-2 text-xs">
                    ▾
                  </span>
                </button>

                {openMenu === menu.label && (
                  <div className="absolute left-0 top-12 w-56 rounded-2xl border border-white/10 bg-neutral-950/95 p-2 shadow-2xl backdrop-blur-xl">
                    {menu.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block rounded-xl px-3 py-2.5 text-sm text-neutral-400 transition hover:bg-white/[0.06] hover:text-white"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="/search"
              className="rounded-lg px-4 py-2 text-sm text-neutral-400 transition hover:bg-white/[0.05] hover:text-white"
            >
              Search
            </a>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="/login"
              className="rounded-xl px-4 py-2 text-sm text-neutral-400 transition hover:text-white"
            >
              Sign in
            </a>

            <a
              href="/register"
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Get started
            </a>
          </div>

          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/[0.07] py-4 md:hidden">
            <div className="flex flex-col gap-1">
              <a
                href="/projects"
                className="rounded-xl px-4 py-3 text-sm text-neutral-300 hover:bg-white/[0.05]"
              >
                Projects
              </a>

              {navigation.flatMap(
                (menu) => menu.items
              ).map((item) => (
                <a
                  href="#"
                  key={item}
                  className="rounded-xl px-4 py-3 text-sm text-neutral-400 hover:bg-white/[0.05] hover:text-white"
                >
                  {item}
                </a>
              ))}

              <a
                href="/search"
                className="rounded-xl px-4 py-3 text-sm text-neutral-300 hover:bg-white/[0.05]"
              >
                Search
              </a>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href="/login"
                  className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm"
                >
                  Sign in
                </a>

                <a
                  href="/register"
                  className="rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-black"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}