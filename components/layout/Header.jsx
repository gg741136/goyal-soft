import Container from "@/components/ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="/"
          className="text-lg font-semibold tracking-tight text-white"
          aria-label="GoyalSoft home"
        >
          GoyalSoft
        </a>

        <nav aria-label="Main navigation">
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a className="transition-colors hover:text-white" href="/projects">
              Projects
            </a>

            <a className="transition-colors hover:text-white" href="/docs">
              Docs
            </a>

            <a className="transition-colors hover:text-white" href="/blog">
              Blog
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}