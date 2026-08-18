import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <Container className="py-8">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} GoyalSoft. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}