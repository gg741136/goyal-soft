import Container from "../ui/Container";

const sections = [
  {
    title: "Develop",
    links: [
      "Projects",
      "Libraries",
      "Frameworks",
      "Tools",
      "APIs",
    ],
  },
  {
    title: "Learn",
    links: [
      "Documentation",
      "Tutorials",
      "Examples",
      "Blog",
    ],
  },
  {
    title: "Explore",
    links: [
      "Extensions",
      "Flutter",
      "Python",
      "Open Source",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/[0.07]">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] font-bold">
                G
              </div>

              <span className="font-semibold">
                GoyalSoft
              </span>
            </div>

            <p className="max-w-sm text-sm leading-6 text-neutral-500">
              A modern developer platform for
              discovering, learning, building and
              exploring software.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-medium text-white">
                {section.title}
              </h3>

              <div className="space-y-3">
                {section.links.map((link) => (
                  <a
                    href="#"
                    key={link}
                    className="block text-sm text-neutral-500 transition hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/[0.07] py-6 text-sm text-neutral-600 md:flex-row">
          <p>
            © {new Date().getFullYear()} GoyalSoft.
            All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}