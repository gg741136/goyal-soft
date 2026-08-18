export default function Loading() {
  return (
    <main
      className="flex min-h-[70vh] items-center justify-center"
      aria-label="Loading"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-700 border-t-white" />
    </main>
  );
}