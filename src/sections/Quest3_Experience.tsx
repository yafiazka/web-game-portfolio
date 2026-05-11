import React from "react";

export const Quest3_Experience = () => {
  const experiences = [
    {
      company: "PT. Digital Kreasi Muslim",
      period: "Feb 2024 - Present",
      role: "Fullstack Developer",
      color: "#2ECC71",
      desc: "Developed Paperless Hospital EMR System with BSrE digital signatures and BPJS integration. Focusing on beautiful, intuitive UI for healthcare providers."
    },
    {
      company: "PT. Leu Ritel Indonesia",
      period: "Sep 2022 - Jan 2024",
      role: "Fullstack Developer",
      color: "#27AE60",
      desc: "Built Leumart E-commerce (Flutter & Laravel) and internal data processing systems for business operations."
    },
    {
      company: "Kooling ID",
      period: "2020 - 2021",
      role: "Digital Marketing Volunteer",
      color: "#bdc3c7",
      desc: "Managed social media and supported digital marketing campaigns, gaining content creation experience."
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
            <p className="text-lg font-black uppercase text-[#2ECC71] mb-2">{exp.role}</p>
            <p className="text-base sm:text-lg font-medium text-black/70 leading-snug">{exp.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
