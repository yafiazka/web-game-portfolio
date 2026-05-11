import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  name: string;
  url: string;
  description?: string;
  tech?: string;
}

export const Quest5_Portfolio = () => {
  // --- Static Projects Configuration ---
  // Simply add or remove projects here
  const PROJECTS: Project[] = [
    { 
      name: "USK Coffee", 
      url: "https://github.com/yafiazka/usk_coffee",
      tech: "Mobile App",
      description: "A coffee ordering and management application."
    },
    { 
      name: "SIMRS TA", 
      url: "https://github.com/yafiazka/simrs-ta",
      tech: "Web System",
      description: "Hospital management information system."
    },
    { 
      name: "Fident App", 
      url: "https://github.com/yafiazka/fident-app",
      tech: "Mobile App",
      description: "Personal finance and identity management tool."
    },
    { 
      name: "Nonton App", 
      url: "https://github.com/yafiazka/nonton_app",
      tech: "Web App",
      description: "Streaming and movie discovery platform."
    }
  ];

  return (
    <div className="space-y-6 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROJECTS.map((project, index) => (
          <div key={index} className="bg-white border-4 border-black p-5 hover:translate-y-[-4px] transition-transform shadow-[4px_4px_0px_0px_#000] flex flex-col h-full group">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-black uppercase leading-tight group-hover:text-[#3498DB] transition-colors">{project.name}</h3>
            </div>
            
            <p className="text-sm font-bold text-black/40 mb-2 uppercase">{project.tech}</p>
            
            <p className="text-sm font-medium text-black/70 mb-4 line-clamp-2 flex-grow italic">
              {project.description}
            </p>

            <div className="flex justify-end items-center mt-auto pt-4 border-t-2 border-black/5">
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-black uppercase text-[#3498DB] flex items-center gap-2 hover:translate-x-1 transition-transform"
              >
                View Project <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-6">
        <a 
          href="https://github.com/YafiAzka" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-black uppercase text-sm hover:scale-105 transition-transform"
        >
          View More on GitHub <Github size={18} />
        </a>
      </div>
    </div>
  );
};

