import React from "react";

export const Quest2_Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#FF9F00]/5 border-2 border-black/10 p-6 rounded-sm">
        <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
          <div className="w-3 h-8 bg-[#FF9F00] border-2 border-black" />
          Technical Skills
        </h3>
        <div className="space-y-4">
           <div className="bg-white border-2 border-black p-3 font-bold">
             <p className="text-xs text-[#E74C3C] uppercase mb-1">Mobile Development</p>
             <p className="text-lg">Flutter, Dart (Cross-platform Apps)</p>
           </div>
           <div className="bg-white border-2 border-black p-3 font-bold">
             <p className="text-xs text-[#2ECC71] uppercase mb-1">Backend Framework</p>
             <p className="text-lg">Laravel, PHP (Backend development)</p>
           </div>
           <div className="bg-white border-2 border-black p-3 font-bold">
             <p className="text-xs text-[#3498DB] uppercase mb-1">Frontend Development</p>
             <p className="text-lg">React.js, Bootstrap, HTML, CSS, JavaScript (Next.js - Familiar)</p>
           </div>
        </div>
      </div>

      <div className="bg-[#FF9F00]/5 border-2 border-black/10 p-6 rounded-sm">
        <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
          <div className="w-3 h-8 bg-black/20 border-2 border-black" />
          Skills & Proficiencies
        </h3>
        <div className="space-y-4">
           <div className="bg-white border-2 border-black p-3 font-bold">
             <p className="text-xs text-black/40 uppercase mb-1">Design & UX</p>
             <p className="text-lg">Figma (UI/UX design), Canva (Graphics design), UI/UX Implementation</p>
           </div>
           <div className="bg-white border-2 border-black p-3 font-bold">
             <p className="text-xs text-black/40 uppercase mb-1">Social & Marketing</p>
             <p className="text-lg">Social Media Marketing, Graphic Design</p>
           </div>
           <div className="bg-white border-2 border-black p-3 font-bold">
             <p className="text-xs text-black/40 uppercase mb-1">Professional Traits</p>
             <p className="text-lg font-black text-black/80">Problem-solving, English proficiency, Technical presentation</p>
           </div>
        </div>
      </div>
    </div>
  );
};
