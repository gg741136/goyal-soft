import { useId } from "react";
import { cn } from "@/lib/utils/cn";

export default function Input({
  label,
  error,
  id,
  className = "",
  ...props
}) {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 block text-sm font-medium text-zinc-200"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={cn(
          "h-11 w-full rounded-xl border border-zinc-800",
          "bg-zinc-950 px-4 text-sm text-white",
          "placeholder:text-zinc-600",
          "transition-colors",
          "focus:border-zinc-500 focus:outline-none",
          error && "border-red-500/70",
          className
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />

      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-2 text-sm text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}