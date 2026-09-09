import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import clsx from "clsx";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiZoomIn,
  FiZoomOut,
  FiDownload,
  FiMaximize,
} from "react-icons/fi";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

/**
 * Halaman yang dirender di sekitar halaman aktif. PDF kebijakan mutu berisi 41
 * halaman; merender semuanya sekaligus membekukan tab, jadi hanya jendela kecil
 * ini yang dipegang di memori — sisanya kanvasnya dikosongkan.
 */
const JENDELA_MUNDUR = 2;
const JENDELA_MAJU = 4;

/**
 * Kanvas dirender pada 2× ukuran tampilnya supaya tetap tajam saat diperbesar
 * lewat CSS transform. Lebih dari itu boros memori tanpa beda yang terlihat.
 */
const KUALITAS = 2;

const ZOOM_MIN = 1;
const ZOOM_MAX = 2.5;
const ZOOM_LANGKAH = 0.25;

/**
 * Pembaca PDF layar penuh dengan efek membalik halaman.
 *
 * Dua lapis: pdf.js merender tiap halaman ke <canvas>, lalu react-pageflip
 * (StPageFlip) menganimasikan lipatannya. Komponen ini sengaja berat sehingga
 * dimuat malas (React.lazy) — jangan mengimpornya langsung dari halaman.
 *
 * @param {string} fileUrl - URL berkas PDF.
 * @param {string} judul - Judul dokumen, tampil di bilah atas.
 * @param {() => void} onClose - Dipanggil saat pembaca ditutup.
 */
