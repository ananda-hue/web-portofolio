export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/80">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="text-blue-500">01.</span> Tentang Saya & Pendidikan
      </h2>
      <div className="grid md:grid-cols-3 gap-8 text-slate-300 leading-relaxed">
        <div className="md:col-span-2 space-y-4">
          <p>
            Saya adalah lulusan **S1 Informatika** dengan **IPK 3,76/4,00**. Memiliki pengalaman nyata dalam membangun antarmuka web yang responsif, mengintegrasikan API, serta mengolah data menggunakan algoritma Machine Learning.
          </p>
          <p>
            Berpengalaman merancang dan mengembangkan aplikasi web publik maupun dashboard admin di lingkungan instansi pemerintah (Diskominfo DIY), serta memiliki kemampuan pemecahan masalah (problem solving) yang baik dan cepat beradaptasi dengan teknologi baru.
          </p>
        </div>
        <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl space-y-4">
          <h3 className="text-lg font-semibold text-white border-b border-slate-700 pb-2">
            Pendidikan
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-bold text-slate-100">S1 Informatika</p>
              <p className="text-slate-400">Univ. Jenderal Achmad Yani Yogyakarta</p>
              <p className="text-blue-400 font-mono text-xs mt-1">IPK: 3.76 / 4.00 (2022 - 2026)</p>
            </div>
            <div className="pt-2 border-t border-slate-800">
              <p className="font-bold text-slate-100">MIPA</p>
              <p className="text-slate-400">SMAS Bahrul Ulum, Sungailiat</p>
              <p className="text-slate-500 text-xs">(2019 - 2022)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}