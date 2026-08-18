import { cn } from "@/lib/utils/cn";

export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-800",
        "bg-zinc-950/80",
        "transition-colors duration-200",
        "hover:border-zinc-700",
        className
      )}
    >
      {children}
    </div>
  );
}