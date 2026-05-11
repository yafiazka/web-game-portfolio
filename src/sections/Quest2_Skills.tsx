import React from "react";

export const Quest2_Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#FF9F00]/5 border-2 border-black/10 p-6 rounded-sm">
        <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
          <div className="w-3 h-8 bg-[#FF9F00] border-2 border-black" />
          Frontend & Mobile
        </h3>
        <div className="space-y-4">
           <div className="bg-white border-2 border-black p-3 font-bold">
             <p className="text-xs text-black/40 uppercase mb-1">Web Core</p>
             <p className="text-lg">React.js, Next.js, TypeScript, Tailwind CSS</p>
           </div>
           <div className="bg-white border-2 border-black p-3 font-bold">
             <p className="text-xs text-black/40 uppercase mb-1">Mobile & UI</p>
             <p className="text-lg">Flutter, Dart, Bootstrap, UI/UX Implementation</p>
           </div>
           <div className="bg-white border-2 border-black p-3 font-bold">
             <p className="text-xs text-black/40 uppercase mb-1">Modern Standards</p>
             <p className="text-lg">HTML, CSS, JavaScript</p>
           </div>
        </div>
      </div>

      <div className="bg-[#FF9F00]/5 border-2 border-black/10 p-6 rounded-sm">
        <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
          <div className="w-3 h-8 bg-black/20 border-2 border-black" />
          Backend & Tools
        </h3>
        <div className="space-y-4">
           <div className="bg-white border-2 border-black p-3 font-bold">
             <p className="text-xs text-black/40 uppercase mb-1">Core Tech</p>
             <p className="text-lg">Laravel, PHP, Node.js</p>
           </div>
           <div className="bg-white border-2 border-black p-3 font-bold">
             <p className="text-xs text-black/40 uppercase mb-1">Infrastructure</p>
             <p className="text-lg">MySQL, pgSQL, API Design, Git</p>
           </div>
           <div className="bg-white border-2 border-black p-3 font-bold">
             <p className="text-xs text-black/40 uppercase mb-1">Creative</p>
             <p className="text-lg">Figma, Canva, Social Marketing</p>
           </div>
        </div>
      </div>
    </div>
  );
};
