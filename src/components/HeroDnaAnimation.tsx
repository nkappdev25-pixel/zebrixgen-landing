import React from 'react';
import { motion } from 'motion/react';

export const HeroDnaAnimation: React.FC = () => {
  const strands = Array.from({ length: 45 });
  const H = 260; 
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Edge fading gradients to make it blend seamlessly */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#F6F8FD] to-transparent z-20" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#F6F8FD] to-transparent z-20" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#F6F8FD] to-transparent z-20" />
      <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#F6F8FD] to-transparent z-20" />
      
      {/* Tilted DNA wave container */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-5 sm:gap-7 transform -rotate-[12deg] scale-105 w-[120%] justify-center opacity-85">
        {strands.map((_, i) => (
          <div key={i} className="relative w-px h-[260px] flex flex-col items-center shrink-0">
            {/* Connecting Base Pair Line */}
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 w-px bg-[#4F46E5]/15"
              animate={{
                height: [H, 0, H]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.12
              }}
            />
            
            {/* Node A (Indigo) */}
            <motion.div 
              className="absolute top-0 left-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#4F46E5]/70 shadow-[0_0_8px_rgba(79,70,229,0.25)]"
              style={{ x: '-50%' }}
              animate={{
                y: [0, H, 0],
                scale: [1, 0.3, 1],
                opacity: [0.6, 0.15, 0.6],
                zIndex: [10, 0, 10]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.12
              }}
            />
            
            {/* Node B (Teal) */}
            <motion.div 
              className="absolute top-0 left-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#14B8A6]/70 shadow-[0_0_8px_rgba(20,184,166,0.25)]"
              style={{ x: '-50%' }}
              animate={{
                y: [H, 0, H],
                scale: [0.3, 1, 0.3],
                opacity: [0.15, 0.6, 0.15],
                zIndex: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.12
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
