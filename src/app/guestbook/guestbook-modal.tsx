"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

interface GuestbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  submitting: boolean;
  error: string | null;
  onSubmit: (name: string, message: string, email?: string) => Promise<boolean>;
}

export default function GuestbookModal({
  isOpen,
  onClose,
  submitting,
  error,
  onSubmit,
}: GuestbookModalProps) {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return;

    const success = await onSubmit(name, message, email || undefined);
    if (success) {
      setName("");
      setEmail("");
      setMessage("");
      onClose();
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="guestbook-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded border border-[var(--foreground)] bg-[var(--background)] p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between">
          <h3 id="guestbook-modal-title" className="text-lg font-medium">
            {t("guestbook.modalTitle")}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-5xl align-top leading-none opacity-60 hover:opacity-100"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm opacity-60">
              {t("guestbook.name")} *
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded border border-[var(--foreground)] bg-[var(--background)] px-3 py-2 text-[var(--text-color)] opacity-30 focus:opacity-100 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm opacity-60">
              {t("guestbook.email")}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-[var(--foreground)] bg-[var(--background)] px-3 py-2 text-[var(--text-color)] opacity-30 focus:opacity-100 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm opacity-60">
              {t("guestbook.message")} *
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-y rounded border border-[var(--foreground)] bg-[var(--background)] px-3 py-2 text-[var(--text-color)] opacity-30 focus:opacity-100 focus:outline-none"
            />
          </div>

          <div className="absolute -left-[9999px]" aria-hidden="true">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-fit rounded border border-[var(--foreground)] px-6 py-2 text-sm transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)] disabled:opacity-40"
          >
            {submitting ? t("guestbook.submitting") : t("guestbook.submit")}
          </button>

          {error && <p className="text-sm text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}
