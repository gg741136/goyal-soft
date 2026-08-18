import { cn } from "@/lib/utils/cn";

export default function Badge({
  children,
  className = "",
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full",
        "border border-zinc-800",
        "bg-zinc-900 px-3 py-1",
        "text-xs font-medium text-zinc-300",
        className
      )}
    >
      {children}
    </span>
  );
}