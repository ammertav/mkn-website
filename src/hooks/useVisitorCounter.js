/**
 * useVisitorCounter
 *
 * Counter pengunjung ringan berbasis Firebase Realtime Database REST API.
 * Tidak memerlukan SDK Firebase — cukup fetch bawaan browser.
 *
 * Struktur data Firebase:
 *   visitors/total          → akumulasi semua pengunjung
 *   visitors/daily/YYYY-MM-DD → pengunjung per hari
 *
 * Perilaku:
 * - Menggunakan localStorage (bukan sessionStorage) agar tracking bertahan
 *   antar tab. Key menyertakan tanggal, sehingga setiap hari baru pengunjung
 *   dihitung lagi sebagai "hari ini" namun total tetap terakumulasi.
 */

import { useState, useEffect } from "react";

const DB_BASE =
  "https://mkn-unisulla-default-rtdb.asia-southeast1.firebasedatabase.app/visitors";

/** Key localStorage; menyertakan tanggal agar reset otomatis tiap hari. */
function getStorageKey() {
  return `mkn_visited_${new Date().toISOString().slice(0, 10)}`;
}

/** Tanggal hari ini dalam format YYYY-MM-DD (UTC+7). */
function getTodayKey() {
  const now = new Date();
  // Geser ke WIB (UTC+7)
  const wib = new Date(now.getTime() + 7 * 60 * 60 * 1000);
  return wib.toISOString().slice(0, 10);
}

export function useVisitorCounter() {
  /** { total: number|null, today: number|null } */
  const [stats, setStats] = useState({ total: null, today: null });

  useEffect(() => {
    const today = getTodayKey();
    const alreadyCounted = localStorage.getItem(getStorageKey());

    const totalUrl = `${DB_BASE}/total.json`;
    const todayUrl = `${DB_BASE}/daily/${today}.json`;
    const headers = { "Content-Type": "application/json" };

    async function incrementBoth() {
      try {
        // Baca keduanya secara paralel
        const [rTotal, rToday] = await Promise.all([
          fetch(totalUrl),
          fetch(todayUrl),
        ]);
        if (!rTotal.ok || !rToday.ok) throw new Error("Read error");

        const currentTotal = (await rTotal.json()) ?? 0;
        const currentToday = (await rToday.json()) ?? 0;

        const newTotal = currentTotal + 1;
        const newToday = currentToday + 1;

        // Tulis keduanya secara paralel
        await Promise.all([
          fetch(totalUrl, { method: "PUT", headers, body: JSON.stringify(newTotal) }),
          fetch(todayUrl, { method: "PUT", headers, body: JSON.stringify(newToday) }),
        ]);

        localStorage.setItem(getStorageKey(), "1");
        setStats({ total: newTotal, today: newToday });
      } catch (err) {
        console.error("[VisitorCounter] Gagal increment:", err);
      }
    }

    async function fetchOnly() {
      try {
        const [rTotal, rToday] = await Promise.all([
          fetch(totalUrl),
          fetch(todayUrl),
        ]);
        const total = (await rTotal.json()) ?? 0;
        const today = (await rToday.json()) ?? 0;
        setStats({ total, today });
      } catch (err) {
        console.error("[VisitorCounter] Gagal baca:", err);
      }
    }

    if (!alreadyCounted) {
      incrementBoth();
    } else {
      fetchOnly();
    }
  }, []);

  return stats;
}

