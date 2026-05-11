import React from "react";
import { Mail, Github, Globe } from "lucide-react";

export const Quest1_Profile = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="border-l-[6px] border-[#E74C3C] pl-6 py-2">
          <p className="text-3xl sm:text-5xl font-black text-black leading-none">Muhammad Yafi Azka</p>
          <p className="text-xl sm:text-2xl font-bold text-black/50 mt-2">Fullstack Developer</p>
        </div>
        <div className="bg-black/5 p-4 border-2 border-black/10 rounded-sm text-sm font-bold w-full sm:w-auto">
          <p className="flex justify-between gap-8"><span>LOCATION:</span> <span>Banda Aceh, ID</span></p>
          <p className="flex justify-between gap-8"><span>GUILD:</span> <span>Open to Work</span></p>
          <p className="flex justify-between gap-8"><span>XP:</span> <span>5+ Years</span></p>
        </div>
      </div>
      
      <div className="bg-white/50 p-6 border-2 border-black/5 rounded-sm">
         <p className="text-lg sm:text-xl font-medium leading-relaxed italic">
           "Passionate fullstack developer with a strong enthusiasm for frontend development. Specializing in beautiful, intuitive user interfaces using React, Next.js, and modern web standards."
         </p>
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        <a href="mailto:yafiazkawork@gmail.com" className="px-6 sm:px-8 py-3 sm:py-4 bg-[#E74C3C] border-4 border-black shadow-[4px_4px_0px_0px_#000] active:translate-y-1 active:shadow-none transition-all font-black uppercase text-white inline-flex items-center gap-2 group">
          <Mail size={24} /> <span className="group-hover:translate-x-1 transition-transform">Send Messenger Bird</span>
        </a>
        <div className="flex gap-4 items-center px-4 bg-white border-2 border-black">
          <a href="https://github.com/YafiAzka" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-black/5 transition-colors"><Github className="text-black" /></a>
          <a href="https://yafiazka.my.id" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-black/5 transition-colors"><Globe className="text-black" /></a>
        </div>
      </div>
    </div>
  );
};
