import Link from "next/link";

import Container from "@/components/ui/Container";
import MobileNav from "@/components/layout/MobileNav";
import { mainNavigation } from "@/lib/navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/80 backdrop-blur-xl">
      <Container className="relative flex h-16 items-center justify-between">
        <Link
          href="/"
          className="shrink-0 text-lg font-semibold tracking-tight text-white"
          aria-label="GoyalSoft home"
        >
          GoyalSoft
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/search"
            className="rounded-xl border border-zinc-800 px-4 py-2 text-sm text-zinc-400 transition hover:border-zinc-700 hover:text-white"
          >
            Search
          </Link>

          <Link
            href="/login"
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Sign in
          </Link>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}