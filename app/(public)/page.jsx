import Container from "@/components/ui/Container";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Container className="flex min-h-screen items-center justify-center">
        <section className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">
            GoyalSoft
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Building the developer platform.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Projects, libraries, tools, documentation, tutorials,
            extensions, APIs, and open-source resources.
          </p>
        </section>
      </Container>
    </main>
  );
}