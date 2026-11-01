"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string[];
  images?: string[];
  highlightBadge?: string;
}

const projects: Project[] = [
  {
    title: "LAPOR PAK! – Revamp System Pengaduan Masyarakat Diskominfo DIY",
    description:
      "Aplikasi website hasil revamp dari sistem e-Lapor resmi Dinas Komunikasi dan Informatika DIY yang dikembangkan secara kolaboratif dalam tim 2 orang (Frontend & Backend). Bertanggung jawab pada perancangan UI/UX di Figma hingga implementasi frontend responsif versi desktop & mobile untuk sisi User (pengajuan aduan, lacak laporan, peta Leaflet) dan sisi Admin (dashboard analitik, kelola aduan) yang terintegrasi dengan REST API berbasis Golang.",
    tech: ["React.js", "Tailwind CSS", "Golang", "Figma", "Leaflet API"],
    images: [
      "/projects/laporpak0.jpeg",
      "/projects/laporpak1.jpeg",
      "/projects/laporpak2.jpeg",
      "/projects/laporpak3.jpeg",
      "/projects/laporpak4.jpeg",
      "/projects/laporpak5.jpeg",
      "/projects/laporpak6.jpeg",
      "/projects/laporpak7.jpeg",
      "/projects/laporpak8.jpeg",
    ],
  },
  {
    title: "Sentix – TikTok Sentiment Analysis Platform",
    description:
      "Membangun sistem analisis sentimen end-to-end untuk 2.098 komentar TikTok bantuan bencana Sumatera 2025. Mengintegrasikan NLP Preprocessing, fitur hybrid (TF-IDF N-Gram + Lexicon), dan model SVM Linear (Akurasi 85%) ke dalam web interaktif React.js + Flask untuk visualisasi serta pengujian teks & file.",
    tech: ["Python", "SVM", "Flask", "React.js", "Tailwind CSS", "MySQL"],
    images: [
      "/projects/sentimen1.jpeg",
      "/projects/sentimen2.jpeg",
      "/projects/sentimen3.jpeg",
      "/projects/sentimen4.jpeg",
      "/projects/sentimen5.jpeg",
    ],
    highlightBadge: "Accuracy 85%",
  },
  {
    title: "Website Rekomendasi Transportasi Malioboro (HKI)",
    description:
      "Sistem Pendukung Keputusan (SPK) berbasis metode AHP (Analytical Hierarchy Process) untuk menentukan moda transportasi terbaik ke Malioboro. Menghitung pembobotan multi-kriteria secara otomatis meliputi biaya, kenyamanan, keamanan, dampak lingkungan, dan ketersediaan kursi via API Python.",
    tech: ["React.js", "Python (API)", "AHP Method", "HKI Registered"],
    images: [
      "/projects/transport1.png",
      "/projects/transport2.png",
      "/projects/transport3.png",
      "/projects/transport4.jpg",
    ],
    highlightBadge: "HKI Registered",
  },
  {
    title: "Sistem Identifikasi Nominal Uang Rupiah Berbasis Pemrosesan Citra dan OCR",
    description:
      "Sistem prototipe pengenalan nominal uang kertas Rupiah berbasis citra digital yang menggabungkan prapemrosesan OpenCV, Tesseract OCR, analisis fallback warna HSV, serta konversi hasil ke audio Text-to-Speech.",
    tech: ["Python", "OpenCV", "Tesseract OCR", "gTTS (Text-to-Speech)"],
    images: [
      "/projects/uang1.jpeg",
      "/projects/uang2.jpeg",
      "/projects/uang3.jpeg",
      "/projects/uang4.jpeg",
      "/projects/uang5.jpeg",
    ],
  },
  {
    title: "Aplikasi Pemesanan Tiket Pesawat Delka Group",
    description:
      "Aplikasi pemesanan tiket pesawat eksklusif untuk maskapai Delka Group. Memiliki antarmuka intuitif untuk autentikasi pengguna, pencarian jadwal penerbangan super cepat, manajemen pemesanan, dan simulasi pembayaran terintegrasi dengan database XMySQL.",
    tech: ["Flutter", "Dart", "XMySQL"],
    images: [
      "/projects/tiket1.jpg",
      "/projects/tiket2.jpg",
      "/projects/tiket3.jpg",
      "/projects/tiket4.png",
    ],
  },
  {
    title: "Website Kuis Online Interaktif",
    description:
      "Website kuis pilihan ganda interaktif berbasis web yang menyajikan soal secara dinamis melalui integrasi REST API. Dilengkapi dengan antarmuka responsif, logika penilaian skor otomatis, navigasi soal real-time, serta umpan balik langsung untuk mendukung evaluasi pembelajaran.",
    tech: ["JavaScript", "HTML", "CSS", "REST API"],
    images: ["/projects/kuis online.png", "/projects/kuis online2.png"],
  },
  {
    title: "Aplikasi Mobile Presensi Online",
    description:
      "Aplikasi presensi mobile berbasis Flutter dengan fitur autentikasi, pencatatan absensi harian, pengajuan izin cuti, serta riwayat presensi secara real-time. Dibangun menggunakan arsitektur kode modular dengan operasi CRUD asinkron yang terintegrasi ke database MySQL via xmysql API.",
    tech: ["Flutter", "Dart", "MySQL", "xmysql"],
    images: [
      "/projects/presensi1.png",
      "/projects/presensi2.png",
      "/projects/presensi3.png",
    ],
  },
  {
    title: "COCOK.IN – AI-Driven Outfit Recommendation App (UI/UX Case Study)",
    description:
      "Perancangan UI/UX dan prototype interaktif untuk aplikasi rekomendasi outfit berbasis AI. Mengusung konsep asisten personal styling yang menganalisis warna kulit dan bentuk tubuh melalui foto untuk memberikan saran berpakaian yang personal dan sesuai acara.",
    tech: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "User Research"],
    images: [
      "/projects/cocokin1.jpeg",
      "/projects/cocokin2.jpeg",
      "/projects/cocokin3.jpeg",
      "/projects/cocokin4.png",
    ],
    highlightBadge: "UI/UX Case Study",
  },
];

