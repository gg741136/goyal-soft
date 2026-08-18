export default function Divider({
  className = "",
}) {
  return (
    <div
      className={`h-px w-full bg-zinc-800 ${className}`}
      aria-hidden="true"
    />
  );
}