import { cn } from "@/lib/utils/cn";

const variants = {
  primary:
    "bg-white text-black hover:bg-zinc-200",
  secondary:
    "border border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800",
  ghost:
    "text-zinc-400 hover:bg-zinc-900 hover:text-white",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium",
        "transition-colors duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}