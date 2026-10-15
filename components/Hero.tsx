export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center max-w-5xl mx-auto px-6 py-12">
      <div className="space-y-5">
        <span className="text-blue-400 font-mono text-sm tracking-wide bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full inline-block">
          👋 Halo, Selamat Datang
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Ananda Ferandita
        </h1>
        <p className="text-xl md:text-2xl text-blue-400 font-semibold">
          Frontend Developer & IT Graduate (S1 Informatika - IPK 3.76)
        </p>
        <p className="text-slate-300 max-w-2xl leading-relaxed text-base md:text-lg">
          Lulusan S1 Informatika Universitas Jenderal Achmad Yani Yogyakarta dengan pengalaman sebagai Frontend Developer Magang di Diskominfo DIY. Menguasai React.js, Tailwind CSS, Python, Flutter, dan Machine Learning.
        </p>
        <div className="pt-4 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20"
          >
            Lihat Proyek
          </a>
          <a
            href="#contact"
            className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-6 py-3 rounded-xl transition-all duration-200"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}