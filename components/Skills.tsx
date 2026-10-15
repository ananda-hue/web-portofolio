const hardSkills = [
  "React.js",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "Flutter",
  "Dart",
  "HTML / CSS",
  "MySQL",
  "Git / GitHub",
  "Figma",
  "Google Maps API",
  "Sentiment Analysis",
  "NLP & Machine Learning",
];

const softSkills = [
  "Problem Solving",
  "Kerja Sama Tim",
  "Adaptabilitas Teknologi",
  "Ketelitian",
  "Manajemen Waktu",
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/80">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="text-blue-500">02.</span> Kemampuan & Keahlian
      </h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Hard Skills & Teknologi</h3>
          <div className="flex flex-wrap gap-2.5">
            {hardSkills.map((skill) => (
              <span
                key={skill}
                className="bg-slate-800/80 hover:bg-slate-700/80 text-blue-400 border border-slate-700/70 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Soft Skills & Bahasa</h3>
          <div className="flex flex-wrap gap-2.5">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="bg-slate-800/40 text-slate-300 border border-slate-700/50 px-4 py-2 rounded-xl text-sm font-medium"
              >
                {skill}
              </span>
            ))}
            <span className="bg-slate-800/40 text-emerald-400 border border-slate-700/50 px-4 py-2 rounded-xl text-sm font-medium">
              Bahasa Indonesia (Native)
            </span>
            <span className="bg-slate-800/40 text-emerald-400 border border-slate-700/50 px-4 py-2 rounded-xl text-sm font-medium">
              Bahasa Inggris (Basic)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}