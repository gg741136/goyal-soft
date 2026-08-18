import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <section className="text-center">
        <p className="text-7xl font-bold tracking-tight">404</p>

        <h1 className="mt-4 text-2xl font-semibold">
          Page not found
        </h1>

        <p className="mt-3 text-zinc-400">
          The page you&apos;re looking for doesn&apos;t exist..
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl border border-zinc-700 px-5 py-3 text-sm transition hover:bg-zinc-900"
        >
          Back to GoyalSoft
        </Link>
      </section>
    </main>
  );
}