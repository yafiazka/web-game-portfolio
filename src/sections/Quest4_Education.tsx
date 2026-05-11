import React from "react";
import { Award, Code } from "lucide-react";

export const Quest4_Education = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000]">
         <div className="flex justify-between items-start mb-4">
           <div className="p-3 bg-[#F1C40F] border-2 border-black">
             <Award size={24} className="text-white" />
           </div>
           <span className="bg-black text-white px-2 py-1 text-[10px] font-black uppercase">Degree</span>
         </div>
         <h3 className="text-2xl font-black uppercase leading-tight mb-2">Universitas Bina Bangsa Getsempena</h3>
         <p className="font-bold text-black/60 uppercase text-xs mb-4">CS Bachelor | 2024 - Present</p>
         <p className="text-black/80 font-medium">Currently refining computational magic and complex logic structures.</p>
      </div>
      
      <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000]">
         <div className="flex justify-between items-start mb-4">
           <div className="p-3 bg-black/20 border-2 border-black">
             <Code size={24} className="text-white" />
           </div>
           <span className="bg-black text-white px-2 py-1 text-[10px] font-black uppercase">Vocational</span>
         </div>
         <h3 className="text-2xl font-black uppercase leading-tight mb-2">SMK Negeri 5 Telkom Banda Aceh</h3>
         <p className="font-bold text-black/60 uppercase text-xs mb-4">Software Eng | Graduated 2021</p>
         <p className="text-black/80 font-medium">Foundational training in the ancient arts of code and logic.</p>
      </div>
    </div>
  );
};
