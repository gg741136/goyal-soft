export default function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={`goyal-container ${className}`}
    >
      {children}
    </div>
  );
}