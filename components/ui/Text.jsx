export function Heading({
  as: Tag = "h2",
  children,
  className = "",
}) {
  return (
    <Tag
      className={`font-semibold tracking-tight text-white ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Text({
  children,
  className = "",
}) {
  return (
    <p className={`leading-7 text-zinc-400 ${className}`}>
      {children}
    </p>
  );
}