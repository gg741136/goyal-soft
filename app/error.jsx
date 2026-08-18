"use client";

export default function GlobalError({ reset }) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <section className="max-w-md text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Something went wrong
        </p>

        <h1 className="mt-3 text-3xl font-semibold">
          We couldn't load this page.
        </h1>

        <p className="mt-4 text-zinc-400">
          Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-xl border border-zinc-700 px-5 py-3 text-sm transition hover:bg-zinc-900"
        >
          Try again
        </button>
      </section>
    </main>
  );
}