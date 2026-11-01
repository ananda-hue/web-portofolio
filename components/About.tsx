"use client";

import { useState } from "react";
import Image from "next/image";

interface Certificate {
  title: string;
  pdfUrl: string;
}

export default function About() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const certificates: Record<string, Certificate> = {
    bnsp: {
      title: "Sertifikat Kompetensi BNSP - Junior Mobile Programmer",
      pdfUrl: "/certificates/bnsp-mobile.pdf",
    },
    hki: {
      title: "Hak Cipta (HKI) Kemenkumham RI - Malioboro Transport",
      pdfUrl: "/certificates/hki-malioboro.pdf",
    },
    puisi: {
      title: "Penulis Terpilih Lomba Cipta Puisi Nasional",
      pdfUrl: "/certificates/puisi-nasional.pdf",
    },
  };

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/80 relative">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="text-blue-500 font-mono">01.</span> Tentang Saya & Pendidikan
      </h2>

      {/* Grid 12 kolom */}
      <div className="grid md:grid-cols-12 gap-8 items-start text-slate-300 leading-relaxed">

        {/* Foto Profil Estetik - Pas Penuh Tanpa Ruang Kosong di Samping */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative group w-full max-w-[240px] aspect-[3/4] rounded-2xl p-1 bg-gradient-to-b from-blue-500/40 via-slate-700/50 to-transparent shadow-xl">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-800">
              <Image
                src="/image2.jpg"
                alt="Ananda Ferandita"
                fill
                priority
                className="object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Deskripsi Diri */}
        <div className="md:col-span-8 space-y-4">
          <p>
            Saya adalah lulusan <strong className="text-white">S1 Informatika</strong> Universitas Jenderal Achmad Yani Yogyakarta dengan <strong className="text-blue-400 font-mono">IPK 3,76/4,00</strong>. Spesialis dalam <strong className="text-white">Frontend Development</strong>, <strong className="text-white">UI/UX Design</strong>, serta <strong className="text-white">Data Analytics & NLP</strong>.
          </p>

          <p>
            Berpengalaman merancang ulang (*revamp*) antarmuka UI/UX dan mengembangkan sistem *frontend* untuk proyek peremajaan aplikasi e-Lapor (nama proyek: <strong className="text-slate-100">Lapor Pak</strong>) di Dinas Komunikasi dan Informatika DIY. Saya juga berpengalaman mengolah <strong className="text-white font-mono">2.098 data komentar</strong> menggunakan Python dengan metode <strong className="text-slate-100">SVM & TF-IDF (Akurasi 85%)</strong> hingga tahap pengajuan jurnal nasional.
          </p>

          {/* Quick Credibility Badges (Interaktif Klik PDF) */}
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              type="button"
              onClick={() => setActiveCert(certificates.bnsp)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg shadow-blue-500/5"
            >
              🛡️ BNSP Pemrogram Mobile Pratama
            </button>

            <button
              type="button"
              onClick={() => setActiveCert(certificates.hki)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg shadow-emerald-500/5"
            >
              📜 Hak Cipta (HKI) Kemenkumham RI
            </button>

            <button
              type="button"
              onClick={() => setActiveCert(certificates.puisi)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg shadow-purple-500/5"
            >
              ✍️ Penulis Terpilih Puisi Nasional
            </button>
          </div>

          {/* Kartu Informasi Pendidikan */}
          <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl space-y-4 mt-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white border-b border-slate-700/80 pb-2 flex items-center justify-between">
              <span>Pendidikan</span>
              <span className="text-xs font-normal text-slate-400 font-mono">2019 - 2026</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-slate-100">S1 Informatika</p>
                <p className="text-slate-400">Univ. Jenderal Achmad Yani Yogyakarta</p>
                <p className="text-blue-400 font-mono text-xs mt-1 font-semibold">IPK: 3.76 / 4.00 (2022 - 2026)</p>
              </div>
              <div className="sm:border-l sm:border-slate-700/50 sm:pl-4">
                <p className="font-bold text-slate-100">MIPA</p>
                <p className="text-slate-400">SMAS Bahrul Ulum, Sungailiat</p>
                <p className="text-slate-500 text-xs mt-1">(2019 - 2022)</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Modern Pop-Up Modal Melayang Presisi di Tengah Layar */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 transition-all duration-300"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative bg-slate-900/90 border border-slate-700/70 max-w-4xl w-full h-[80vh] sm:h-[85vh] rounded-2xl shadow-2xl shadow-blue-500/10 flex flex-col overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal Estetik */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/50">
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
                <h3 className="text-sm font-semibold text-white truncate font-mono">
                  {activeCert.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activeCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs bg-blue-600/90 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg font-medium transition-all shadow-md shadow-blue-600/20"
                >
                  Buka Tab Baru ↗
                </a>
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg p-1.5 transition-colors text-sm font-bold"
                  aria-label="Tutup"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Viewer PDF */}
            <div className="flex-1 w-full bg-slate-950/60 p-2 sm:p-4">
              <iframe
                src={`${activeCert.pdfUrl}#toolbar=0`}
                className="w-full h-full rounded-xl border border-slate-800/80 bg-slate-900 shadow-inner"
                title={activeCert.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}