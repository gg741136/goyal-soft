import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

export default function Section({
  children,
  className = "",
  containerClassName = "",
}) {
  return (
    <section className={cn("py-20 sm:py-24 lg:py-32", className)}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}