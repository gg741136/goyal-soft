"use client";

import { useEffect, useRef } from "react";

export default function Modal({
  open,
  onClose,
  title,
  children,
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  function handleCancel(event) {
    event.preventDefault();
    onClose?.();
  }

  function handleBackdropClick(event) {
    if (event.target === dialogRef.current) {
      onClose?.();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      className="w-[calc(100%-2rem)] max-w-lg rounded-2xl border border-zinc-800 bg-zinc-950 p-0 text-white shadow-2xl backdrop:bg-black/70"
    >
      <div className="border-b border-zinc-800 px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-lg px-2 py-1 text-zinc-500 transition hover:bg-zinc-900 hover:text-white"
          >
            ×
          </button>
        </div>
      </div>

      <div className="p-6">
        {children}
      </div>
    </dialog>
  );
}