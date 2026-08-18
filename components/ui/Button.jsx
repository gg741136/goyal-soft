export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200";

  const variants = {
    primary:
      "bg-white text-black hover:bg-neutral-200",

    secondary:
      "border border-white/10 bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08]",

    ghost:
      "text-neutral-400 hover:bg-white/[0.05] hover:text-white",
  };

  const classes =
    `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}