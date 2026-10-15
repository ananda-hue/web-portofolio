const projects = [
  {
    title: "Analisis Sentimen TikTok (SVM + Web)",
    description:
      "Mengolah 2.098 data komentar TikTok terkait bencana Sumatera dengan TF-IDF, N-Gram, & Lexicon. Membangun model SVM (Akurasi 85%) serta web interaktif.",
    tech: ["Python", "SVM", "React.js", "Tailwind CSS", "MySQL"],
  },
  {
    title: "Website Rekomendasi Transportasi Malioboro (HKI)",
    description:
      "Aplikasi web perekomendasi moda transportasi ke Malioboro berdasarkan biaya, kenyamanan, dan keamanan. Berhasil terdaftar Hak Cipta Kemenkumham RI.",
    tech: ["React.js", "Python (API)", "HKI Registered"],
  },
  {
    title: "Proyek Machine Learning OCR Uang Rupiah",
    description:
      "Sistem pengenalan nominal uang Rupiah berbasis citra menggunakan Python, teknik image processing, dan pelatihan model Machine Learning.",
    tech: ["Python", "OpenCV", "Machine Learning", "Image Processing"],
  },
  {
    title: "Aplikasi Tiket Pesawat Mobile",
    description:
      "Aplikasi mobile pemesanan tiket pesawat dengan autentikasi login, pencarian tiket, dan simulasi pembayaran terintegrasi XMySQL.",
    tech: ["Flutter", "Dart", "XMySQL"],
  },
  {
    title: "Website Kuis Online Interaktif",
    description:
      "Aplikasi kuis interaktif dengan antarmuka responsif dan integrasi API untuk penyajian data soal kuis secara real-time.",
    tech: ["JavaScript", "CSS", "REST API"],
  },
  {
    title: "Website Pencatatan Keuangan Pribadi",
    description:
      "Aplikasi pencatatan keuangan pribadi dengan fitur input transaksi dan laporan keuangan yang user-friendly.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/80">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="text-blue-500">04.</span> Proyek Unggulan
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 p-6 rounded-2xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-1"
          >
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">{proj.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{proj.description}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {proj.tech.map((item) => (
                <span
                  key={item}
                  className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}