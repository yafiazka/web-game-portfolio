import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from "motion/react";
import React, { useEffect, useRef, useState, ReactNode, ElementType } from "react";
import { User, Code, Briefcase, Mail, Github, Globe, ExternalLink, Award } from "lucide-react";
import { Section } from "./types";

// Import Section Components
import { Quest1_Profile } from "./sections/Quest1_Profile";
import { Quest2_Skills } from "./sections/Quest2_Skills";
import { Quest3_Experience } from "./sections/Quest3_Experience";
import { Quest4_Education } from "./sections/Quest4_Education";
import { Quest5_Portfolio } from "./sections/Quest5_Portfolio";
import { Quest6_Contact } from "./sections/Quest6_Contact";

// --- Components ---

const Character = ({ isMoving, velocity, isJumping: manualJumping, direction, recoil }: { isMoving: boolean; velocity: number; isJumping: boolean; direction: number; recoil: boolean }) => {
  const isJumping = manualJumping;
  const [lookDir, setLookDir] = useState(0);
  const [isIdle, setIsIdle] = useState(true);

  useEffect(() => {
    const idleTimer = setTimeout(() => setIsIdle(!isMoving && !isJumping), 100);
    return () => clearTimeout(idleTimer);
  }, [isMoving, isJumping]);

  useEffect(() => {
    if (isMoving || isJumping) {
      setLookDir(0);
      return;
    }
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        setLookDir(Math.random() > 0.5 ? 8 : -8);
        setTimeout(() => setLookDir(0), 800 + Math.random() * 800);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [isMoving, isJumping]);
  
  return (
    <div className="relative w-20 h-24 pointer-events-none">
      <motion.div
        className="w-full h-full"
        animate={{
          y: isJumping ? [0, -120, 0] : isMoving ? [0, -8, 0] : [0, -4, 0],
          rotate: isMoving ? [0, 5, -5, 0] : isIdle ? [0, 1, -1, 0] : 0,
          scaleX: recoil ? [direction, direction * 1.1, direction] : direction,
          scaleY: recoil ? [1, 0.8, 1.1, 1] : (isJumping ? [1, 1.3, 0.7, 1] : isMoving ? [1, 0.95, 1.05, 1] : [1, 1.05, 1]),
        }}
        transition={{
          y: {
            duration: isJumping ? 0.6 : isMoving ? 0.25 : 3,
            repeat: isJumping ? 0 : Infinity,
            ease: "easeInOut",
          },
          scaleY: {
            duration: recoil ? 0.3 : (isJumping ? 0.6 : isMoving ? 0.4 : 1.5),
            repeat: recoil ? 0 : Infinity,
            ease: "easeInOut"
          },
          scaleX: recoil ? { duration: 0.3 } : { type: "spring", stiffness: 400, damping: 15 },
          rotate: {
             duration: isMoving ? 0.25 : 2,
             repeat: Infinity
          },
        }}
      >
        {/* Minecraft Chicken Model */}
        <div className="absolute inset-0 flex flex-col items-center">
          {/* Head */}
          <motion.div 
            className="w-10 h-8 bg-white border-[3px] border-black relative z-20"
            animate={{ 
              y: isMoving ? [0, -4, 0] : isJumping ? [2, -2, 0] : [0, -1.5, 0],
              rotate: isMoving ? [1, -1, 1] : lookDir,
              x: isMoving ? 0 : lookDir / 2
            }}
            transition={{ repeat: isMoving || !isJumping ? Infinity : 0, duration: isMoving ? 0.3 : 2.5, ease: "easeInOut" }}
          >
            {/* Eyes with blinking */}
            <div className="absolute top-2 inset-x-0 flex justify-between px-1">
              <motion.div 
                className="w-2 h-2 bg-black" 
                animate={{ scaleY: [1, 1, 0.1, 1] }} 
                transition={{ repeat: Infinity, repeatDelay: 3.5, duration: 0.15 }}
              />
              <motion.div 
                className="w-2 h-2 bg-black" 
                animate={{ scaleY: [1, 1, 0.1, 1] }} 
                transition={{ repeat: Infinity, repeatDelay: 3.5, duration: 0.15 }}
              />
            </div>
            {/* Beak */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-3 bg-yellow-400 border-2 border-black" />
            {/* Wattle */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-2 bg-red-600 border-x-2 border-b-2 border-black" />
          </motion.div>

          {/* Body */}
          <div className="w-14 h-10 bg-white border-[3px] border-black relative mt-[-2px] shadow-[inset_-4px_-4px_0px_0px_rgba(0,0,0,0.1)]">
             {/* Wings */}
             <motion.div 
               className="absolute -left-3 top-1 w-3 h-6 bg-white border-[3px] border-black origin-right"
               animate={{ rotate: isJumping ? [0, -60, 0] : isMoving ? [0, -30, 0] : [0, -8, 0] }}
               transition={{ repeat: Infinity, duration: isJumping ? 0.2 : isMoving ? 0.3 : 2.5 }}
             />
             <motion.div 
               className="absolute -right-3 top-1 w-3 h-6 bg-white border-[3px] border-black origin-left"
               animate={{ rotate: isJumping ? [0, 60, 0] : isMoving ? [0, 30, 0] : [0, 8, 0] }}
               transition={{ repeat: Infinity, duration: isJumping ? 0.2 : isMoving ? 0.3 : 2.5 }}
             />
          </div>

          {/* Legs */}
          <div className="flex gap-4 mt-[-2px]">
             <motion.div 
               className="w-2 h-4 bg-yellow-500 border-2 border-black"
               animate={{ 
                 y: isMoving ? [0, -8, 0] : 0, 
                 rotate: isMoving ? [15, -15, 0] : 0 
               }}
               transition={{ duration: 0.25, repeat: isMoving ? Infinity : 0 }}
             />
             <motion.div 
               className="w-2 h-4 bg-yellow-500 border-2 border-black"
               animate={{ 
                 y: isMoving ? [0, -8, 0] : 0, 
                 rotate: isMoving ? [-15, 15, 0] : 0 
               }}
               transition={{ duration: 0.25, repeat: isMoving ? Infinity : 0, delay: 0.125 }}
             />
          </div>
        </div>
      </motion.div>
      
      {/* Tag - Outside flip div */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#333] px-3 py-1 rounded text-[10px] font-black border-2 border-black whitespace-nowrap text-white shadow-md z-30 uppercase tracking-widest">
        Chicken Run
      </div>
    </div>
  );
};

const ParallaxLayer = ({ progress, speed, children, className }: { progress: any; speed: number; children: ReactNode; className?: string }) => {
  const x = useTransform(progress, [0, 1], ["0%", `${-speed * 100}%`]);
  return (
    <motion.div style={{ x }} className={`absolute inset-0 pointer-events-none ${className}`}>
      {children}
    </motion.div>
  );
};

const Mountain = ({ x, height, color }: { x: string; height: string; color: string }) => (
  <div 
    className="absolute bottom-0" 
    style={{ 
      left: x, 
      width: '300px', 
      height: height, 
      backgroundColor: color,
      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' 
    }} 
  />
);

const Bush = ({ x, scale = 1 }: { x: string; scale?: number }) => (
  <div className="absolute bottom-0 flex" style={{ left: x, transform: `scale(${scale})`, transformOrigin: 'bottom' }}>
    <div className="w-8 h-8 bg-[#5DA21E] rounded-full border-4 border-black -mr-4" />
    <div className="w-12 h-12 bg-[#71BC2B] rounded-full border-4 border-black relative z-10" />
    <div className="w-8 h-8 bg-[#5DA21E] rounded-full border-4 border-black -ml-4" />
  </div>
);

const Grass = ({ x, scale = 1 }: { x: string; scale?: number }) => (
  <div className="absolute bottom-0 flex gap-0.5" style={{ left: x, transform: `scale(${scale})`, transformOrigin: 'bottom' }}>
    <div className="w-2 h-6 bg-[#71BC2B] border-t-4 border-x-4 border-black" style={{ clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)' }} />
    <div className="w-2 h-8 bg-[#71BC2B] border-t-4 border-x-4 border-black" style={{ clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)' }} />
    <div className="w-2 h-5 bg-[#71BC2B] border-t-4 border-x-4 border-black" style={{ clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)' }} />
  </div>
);

const LevelSection: React.FC<{ section: Section; index: number }> = ({ section, index }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    const updateLimit = () => {
      if (contentRef.current && containerRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        const containerHeight = containerRef.current.offsetHeight;
        setDragLimit(Math.min(0, containerHeight - contentHeight));
      }
    };

    updateLimit();
    
    const observer = new ResizeObserver(updateLimit);
    if (contentRef.current) observer.observe(contentRef.current);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [section.content]);

  return (
    <div id={`section-${section.id}`} className="flex-shrink-0 w-screen sm:w-[85vw] h-screen flex items-center justify-center relative px-4 sm:px-8">
      <div className="max-w-5xl w-full">
        <motion.div
          id={`card-${section.id}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFF8E7] border-[4px] sm:border-[6px] border-black rounded-none shadow-[6px_6px_0px_0px_#000] sm:shadow-[12px_12px_0px_0px_#000] overflow-hidden"
        >
          {/* Header Bar */}
          <div className={`p-3 sm:p-4 border-b-[4px] sm:border-b-[6px] border-black flex justify-between items-center ${section.color}`}>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 sm:border-4 border-black bg-white flex items-center justify-center shadow-[inset_-2px_-2px_0px_0px_rgba(0,0,0,0.2)]">
                <section.icon size={20} className="sm:size-6 text-black" />
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-black text-black uppercase tracking-tighter decoration-4 underline">QUEST {index + 1}: {section.title}</h2>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase">Active Task</span>
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div ref={containerRef} className="p-4 sm:p-8 h-[55vh] sm:h-[60vh] overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/papyros.png')] cursor-grab active:cursor-grabbing relative">
             <motion.div 
               drag="y"
               dragConstraints={{ top: dragLimit, bottom: 0 }}
               dragElastic={0.1}
               dragMomentum={true}
               className="text-black w-full"
             >
               <div ref={contentRef} className="pb-12">
                 {section.content}
               </div>
             </motion.div>
          </div>

          {/* Footer Bar Deco */}
          <div className="p-3 sm:p-4 bg-black/5 border-t-[4px] sm:border-t-[6px] border-black flex justify-between items-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 border-2 border-black" />
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 border-2 border-black" />
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 border-2 border-black opacity-30" />
            </div>
            <span className="text-[10px] sm:text-xs font-black text-black/40 uppercase">Journal Entry #{section.id}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FloatingStar = ({ top, left, w, h }: { top: string; left: string; w: number; h: number }) => {
  return (
    <motion.div
      className="absolute bg-white rounded-full opacity-60 shadow-inner z-0"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
      style={{ 
        top, 
        left,
        width: `${w}px`,
        height: `${h}px`
      }}
    />
  );
};

// --- Constants ---

const SECTIONS: Section[] = [
  {
    id: "profile",
    title: "Hero Data",
    color: "bg-[#E74C3C]",
    icon: User,
    content: <Quest1_Profile />
  },
  {
    id: "skills",
    title: "Mastery Tree",
    color: "bg-[#FF9F00]",
    icon: Code,
    content: <Quest2_Skills />
  },
  {
    id: "experience",
    title: "Hero's Journey",
    color: "bg-[#2ECC71]",
    icon: Briefcase,
    content: <Quest3_Experience />
  },
  {
    id: "education",
    title: "Training Grounds",
    color: "bg-[#F1C40F]",
    icon: Award,
    content: <Quest4_Education />
  },
  {
    id: "portfolio",
    title: "Portfolio",
    color: "bg-[#3498DB]",
    icon: Globe,
    content: <Quest5_Portfolio />
  },
  {
    id: "contact",
    title: "The End",
    color: "bg-[#9B59B6]",
    icon: Mail,
    content: <Quest6_Contact />
  }
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMoving, setIsMoving] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isJumping, setIsJumping] = useState(false);
  const [recoil, setRecoil] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollDirection = useRef(0);
  const scrollSpeed = useRef(0);
  const maxScrollSpeed = 0.008;
  const scrollAccel = 0.0002;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useAnimationFrame((time, delta) => {
    if (scrollDirection.current !== 0) {
      // Smooth Ramp up speed
      scrollSpeed.current = Math.min(maxScrollSpeed, scrollSpeed.current + scrollAccel);
      const next = Math.max(0, Math.min(1, progress.get() + (scrollDirection.current * scrollSpeed.current)));
      progress.set(next);
    } else {
      // Smooth deceleration
      if (scrollSpeed.current > 0) {
        scrollSpeed.current = Math.max(0, scrollSpeed.current - (scrollAccel * 2));
        const next = Math.max(0, Math.min(1, progress.get() + (lastDir.current * scrollSpeed.current)));
        progress.set(next);
      }
    }
  });

  const lastDir = useRef(0);

  const startScrolling = (dir: number) => {
    scrollDirection.current = dir;
    lastDir.current = dir;
    handleJump();
    triggerRecoil();
  };

  const stopScrolling = () => {
    scrollDirection.current = 0;
  };

  const triggerRecoil = () => {
    setRecoil(true);
    setTimeout(() => setRecoil(false), 300);
  };

  // Use MotionValue for manual scroll driving
  const progress = useMotionValue(0);
  
  const smoothProgress = useSpring(progress, {
    stiffness: 60, // Increased for snappier feel
    damping: 20,
    restDelta: 0.0001
  });

  const x = useTransform(smoothProgress, [0, 1], ["0vw", isMobile ? "-500vw" : "-410vw"]); 

  const handleJump = () => {
    if (isJumping) return;
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 600);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        handleJump();
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isJumping]);

  useEffect(() => {
    let lastValue = 0;
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const diff = latest - lastValue;
      const moving = Math.abs(diff) > 0.0005; // Slightly higher threshold to avoid spring jitter
      setIsMoving(moving);
      setVelocity(Math.abs(diff));
      if (Math.abs(diff) > 0.0001) setDirection(diff > 0 ? 1 : -1);
      lastValue = latest;
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const delta = (e.deltaY + e.deltaX) / 1000; 
      const nextProgress = Math.max(0, Math.min(1, progress.get() + delta));
      progress.set(nextProgress);
    };

    // Advanced Touch Support with Inertia
    let lastTouchX = 0;
    let touchVelocity = 0;
    let rafId: number;
    let isTouching = false;

    const handleTouchStart = (e: TouchEvent) => {
      isTouching = true;
      lastTouchX = e.touches[0].clientX;
      touchVelocity = 0;
      cancelAnimationFrame(rafId);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTouching) return;
      const currentX = e.touches[0].clientX;
      const deltaX = lastTouchX - currentX;
      // Scale delta relative to screen size - increased sensitivity
      const delta = deltaX / (window.innerWidth * 0.8);
      
      const currentProgress = progress.get();
      progress.set(Math.max(0, Math.min(1, currentProgress + delta)));
      
      touchVelocity = delta;
      lastTouchX = currentX;
    };

    const handleTouchEnd = () => {
      isTouching = false;
      
      const applyInertia = () => {
        if (Math.abs(touchVelocity) < 0.00005 || isTouching) return;
        
        const currentProgress = progress.get();
        progress.set(Math.max(0, Math.min(1, currentProgress + touchVelocity)));
        
        touchVelocity *= 0.92; // Slightly more friction for control
        rafId = requestAnimationFrame(applyInertia);
      };
      
      rafId = requestAnimationFrame(applyInertia);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const stars = useRef(Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 400}%`,
    delay: Math.random() * 5,
    speed: 2 + Math.random() * 4,
    w: 60 + Math.random() * 100,
    h: 20 + Math.random() * 40
  })));

  const scrollByStep = (direction: number) => {
    const current = progress.get();
    const step = 1 / (SECTIONS.length - 1);
    const next = Math.max(0, Math.min(1, Math.round(current / step + direction) * step));
    progress.set(next);
  };

  return (
    <div className="bg-[#5C94FC] text-white overflow-hidden font-sans cursor-crosshair scrollbar-hide h-screen w-screen relative">
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
          border-left: 2px solid black;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: black;
          border-radius: 0;
        }
      `}} />

      {/* Main Game Port */}
      <div className="relative h-screen w-screen overflow-hidden">
        {/* Parallax Background Layers */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <ParallaxLayer progress={smoothProgress} speed={0.2} className="opacity-40">
             {stars.current.slice(0, 15).map(star => <FloatingStar key={star.id} {...star} />)}
          </ParallaxLayer>
          <ParallaxLayer progress={smoothProgress} speed={0.4} className="h-full">
            <Mountain x="10%" height="200px" color="#4B7BDC" />
            <Mountain x="45%" height="180px" color="#3C6CD1" />
            <Mountain x="80%" height="220px" color="#4B7BDC" />
            <Mountain x="130%" height="240px" color="#3C6CD1" />
            <Mountain x="180%" height="200px" color="#4B7BDC" />
            <Mountain x="230%" height="260px" color="#3C6CD1" />
            <Mountain x="280%" height="180px" color="#4B7BDC" />
          </ParallaxLayer>
          <ParallaxLayer progress={smoothProgress} speed={0.6} className="h-full items-end flex pb-40">
            <div className="absolute bottom-40 w-[600vw] h-20 bg-[#3C6CD1]/20 rounded-t-[100px]" />
            <Bush x="5%" /><Bush x="20%" scale={1.2} /><Bush x="40%" /><Bush x="55%" scale={0.8} />
            <Bush x="85%" scale={1.1} /><Bush x="110%" /><Bush x="140%" scale={0.9} />
            <Bush x="180%" scale={1.2} /><Bush x="220%" /><Bush x="260%" scale={0.8} />
            <Grass x="2%" scale={1.3} /><Grass x="12%" /><Grass x="18%" scale={1.2} /><Grass x="25%" scale={0.9} />
            <Grass x="32%" /><Grass x="42%" scale={1.1} /><Grass x="48%" scale={0.8} /><Grass x="60%" scale={1.2} />
            <Grass x="75%" scale={1.4} /><Grass x="95%" /><Grass x="105%" scale={0.8} /><Grass x="125%" scale={1.1} />
            <Grass x="150%" scale={0.9} /><Grass x="160%" scale={1.3} /><Grass x="190%" scale={1.1} /><Grass x="210%" /><Grass x="235%" scale={1.2} /><Grass x="250%" scale={0.9} />
          </ParallaxLayer>
          <ParallaxLayer progress={smoothProgress} speed={0.8} className="opacity-60">
             {stars.current.slice(15, 30).map(star => <FloatingStar key={star.id} {...star} />)}
          </ParallaxLayer>
        </div>

        {/* Character */}
        <div id="player-character-container" className="absolute left-1/2 bottom-[160px] -translate-x-1/2 z-[100] pointer-events-none">
          <Character isMoving={isMoving} velocity={velocity} isJumping={isJumping} direction={direction} recoil={recoil} />
        </div>

        {/* Horizontal Level Content */}
        <motion.div id="level-track" style={{ x }} className="flex h-screen items-center">
          <div className="absolute inset-0 pointer-events-none">
            <div id="finish-gate-container" className="absolute left-[450vw] bottom-[160px] flex flex-col items-center">
               <div className="w-40 h-12 bg-[#2ECC71] border-4 border-black rounded-t-lg shadow-lg"></div>
               <div className="w-32 h-40 bg-[#27AE60] border-x-4 border-black"></div>
            </div>
          </div>
          {SECTIONS.map((section, idx) => <LevelSection key={section.id} section={section} index={idx} />)}
        </motion.div>

        {/* Ground */}
        <div className="absolute bottom-0 w-full h-32 sm:h-40 z-40 bg-[#8b623e] border-t-4 border-black shadow-[inset_0_10px_20px_rgba(0,0,0,0.2)]">
          <div className="h-4 w-full bg-[#71BC2B] border-b-4 border-black" />
          <div className="h-full w-full relative pointer-events-none overflow-hidden opacity-20">
             {/* Subterranean details */}
             <div className="absolute top-8 left-1/4 w-12 h-6 bg-black/40 rounded-full blur-[2px]" />
             <div className="absolute top-16 left-3/4 w-16 h-8 bg-black/40 rounded-full blur-[2px]" />
             <div className="absolute bottom-12 left-1/2 w-8 h-4 bg-black/40 rounded-full blur-[1px]" />
          </div>
        </div>

        {/* Controls Overlay */}
        <div className="absolute bottom-4 sm:bottom-12 right-4 sm:right-12 flex items-center space-x-3 sm:space-x-6 z-50">
          <div className="flex space-x-3 sm:space-x-4">
            <button 
              onPointerDown={() => startScrolling(-1)}
              onPointerUp={stopScrolling}
              onPointerLeave={stopScrolling}
              className="group relative w-14 h-14 sm:w-20 sm:h-20 bg-[#E74C3C] border-4 border-black shadow-[4px_4px_0px_0px_#000] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] rounded-full font-black text-xl sm:text-2xl flex items-center justify-center hover:translate-y-1 transition-all touch-none"
            >
              <span className="absolute -top-10 text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-black px-2 py-1 rounded text-white border border-white/20 whitespace-nowrap shadow-xl pointer-events-none">
                {isMobile ? "PREV QUEST" : "GO LEFT"}
              </span>
              A
            </button>
            <button 
              onPointerDown={() => startScrolling(1)}
              onPointerUp={stopScrolling}
              onPointerLeave={stopScrolling}
              className="group relative w-14 h-14 sm:w-20 sm:h-20 bg-[#E74C3C] border-4 border-black shadow-[4px_4px_0px_0px_#000] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] rounded-full font-black text-xl sm:text-2xl flex items-center justify-center hover:translate-y-1 transition-all touch-none"
            >
              <span className="absolute -top-10 text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-black px-2 py-1 rounded text-white border border-white/20 whitespace-nowrap shadow-xl pointer-events-none">
                {isMobile ? "NEXT QUEST" : "GO RIGHT"}
              </span>
              B
            </button>
          </div>
        </div>

        {/* Progress HUD */}
        <div className="absolute bottom-4 sm:bottom-12 left-4 sm:left-12 flex flex-col gap-1 sm:gap-2 z-50">
          <span className="text-[9px] sm:text-[10px] text-[#FFD700] font-black uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Quest Progress</span>
          <div className="w-32 sm:w-64 h-4 sm:h-6 border-4 border-black bg-white/30 backdrop-blur-sm p-1">
            <motion.div className="h-full bg-gradient-to-r from-[#E74C3C] to-[#C0392B]" style={{ scaleX: smoothProgress, transformOrigin: "0%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
