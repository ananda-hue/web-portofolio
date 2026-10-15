export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/80 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Mari Terhubung & Bekerja Sama!
        </h2>
        <p className="text-slate-400 leading-relaxed">
          Saya siap berkontribusi sebagai **Frontend Developer**, **Mobile Developer**, maupun peran IT lainnya.
        </p>
        <p className="text-slate-500 text-sm">
          📍 Lokasi: Tegalyoso, Banyuraden, Kec. Gamping, Sleman, DIY
        </p>
        <div className="pt-4">
          <a
            href="mailto:anandaferandita@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20"
          >
            Kirim Pesan Email
          </a>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-800/60 text-slate-500 text-sm">
        <p>© 2026 Ananda Ferandita. Dibuat dengan Next.js & Tailwind CSS.</p>
      </footer>
    </section>
  );
}