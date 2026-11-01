"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const roles = [
    "Frontend Engineer",
    "Mobile Developer",
    "Data Analyst",
    "Data Science Associate",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          currentRole.substring(
            0,
            isDeleting ? displayText.length - 1 : displayText.length + 1
          )
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="min-h-[85vh] flex flex-col justify-center max-w-5xl mx-auto px-6 py-12 relative overflow-hidden">
      
      <div className="grid md:grid-cols-12 gap-8 items-center">
        
        {/* Kolom Kiri: Teks & Peran Minat */}
        <div className="md:col-span-7 space-y-6 order-2 md:order-1">
    

          {/* Nama & Typewriter */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ananda Ferandita
            </h1>
            
            <div className="h-10 mt-2 flex items-center">
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent font-mono">
                {displayText}
                <span className="inline-block w-2 h-6 ml-1 bg-blue-400 animate-pulse" />
              </p>
            </div>
          </div>

          {/* Deskripsi Ringkas & To-The-Point */}
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            Spesialisasi dalam <strong className="text-white">Web & Mobile Development</strong> serta pengolahan data melalui <strong className="text-white">Data Analytics, Machine Learning, dan Natural Language Processing (NLP)</strong>.
          </p>

          {/* Tag Minat Posisi */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
              💻 Web & Mobile Development
            </span>
            <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              📊 Data Analytics & Processing
            </span>
            <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
              🤖 Applied ML & NLP
            </span>
          </div>

          {/* Tombol CTA */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 text-sm"
            >
              🚀 Lihat Proyek
            </a>

            {/* Path CV Tanpa Spasi */}
            <a
              href="/CV_Ananda Ferandita.pdf"
              download="CV_Ananda Ferandita.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-700 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-800 text-slate-200 px-6 py-3 rounded-xl transition-all duration-200 text-sm font-medium hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
            >
              📄 Unduh CV (PDF)
            </a>
          </div>

        </div>

        {/* Kolom Kanan: Frame Foto Potret */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <div className="relative group w-full max-w-[260px] aspect-[3/4] rounded-3xl p-1 bg-gradient-to-tr from-blue-600/40 via-indigo-500/30 to-slate-800/40 shadow-2xl shadow-blue-500/10">
            
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-25 blur-lg group-hover:opacity-40 transition-opacity duration-500" />

            <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-950 border border-slate-800/80">
              <Image
                src="/foto-wisuda.jpeg"
                alt="Wisuda Ananda Ferandita"
                fill
                priority
                sizes="(max-width: 768px) 260px, 300px"
                className="object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}