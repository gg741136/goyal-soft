import "./globals.css";

export const metadata = {
  title: {
    default: "GoyalSoft",
    template: "%s | GoyalSoft",
  },
  description:
    "GoyalSoft — a modern developer platform for projects, libraries, tools, documentation, tutorials, APIs, extensions, and open-source resources.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}