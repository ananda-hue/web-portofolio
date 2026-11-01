"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // PASTA KAN URL ENDPOINT FORMSPREE MILIKMU DI SINI
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqppyegg";

  // Salin email ke clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("anandaferandita@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Submit form langsung mengirim via Formspree API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("LOADING");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/80">

      {/* Header Section (Penomoran 05. Seragam dengan Section Lain) */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-3">
          <span className="text-blue-500 font-mono">05.</span> Hubungi Saya
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          Terbuka untuk peluang karir sebagai <strong className="text-slate-200">Frontend Engineer</strong>, <strong className="text-slate-200">Mobile Developer</strong>, maupun <strong className="text-slate-200">Data Analyst / Data Science Associate</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">

        {/* Kolom Kiri: Kartu Informasi Kontak & Sosmed */}
        <div className="md:col-span-5 space-y-4">

          {/* Card Email */}
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-3 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">EMAIL UTAMA</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-xs font-mono text-blue-400 hover:underline cursor-pointer"
              >
                {copied ? "✓ Tersalin!" : "Salin Email"}
              </button>
            </div>
            <p className="text-slate-100 font-medium text-sm sm:text-base break-all">
              anandaferandita@gmail.com
            </p>
          </div>

          {/* Card Lokasi */}
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-1 hover:border-slate-700 transition-all">
            <span className="text-xs font-mono text-slate-400">LOKASI SAAT INI</span>
            <p className="text-slate-200 text-sm font-medium flex items-center gap-1.5 pt-1">
              📍 Gamping, Sleman, DI Yogyakarta
            </p>
          </div>

          {/* Card Social Media Hub */}
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-3 hover:border-slate-700 transition-all">
            <span className="text-xs font-mono text-slate-400">MEDIA SOSIAL & PROFIL</span>
            <div className="flex flex-col gap-2 pt-1">

              <a
                href="https://instagram.com/unggiel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 text-slate-300 hover:text-white transition-all text-sm font-medium group"
              >
                <span className="flex items-center gap-2">
                  📸 Instagram (@unggiel)
                </span>
                <span className="text-xs text-slate-500 group-hover:text-blue-400">↗</span>
              </a>

              <a
                href="https://github.com/ananda-hue"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 text-slate-300 hover:text-white transition-all text-sm font-medium group"
              >
                <span className="flex items-center gap-2">
                  🐙 GitHub
                </span>
                <span className="text-xs text-slate-500 group-hover:text-blue-400">↗</span>
              </a>

            </div>
          </div>

        </div>

        {/* Kolom Kanan: Form Pesan Email Direct */}
        <div className="md:col-span-7 bg-slate-900/80 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            ✉️ Kirim Pesan Langsung
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Input Nama */}
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  NAMA LENGKAP
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Input Email */}
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  EMAIL PENGIRIM
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Input Subjek */}
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                SUBJEK PESAN
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Topik atau tawaran pekerjaan"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Input Isi Pesan */}
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                ISI PESAN
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            {/* Status Notifikasi Pengiriman */}
            {status === "SUCCESS" && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs font-medium text-center">
                ✓ Pesan berhasil dikirim! Saya akan segera merespons email Anda.
              </div>
            )}

            {status === "ERROR" && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded-xl text-xs font-medium text-center">
                ✕ Gagal mengirim pesan. Silakan coba lagi nanti.
              </div>
            )}

            {/* Tombol Send */}
            <button
              type="submit"
              disabled={status === "LOADING"}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              {status === "LOADING" ? "Mengirim Pesan..." : "🚀 Kirim Pesan Langsung"}
            </button>

          </form>
        </div>

      </div>

    </section>
  );
}