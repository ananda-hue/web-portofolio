const techSkills = [
  "React.js",
  "Tailwind CSS",
  "JavaScript",
  "HTML",
  "Python",
  "Flutter",
  "MySQL",
];

const dataSkills = [
  "Data Analytics & Preprocessing",
  "NLP (Natural Language Processing)",
  "Machine Learning (SVM)",
  "Sentiment Analysis",
];

const toolsAndSoftSkills = [
  "Git & GitHub",
  "Laragon",
  "Figma",
  "Problem Solving",
  "Kerja Sama Tim",
  "Adaptabilitas Teknologi",
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/80">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="text-blue-500 font-mono">02.</span> Kemampuan & Keahlian
      </h2>

      <div className="space-y-8">
        {/* Web & Mobile Development */}
        <div>
          <h3 className="text-sm font-mono text-blue-400 tracking-wider uppercase mb-3 font-semibold">
            💻 Web & Mobile Development
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {techSkills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3.5 py-1.5 rounded-xl text-sm font-medium hover:border-blue-500/40 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Data & AI/ML */}
        <div>
          <h3 className="text-sm font-mono text-emerald-400 tracking-wider uppercase mb-3 font-semibold">
            📊 Data Analytics & Machine Learning
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {dataSkills.map((skill) => (
              <span
                key={skill}
                className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-3.5 py-1.5 rounded-xl text-sm font-medium hover:border-emerald-500/40 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Professional Skills */}
        <div>
          <h3 className="text-sm font-mono text-purple-400 tracking-wider uppercase mb-3 font-semibold">
            🛠️ Tools & Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {toolsAndSoftSkills.map((skill) => (
              <span
                key={skill}
                className="bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3.5 py-1.5 rounded-xl text-sm font-medium"
              >
                {skill}
              </span>
            ))}
            <span className="bg-slate-800/60 text-slate-300 border border-slate-700/60 px-3.5 py-1.5 rounded-xl text-sm font-medium">
              🇮🇩 Bahasa Indonesia (Native)
            </span>
            <span className="bg-slate-800/60 text-slate-300 border border-slate-700/60 px-3.5 py-1.5 rounded-xl text-sm font-medium">
              🇬🇧 Bahasa Inggris (Basic)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}