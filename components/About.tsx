import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/80">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="text-blue-500">01.</span> Tentang Saya & Pendidikan
      </h2>
      
      {/* Grid disesuaikan menjadi 12 kolom untuk tata letak yang lebih fleksibel */}
      <div className="grid md:grid-cols-12 gap-8 items-start text-slate-300 leading-relaxed">
        
        {/* Foto Profil Estetik */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative group w-full max-w-[260px] aspect-square rounded-2xl p-1 bg-gradient-to-b from-blue-500/40 via-slate-700/50 to-transparent shadow-xl">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-800">
              <Image
                src="/image2.jpg"
                alt="Ananda Ferandita"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Deskripsi Diri */}
        <div className="md:col-span-8 space-y-4">
          <p>
            Saya adalah lulusan <strong className="text-white">S1 Informatika</strong> dengan <strong className="text-blue-400 font-mono">IPK 3,76/4,00</strong>[cite: 2]. Memiliki pengalaman nyata dalam membangun antarmuka web yang responsif, mengintegrasikan API, serta mengolah data menggunakan algoritma Machine Learning[cite: 2].
          </p>
          <p>
            Berpengalaman merancang dan mengembangkan aplikasi web publik maupun dashboard admin di lingkungan instansi pemerintah (Diskominfo DIY), serta memiliki kemampuan pemecahan masalah (problem solving) yang baik dan cepat beradaptasi dengan teknologi baru[cite: 2].
          </p>

          {/* Kartu Informasi Pendidikan */}
          <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl space-y-4 mt-6">
            <h3 className="text-lg font-semibold text-white border-b border-slate-700 pb-2">
              Pendidikan
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-slate-100">S1 Informatika</p>
                <p className="text-slate-400">Univ. Jenderal Achmad Yani Yogyakarta</p>
                <p className="text-blue-400 font-mono text-xs mt-1">IPK: 3.76 / 4.00 (2022 - 2026)</p>
              </div>
              <div className="sm:border-l sm:border-slate-800 sm:pl-4">
                <p className="font-bold text-slate-100">MIPA</p>
                <p className="text-slate-400">SMAS Bahrul Ulum, Sungailiat</p>
                <p className="text-slate-500 text-xs mt-1">(2019 - 2022)</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}