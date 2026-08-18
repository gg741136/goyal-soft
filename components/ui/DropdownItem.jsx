import Link from "next/link";

export default function DropdownItem({
  href,
  children,
  onClick,
}) {
  if (href) {
    return (
      <Link
        href={href}
        role="menuitem"
        className="block rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      className="block w-full rounded-lg px-3 py-2 text-left text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
    >
      {children}
    </button>
  );
}