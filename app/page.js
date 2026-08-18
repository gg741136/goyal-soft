import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const categories = [
  {
    title: "Projects",
    description:
      "Explore web, JavaScript, Python and Flutter projects.",
    href: "/projects",
  },
  {
    title: "Libraries",
    description:
      "Discover reusable libraries and developer packages.",
    href: "/libraries",
  },
  {
    title: "Frameworks",
    description:
      "Explore frameworks and development technologies.",
    href: "/frameworks",
  },
  {
    title: "Developer Tools",
    description:
      "Useful tools built for modern developers.",
    href: "/tools",
  },
  {
    title: "Documentation",
    description:
      "Detailed technical documentation and references.",
    href: "/docs",
  },
  {
    title: "Tutorials",
    description:
      "Learn development through practical tutorials.",
    href: "/tutorials",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="hero-glow" />

        <div className="goyal-grid absolute inset-0 opacity-50" />

        <Container className="relative">
          <div className="flex min-h-[720px] flex-col items-center justify-center py-24 text-center">
            
            <div className="mb-7 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-400">
              Building the future of software
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
              Build.
              <br />

              <span className="gradient-text">
                Learn. Explore.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
              GoyalSoft is a modern developer platform
              for discovering projects, libraries,
              frameworks, tools, documentation,
              tutorials, extensions and open-source
              software.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/projects">
                Explore projects
              </Button>

              <Button
                href="/docs"
                variant="secondary"
              >
                Explore documentation
              </Button>
            </div>

            <div className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                "Projects",
                "Libraries",
                "Extensions",
                "Open Source",
              ].map((item) => (
                <div
                  key={item}
                  className="glass rounded-2xl p-5 text-left"
                >
                  <div className="mb-3 h-2 w-2 rounded-full bg-white" />

                  <p className="text-sm font-medium">
                    {item}
                  </p>

                  <p className="mt-1 text-xs text-neutral-600">
                    Explore
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="mb-10">
            <p className="mb-3 text-sm text-neutral-500">
              The platform
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything developers need.
            </h2>

            <p className="mt-4 max-w-2xl text-neutral-500">
              Explore the different parts of the
              GoyalSoft ecosystem.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <a
                href={category.href}
                key={category.title}
                className="border-glow glass group rounded-3xl p-7"
              >
                <div className="mb-12 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sm font-semibold">
                    G
                  </div>

                  <span className="text-neutral-600 transition group-hover:translate-x-1 group-hover:text-white">
                    →
                  </span>
                </div>

                <h3 className="text-lg font-medium">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {category.description}
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 sm:p-12">
            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-white/[0.05] blur-3xl" />

            <div className="relative max-w-2xl">
              <p className="mb-3 text-sm text-neutral-500">
                For developers
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Discover what GoyalSoft is building.
              </h2>

              <p className="mt-4 leading-7 text-neutral-500">
                Browse software projects, developer
                resources, technical documentation and
                open-source work from the GoyalSoft
                ecosystem.
              </p>

              <div className="mt-7">
                <Button href="/projects">
                  Explore GoyalSoft
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}