import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      <body className="min-h-screen bg-black text-white antialiased">
        <Header />

        <div>{children}</div>

        <Footer />
      </body>
    </html>
  );
}