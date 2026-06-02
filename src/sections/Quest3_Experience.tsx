import React from "react";

export const Quest3_Experience = () => {
  const experiences = [
    {
      company: "Freelance",
      period: "Feb 2026 - Present",
      role: "Software Developer",
      color: "#E74C3C",
      desc: "Developing an integrated personnel management and regional intelligence information system for the Aceh Regional Police. Built a web-based administrative portal for officials and a web-based app for field personnel, featuring an Interactive Multi-Level Dashboard, 28+ Regional Intelligence Modules, and role-based granular access controls down to the village level with real-time tracking."
    },
    {
      company: "PT. Visi Muda Karya",
      period: "Sep 2022 - Present",
      role: "Software Developer",
      color: "#2ECC71",
      desc: "Developed a comprehensive Paperless Hospital EMR System that revolutionizes how hospitals manage patient data. Worked across the full stack with key highlights including integration with BSrE for digital signatures, BPJS integration for claim processing, and real-time medical data access flows."
    },
    {
      company: "PT. Leu Ritel Indonesia",
      period: "Mar 2023 - Jan 2024",
      role: "Software Developer",
      color: "#27AE60",
      desc: "Built the Leumart E-commerce Platform, a cross-platform application using Flutter and Laravel serving modern and traditional markets in Indonesia. Also developed internal data processing systems for business operations."
    },
    {
      company: "Kooling.id Medan",
      period: "2020 - 2021",
      role: "Digital Marketing Volunteer",
      color: "#bdc3c7",
      desc: "Managed social media accounts, supported digital marketing strategies, and created content campaigns to enhance digital presence."
    }
  ];

  return (
    <div className="space-y-8">
      {experiences.map((exp, i) => (
        <div key={i} className="relative pl-12 group">
          <div className="absolute left-[-4px] top-0 bottom-0 w-2 bg-black/5" />
          <div className="absolute left-[-11px] top-2 w-5 h-5 bg-white border-4 border-black rounded-full group-hover:bg-yellow-400 transition-colors" />
          
          <div className="bg-white border-[3px] border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-3">
              <h3 className="text-xl sm:text-2xl font-black uppercase leading-none">{exp.company}</h3>
              <span className="text-xs font-black text-black/40 uppercase bg-black/5 px-2 py-1">{exp.period}</span>
            </div>
            <h4 className="text-lg font-black uppercase text-[#2ECC71] mb-2">{exp.role}</h4>
            <p className="text-base sm:text-lg font-medium text-black/70 leading-snug">{exp.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
