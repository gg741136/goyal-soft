import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Text";

export default function HomePage() {
  return (
    <main>
      <Section className="flex min-h-[calc(100vh-4rem)] items-center">
        <div className="max-w-4xl">
          <Badge>Developer Platform</Badge>

          <Heading
            as="h1"
            className="mt-6 text-5xl sm:text-6xl lg:text-8xl"
          >
            Build. Explore. Learn. Create.
          </Heading>

          <Text className="mt-6 max-w-2xl text-base sm:text-lg">
            GoyalSoft brings projects, libraries, tools, APIs,
            documentation, tutorials, extensions, and open-source
            resources together in one developer platform.
          </Text>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">
              Explore GoyalSoft
            </Button>

            <Button
              size="lg"
              variant="secondary"
            >
              View Projects
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}