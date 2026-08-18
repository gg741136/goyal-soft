import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  metadataBase: new URL(
    "https://goyalsoft.com"
  ),

  title: {
    default: "GoyalSoft — Build. Learn. Explore.",
    template: "%s | GoyalSoft",
  },

  description:
    "GoyalSoft is a modern developer platform for projects, libraries, frameworks, tools, APIs, documentation, tutorials, extensions and open-source development.",

  keywords: [
    "GoyalSoft",
    "developer platform",
    "web development",
    "JavaScript",
    "Next.js",
    "React",
    "Flutter",
    "Python",
    "open source",
    "developer tools",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "GoyalSoft — Build. Learn. Explore.",
    description:
      "Explore software projects, developer tools, libraries, documentation, tutorials and open-source work.",
    type: "website",
    siteName: "GoyalSoft",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="min-h-screen pt-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}