export default function Projects() {
  const [activeImageIndexes, setActiveImageIndexes] = useState<{ [key: number]: number }>({ 0: 0 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);

  // Mencegah scroll layar saat modal pop-up terbuka
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const handleNextImage = (projIdx: number, maxImages: number) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [projIdx]: ((prev[projIdx] || 0) + 1) % maxImages,
    }));
  };

  const handlePrevImage = (projIdx: number, maxImages: number) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [projIdx]: ((prev[projIdx] || 0) - 1 + maxImages) % maxImages,
    }));
  };

  const openProjectModal = (proj: Project, cardImgIdx: number) => {
    setSelectedProject(proj);
    setModalImageIndex(cardImgIdx);
  };

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/80">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <span className="text-blue-500 font-mono">04.</span> Proyek Unggulan
        </h2>
        <span className="text-xs font-mono text-slate-400 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-full w-fit">
          🔍 Klik card/gambar untuk detail pop-up
        </span>
      </div>

      {/* Grid Projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => {
          const currentImgIndex = activeImageIndexes[idx] || 0;
          const hasMultipleImages = proj.images && proj.images.length > 1;

          return (
            <div
              key={idx}
              className="group bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-blue-500/5 overflow-hidden"
            >
              <div>
                {/* Section Foto / Carousel Gambar Card */}
                {proj.images && proj.images.length > 0 ? (
                  <div className="relative w-full aspect-video bg-slate-950 overflow-hidden border-b border-slate-800/80">
                    {/* Gambar Utama (Klik untuk membuka Pop-up Detail) */}
                    <div
                      onClick={() => openProjectModal(proj, currentImgIndex)}
                      className="relative w-full h-full cursor-pointer"
                    >
                      <Image
                        src={proj.images[currentImgIndex]}
                        alt={`${proj.title} screenshot ${currentImgIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Badge Highlight */}
                    {proj.highlightBadge && (
                      <span className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-full shadow-lg border border-blue-400/30">
                        {proj.highlightBadge}
                      </span>
                    )}

                    {/* Tombol Navigasi Slider Carousel Card */}
                    {hasMultipleImages && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevImage(idx, proj.images!.length);
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-950/80 hover:bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs backdrop-blur-sm border border-slate-700 cursor-pointer z-10"
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextImage(idx, proj.images!.length);
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-950/80 hover:bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs backdrop-blur-sm border border-slate-700 cursor-pointer z-10"
                        >
                          ›
                        </button>

                        {/* Indikator Titik (Dots Slider) */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-md px-2 py-1 rounded-full border border-slate-800 z-10">
                          {proj.images.map((_, imgIdx) => (
                            <button
                              key={imgIdx}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIndexes((prev) => ({
                                  ...prev,
                                  [idx]: imgIdx,
                                }));
                              }}
                              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                imgIdx === currentImgIndex
                                  ? "w-4 bg-blue-400"
                                  : "w-1.5 bg-slate-600 hover:bg-slate-400"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : null}

                {/* Deskripsi & Judul Proyek Ringkas */}
                <div className="p-6 space-y-3">
                  <h3
                    onClick={() => openProjectModal(proj, currentImgIndex)}
                    className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug cursor-pointer"
                  >
                    {proj.title}
                  </h3>

                  {/* Pemotongan Teks di Card (Limit 2-3 baris) */}
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => openProjectModal(proj, currentImgIndex)}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4 cursor-pointer pt-1 inline-block"
                  >
                    Lihat Detail & Analisis...
                  </button>
                </div>
              </div>

              {/* Tag Teknologi */}
              <div className="px-6 pb-6 pt-2 flex flex-wrap gap-1.5">
                {proj.tech.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL POP-UP (GAMBAR DI ATAS + DESKRIPSI LENGKAP DI BAWAH) */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl max-h-[90vh] w-full overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Tombol Close Pop-up */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-slate-300 hover:text-white bg-slate-950/80 hover:bg-slate-800 w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer border border-slate-700 transition-all z-30"
            >
              ✕
            </button>

            {/* Scrollable Container Modal Body */}
            <div className="overflow-y-auto p-6 space-y-6">
              {/* GAMBAR DI ATAS */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="relative w-full aspect-video bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
                  <Image
                    src={selectedProject.images[modalImageIndex]}
                    alt={selectedProject.title}
                    fill
                    className="object-contain bg-slate-950"
                  />

                  {/* Navigasi Gambar Modal jika multi-gambar */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setModalImageIndex(
                            (prev) =>
                              (prev - 1 + selectedProject.images!.length) %
                              selectedProject.images!.length
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-950/80 hover:bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center text-base border border-slate-700 cursor-pointer"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setModalImageIndex(
                            (prev) => (prev + 1) % selectedProject.images!.length
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-950/80 hover:bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center text-base border border-slate-700 cursor-pointer"
                      >
                        ›
                      </button>

                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800">
                        {selectedProject.images.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setModalImageIndex(i)}
                            className={`h-2 rounded-full transition-all cursor-pointer ${
                              i === modalImageIndex
                                ? "w-5 bg-blue-400"
                                : "w-2 bg-slate-600"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* DESKRIPSI LENGKAP DI BAWAH */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.highlightBadge && (
                    <span className="bg-blue-600/90 text-white text-xs font-mono font-bold px-3 py-1 rounded-full border border-blue-400/30 whitespace-nowrap">
                      {selectedProject.highlightBadge}
                    </span>
                  )}
                </div>

                <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line">
                  {selectedProject.description}
                </p>

                {/* Tech Stack Badge Modal */}
                <div className="pt-2">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Teknologi & Tools:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}