import { useId } from "react";
import { cn } from "@/lib/utils/cn";

export default function Textarea({
  label,
  error,
  id,
  className = "",
  ...props
}) {
  const generatedId = useId();
  const textareaId = id || generatedId;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="mb-2 block text-sm font-medium text-zinc-200"
        >
          {label}
        </label>
      )}

      <textarea
        id={textareaId}
        className={cn(
          "min-h-32 w-full resize-y rounded-xl",
          "border border-zinc-800 bg-zinc-950",
          "px-4 py-3 text-sm text-white",
          "placeholder:text-zinc-600",
          "focus:border-zinc-500 focus:outline-none",
          error && "border-red-500/70",
          className
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${textareaId}-error` : undefined
        }
        {...props}
      />

      {error && (
        <p
          id={`${textareaId}-error`}
          className="mt-2 text-sm text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}