export default function FlipbookModal({ fileUrl, judul, onClose }) {
  const [pdf, setPdf] = useState(null);
  const [jumlahHalaman, setJumlahHalaman] = useState(0);
  const [rasio, setRasio] = useState(1.414); // tinggi ÷ lebar, sementara A4
  const [halaman, setHalaman] = useState(0); // indeks 0-based halaman kiri
  const [zoom, setZoom] = useState(1);
  const [galat, setGalat] = useState(null);
  const [ukuran, setUkuran] = useState(null);

  const bookRef = useRef(null);
  const areaRef = useRef(null);
  const dialogRef = useRef(null);
  const canvasRefs = useRef([]);
  const sudahDirender = useRef(new Set());
  const tugasRender = useRef(new Map());

  /* ---------------------------------------------------------------- Dokumen */

  useEffect(() => {
    let batal = false;
    const tugas = pdfjsLib.getDocument(fileUrl);

    tugas.promise.then(
      async (dok) => {
        if (batal) return;
        const halamanPertama = await dok.getPage(1);
        const viewport = halamanPertama.getViewport({ scale: 1 });
        if (batal) return;
        setRasio(viewport.height / viewport.width);
        setJumlahHalaman(dok.numPages);
        setPdf(dok);
      },
      (e) => {
        if (!batal) setGalat(e?.message || "Berkas gagal dimuat.");
      }
    );

    return () => {
      batal = true;
      tugas.destroy?.();
    };
  }, [fileUrl]);

  /* ----------------------------------------------------- Ukuran & orientasi */

  const hitungUkuran = useCallback(() => {
    const area = areaRef.current;
    if (!area) return;

    const lebarArea = area.clientWidth;
    const tinggiArea = area.clientHeight;
    // Di bawah lg hanya satu halaman yang ditampilkan; dua halaman terbuka
    // tidak terbaca di layar ponsel.
    const potret = window.innerWidth < 1024;
    const lebarTersedia = potret ? lebarArea - 24 : (lebarArea - 48) / 2;
    const lebarDariTinggi = (tinggiArea - 24) / rasio;

    const lebar = Math.max(220, Math.floor(Math.min(lebarTersedia, lebarDariTinggi, 620)));
    setUkuran({ lebar, tinggi: Math.floor(lebar * rasio), potret });
  }, [rasio]);

  useEffect(() => {
    hitungUkuran();
    window.addEventListener("resize", hitungUkuran);
    return () => window.removeEventListener("resize", hitungUkuran);
  }, [hitungUkuran]);

  /* ------------------------------------------------------- Render tiap halaman */

  const renderHalaman = useCallback(
    async (nomor) => {
      if (!pdf || !ukuran) return;
      const indeks = nomor - 1;
      const canvas = canvasRefs.current[indeks];
      if (!canvas || sudahDirender.current.has(nomor)) return;

      sudahDirender.current.add(nomor);
      try {
        const halamanPdf = await pdf.getPage(nomor);
        const dasar = halamanPdf.getViewport({ scale: 1 });
        const skala = (ukuran.lebar * KUALITAS) / dasar.width;
        const viewport = halamanPdf.getViewport({ scale: skala });

        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);

        const tugas = halamanPdf.render({
          canvasContext: canvas.getContext("2d"),
          viewport,
        });
        tugasRender.current.set(nomor, tugas);
        await tugas.promise;
        tugasRender.current.delete(nomor);
      } catch (e) {
        // RenderingCancelledException wajar terjadi saat halaman dibalik cepat.
        if (e?.name !== "RenderingCancelledException") sudahDirender.current.delete(nomor);
      }
    },
    [pdf, ukuran]
  );

  // Ukuran berubah berarti seluruh kanvas harus digambar ulang pada skala baru.
  useEffect(() => {
    tugasRender.current.forEach((t) => t.cancel?.());
    tugasRender.current.clear();
    sudahDirender.current.clear();
  }, [ukuran?.lebar]);

  useEffect(() => {
    if (!pdf || !ukuran) return;

    const awal = Math.max(1, halaman - JENDELA_MUNDUR);
    const akhir = Math.min(jumlahHalaman, halaman + JENDELA_MAJU);

    for (let n = awal; n <= akhir; n += 1) renderHalaman(n);

    // Bebaskan memori kanvas di luar jendela.
    sudahDirender.current.forEach((n) => {
      if (n >= awal && n <= akhir) return;
      const canvas = canvasRefs.current[n - 1];
      if (canvas) {
        canvas.width = 0;
        canvas.height = 0;
      }
      tugasRender.current.get(n)?.cancel?.();
      tugasRender.current.delete(n);
      sudahDirender.current.delete(n);
    });
  }, [pdf, ukuran, halaman, jumlahHalaman, renderHalaman]);

  useEffect(
    () => () => {
      tugasRender.current.forEach((t) => t.cancel?.());
      pdf?.destroy?.();
    },
    [pdf]
  );

  /* ------------------------------------------------------------- Navigasi */

  const keHalamanBerikutnya = useCallback(() => {
    bookRef.current?.pageFlip?.()?.flipNext();
  }, []);

  const keHalamanSebelumnya = useCallback(() => {
    bookRef.current?.pageFlip?.()?.flipPrev();
  }, []);

  const ubahZoom = useCallback((delta) => {
    setZoom((z) => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, Math.round((z + delta) * 100) / 100)));
  }, []);

  /* ------------------------------------ Kunci gulir latar, fokus, & papan ketik */

  useEffect(() => {
    const gulirSemula = document.body.style.overflow;
    const fokusSemula = document.activeElement;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = gulirSemula;
      if (fokusSemula instanceof HTMLElement) fokusSemula.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          keHalamanBerikutnya();
          break;
        case "ArrowLeft":
          keHalamanSebelumnya();
          break;
        case "+":
        case "=":
          ubahZoom(ZOOM_LANGKAH);
          break;
        case "-":
          ubahZoom(-ZOOM_LANGKAH);
          break;
        case "0":
          setZoom(1);
          break;
        default:
          return;
      }
      e.preventDefault();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, keHalamanBerikutnya, keHalamanSebelumnya, ubahZoom]);

  /* ---------------------------------------------------------------- Tampilan */

  const halamanKosong = useMemo(
    () =>
      Array.from({ length: jumlahHalaman }, (_, i) => (
        <div key={i} className="bg-white overflow-hidden shadow-sm">
          <canvas
            ref={(el) => {
              canvasRefs.current[i] = el;
            }}
            className="block w-full h-full"
            aria-hidden="true"
          />
        </div>
      )),
    [jumlahHalaman]
  );

  // Lebar buku sesungguhnya: dua halaman berdampingan kecuali mode potret.
  const lebarBuku = ukuran ? ukuran.lebar * (ukuran.potret ? 1 : 2) : 0;

  const label =
    ukuran?.potret || halaman === 0
      ? `Halaman ${halaman + 1} dari ${jumlahHalaman}`
      : `Halaman ${halaman + 1}–${Math.min(halaman + 2, jumlahHalaman)} dari ${jumlahHalaman}`;

  const tombolBilah =
    "inline-flex items-center justify-center gap-2 h-9 px-3 rounded-xs border border-white/25 text-white/85 hover:bg-white hover:text-heading hover:border-white transition-colors disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-white/85 disabled:cursor-not-allowed";

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Pembaca dokumen: ${judul}`}
      tabIndex={-1}
      className="fixed inset-0 z-[100] flex flex-col bg-heading/97 font-body outline-none"
    >
      {/* Bilah atas */}
      <div className="shrink-0 flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b border-white/15">
        <div className="min-w-0">
          <h2 className="font-heading text-white text-[13px] sm:text-sm font-semibold leading-snug line-clamp-2">
            {judul}
          </h2>
          {jumlahHalaman > 0 && (
            <p className="text-[11px] text-white/55 mt-0.5">{label}</p>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-1">
            <button
              type="button"
              onClick={() => ubahZoom(-ZOOM_LANGKAH)}
              disabled={zoom <= ZOOM_MIN}
              className={tombolBilah}
              aria-label="Perkecil"
            >
              <FiZoomOut />
            </button>
            <button
              type="button"
              onClick={() => setZoom(1)}
              disabled={zoom === 1}
              className={`${tombolBilah} tabular-nums text-xs font-semibold`}
              aria-label="Kembalikan ukuran asli"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              type="button"
              onClick={() => ubahZoom(ZOOM_LANGKAH)}
              disabled={zoom >= ZOOM_MAX}
              className={tombolBilah}
              aria-label="Perbesar"
            >
              <FiZoomIn />
            </button>
          </div>

          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${tombolBilah} text-xs font-semibold`}
          >
            <FiDownload />
            <span className="hidden sm:inline">Unduh</span>
          </a>

          <button type="button" onClick={onClose} className={tombolBilah} aria-label="Tutup pembaca">
            <FiX className="text-lg" />
          </button>
        </div>
      </div>

      {/* Area buku */}
      {/*
        Gulir hanya dinyalakan saat diperbesar. Pada 100% buku sudah pasti muat,
        sementara pratinjau lipatan sudut StPageFlip memakai .stf__item yang
        absolut dan menjulur ke luar blok saat kursor menyentuh sudut halaman —
        dengan overflow-auto, julurannya memunculkan scrollbar mendatar.
      */}
      <div
        ref={areaRef}
        className={clsx(
          "flex-1 min-h-0 flex overscroll-contain p-3 sm:p-6",
          zoom === 1 ? "overflow-hidden" : "overflow-auto"
        )}
      >
        {galat && (
          <div className="m-auto text-center text-white/70 text-sm max-w-sm space-y-3">
            <p>Dokumen tidak dapat ditampilkan di pembaca ini.</p>
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white underline underline-offset-4"
            >
              <FiMaximize />
              Buka berkas PDF langsung
            </a>
          </div>
        )}

        {!galat && (!pdf || !ukuran) && (
          <p className="m-auto text-white/60 text-sm animate-pulse">Memuat dokumen…</p>
        )}

        {!galat && pdf && ukuran && (
          /*
            Kotak luar dibuat sebesar ukuran buku setelah diperbesar supaya
            daerah gulirnya ikut tumbuh; transform saja tidak menambah lebar
            layout, sehingga tepi kiri/atas buku tak terjangkau saat di-zoom.
            m-auto dipakai alih-alih justify-center karena pemusatan flexbox
            memotong luapan di sisi awal.
          */
          <div
            className="m-auto shrink-0"
            style={{ width: lebarBuku * zoom, height: ukuran.tinggi * zoom }}
          >
            <div
              style={{
                width: lebarBuku,
                height: ukuran.tinggi,
                transform: `scale(${zoom})`,
                transformOrigin: "top left",
              }}
              className="transition-transform duration-200 ease-out"
            >
              <HTMLFlipBook
                key={`${ukuran.lebar}-${ukuran.potret}`}
                ref={bookRef}
                width={ukuran.lebar}
                height={ukuran.tinggi}
                size="fixed"
                minWidth={220}
                maxWidth={620}
                minHeight={280}
                maxHeight={900}
                showCover
                /*
                  StPageFlip menetapkan orientasi lewat rumus
                  blockWidth < width x 2 && usePortrait -> portrait, sedangkan
                  blockWidth-nya sendiri ia set width x (usePortrait ? 1 : 2).
                  Jadi usePortrait yang selalu true mengunci buku di satu halaman.
                  Nilainya harus mengikuti hasil pengukuran kita sendiri.
                */
                usePortrait={ukuran.potret}
                maxShadowOpacity={0.4}
                mobileScrollSupport={false}
                flippingTime={700}
                className="shadow-2xl"
                onFlip={(e) => setHalaman(e.data)}
              >
                {halamanKosong}
              </HTMLFlipBook>
            </div>
          </div>
        )}
      </div>

      {/* Bilah bawah */}
      {!galat && pdf && (
        <div className="shrink-0 flex items-center justify-center gap-3 px-4 py-3 border-t border-white/15">
          <button
            type="button"
            onClick={keHalamanSebelumnya}
            disabled={halaman === 0}
            className={tombolBilah}
            aria-label="Halaman sebelumnya"
          >
            <FiChevronLeft />
            <span className="hidden sm:inline text-xs font-semibold">Sebelumnya</span>
          </button>

          <span className="text-white/60 text-xs tabular-nums px-2 min-w-[5.5rem] text-center">
            {halaman + 1} / {jumlahHalaman}
          </span>

          <button
            type="button"
            onClick={keHalamanBerikutnya}
            disabled={halaman >= jumlahHalaman - 1}
            className={tombolBilah}
            aria-label="Halaman berikutnya"
          >
            <span className="hidden sm:inline text-xs font-semibold">Berikutnya</span>
            <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
