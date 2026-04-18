"use client";

import { useState } from "react";
import BackHome from "@/components/back-button";
import Container from "@/components/container";
import { useTranslation } from "@/hooks/useTranslation";
import { useGuestbook } from "@/hooks/useGuestbook";
import { formatRelativeTime } from "@/lib/time";
import GuestbookModal from "./guestbook-modal";

export default function Guestbook() {
  const { t } = useTranslation();
  const { entries, loading, submitting, error, submitEntry } = useGuestbook();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 relative">
      <Container>
        <BackHome href="/">{`home`}</BackHome>
        <div className="flex flex-wrap justify-between mb-8">
          <h1 className="header">{t("pages.guestbook.title")}</h1>
          <div className="mt-auto mb-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-fit rounded-lg max-h-20px px-4 py-2 text-sm text-black bg-green bg-green-500 hover:bg-green-600 disabled:opacity-40"
            >
              + New message
            </button>
          </div>
        </div>

        <GuestbookModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          submitting={submitting}
          error={error}
          onSubmit={submitEntry}
        />

        <div>
          {loading ? (
            <p className="opacity-50">{t("guestbook.loading")}</p>
          ) : entries.length === 0 ? (
            <p className="opacity-50">{t("guestbook.empty")}</p>
          ) : (
            <ul className="flex flex-col">
              {entries.map((entry) => (
                <li
                  key={entry.id}
                  className="border-t border-[var(--foreground)] py-4 first:border-t-0"
                  style={{ borderColor: "rgba(128, 128, 128, 0.2)" }}
                >
                  <div className="mb-1 flex items-baseline gap-3">
                    <span className="font-medium">{entry.name}</span>
                    <span className="text-sm opacity-40">
                      {formatRelativeTime(entry.created_at)}
                    </span>
                  </div>
                  <p className="leading-relaxed">{entry.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </div>
  );
}
