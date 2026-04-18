"use client";

import { useState, useEffect, useCallback } from "react";
import { getSupabase } from "@/lib/supabase";
import type { GuestbookEntry } from "@/types/guestbook";

interface UseGuestbookReturn {
  entries: GuestbookEntry[];
  loading: boolean;
  submitting: boolean;
  error: string | null;
  submitEntry: (name: string, message: string, email?: string) => Promise<boolean>;
}

export function useGuestbook(): UseGuestbookReturn {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEntries() {
      const { data, error } = await getSupabase()
        .from("guestbook")
        .select("id, name, message, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setEntries(data ?? []);
      }
      setLoading(false);
    }

    fetchEntries();
  }, []);

  const submitEntry = useCallback(
    async (name: string, message: string, email?: string): Promise<boolean> => {
      setSubmitting(true);
      setError(null);

      const optimisticEntry: GuestbookEntry = {
        id: crypto.randomUUID(),
        name,
        message,
        created_at: new Date().toISOString(),
      };

      setEntries((prev) => [optimisticEntry, ...prev]);

      const { error } = await getSupabase()
        .from("guestbook")
        .insert({ name, message, email: email || null });

      if (error) {
        setEntries((prev) => prev.filter((e) => e.id !== optimisticEntry.id));
        setError(error.message);
        setSubmitting(false);
        return false;
      }

      setSubmitting(false);
      return true;
    },
    [],
  );

  return { entries, loading, submitting, error, submitEntry };
}
