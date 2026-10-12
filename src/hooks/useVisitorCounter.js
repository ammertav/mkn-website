import { useState, useEffect } from "react";

const DB_BASE = import.meta.env.VITE_FIREBASE_DB_URL;

const FETCH_TIMEOUT_MS = 8000;

function getTodayWIB() {
  const wib = new Date(Date.now() + 7 * 60 * 60 * 1000);
  return wib.toISOString().slice(0, 10);
}

function getStorageKey() {
  return `mkn_visited_${getTodayWIB()}`;
}

function toSafeInt(val) {
  if (val === null || val === undefined) return 0;
  if (typeof val === "number") {
    return Number.isFinite(val) ? Math.max(0, Math.trunc(val)) : 0;
  }
  if (typeof val === "string") {
    if (val.includes("[object")) {
      return Math.max(0, (val.match(/1/g) || []).length);
    }
    const n = parseInt(val, 10);
    return Number.isFinite(n) ? Math.max(0, n) : 0;
  }
  if (typeof val === "boolean") return val ? 1 : 0;
  return 0;
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function fbGet(url) {
  const res = await fetchWithTimeout(url);
  if (!res.ok) throw new Error(`GET ${res.status}`);
  return res.json();
}

async function fbPut(url, value) {
  const safeValue = toSafeInt(value);
  const res = await fetchWithTimeout(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(safeValue),
  });
  if (!res.ok) throw new Error(`PUT ${res.status}`);
  return safeValue;
}

export function useVisitorCounter() {
  const [stats, setStats] = useState({ total: null, today: null });

  useEffect(() => {
    let isMounted = true;

    const todayKey = getTodayWIB();
    const storageKey = getStorageKey();
    const alreadyCounted = localStorage.getItem(storageKey);

    const totalUrl = `${DB_BASE}/total.json`;
    const todayUrl = `${DB_BASE}/daily/${encodeURIComponent(todayKey)}.json`;

    async function incrementBoth() {
      try {
        const [rawTotal, rawToday] = await Promise.all([
          fbGet(totalUrl),
          fbGet(todayUrl),
        ]);

        const newTotal = toSafeInt(rawTotal) + 1;
        const newToday = toSafeInt(rawToday) + 1;

        await Promise.all([
          fbPut(totalUrl, newTotal),
          fbPut(todayUrl, newToday),
        ]);

        localStorage.setItem(storageKey, "1");
        if (isMounted) setStats({ total: newTotal, today: newToday });
      } catch (err) {
        console.error("[VisitorCounter]", err);
        if (isMounted) fetchOnly();
      }
    }

    async function fetchOnly() {
      try {
        const [rawTotal, rawToday] = await Promise.all([
          fbGet(totalUrl),
          fbGet(todayUrl),
        ]);
        if (isMounted) {
          setStats({ total: toSafeInt(rawTotal), today: toSafeInt(rawToday) });
        }
      } catch (err) {
        console.error("[VisitorCounter]", err);
      }
    }

    if (!alreadyCounted) {
      incrementBoth();
    } else {
      fetchOnly();
    }

    return () => { isMounted = false; };
  }, []);

  return stats;
}
