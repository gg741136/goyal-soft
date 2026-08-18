import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white"
          aria-label="GoyalSoft home"
        >
          GoyalSoft
        </Link>

        <nav aria-label="Main navigation">
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <Link className="transition-colors hover:text-white" href="/projects">
              Projects
            </Link>

            <Link className="transition-colors hover:text-white" href="/docs">
              Docs
            </Link>

            <Link className="transition-colors hover:text-white" href="/blog">
              Blog
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}