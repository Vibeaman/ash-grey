import { useEffect, useState } from 'react';
import { useCart } from '@/contexts/CartContext';

export function Mascot() {
  const { setOnItemAdded } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setOnItemAdded(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);
    });

    return () => setOnItemAdded(null);
  }, [setOnItemAdded]);

  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
      <div className={`transition-all duration-300 ${isAnimating ? 'mascot-pulse' : 'animate-float'}`}>
        <svg
          width="80"
          height="100"
          viewBox="0 0 80 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`drop-shadow-2xl ${isAnimating ? 'neon-glow rounded-full' : ''}`}
        >
          {/* Body */}
          <ellipse cx="40" cy="70" rx="28" ry="25" fill="#BFFF00" />
          
          {/* Head */}
          <circle cx="40" cy="35" r="30" fill="#BFFF00" />
          
          {/* Hair/Top tuft */}
          <ellipse cx="40" cy="8" rx="8" ry="6" fill="#BFFF00" />
          
          {/* Eye white */}
          <ellipse cx="40" cy="32" rx="18" ry="14" fill="white" />
          
          {/* Pupil */}
          <circle 
            cx={isAnimating ? "44" : "40"} 
            cy="34" 
            r="6" 
            fill="#1a1a1a"
            className="transition-all duration-200"
          />
          
          {/* Eyebrow stitches */}
          <g stroke="#E53935" strokeWidth="2" strokeLinecap="round">
            <line x1="25" y1="18" x2="27" y2="22" />
            <line x1="30" y1="17" x2="32" y2="21" />
            <line x1="35" y1="16" x2="37" y2="20" />
            <line x1="40" y1="16" x2="42" y2="20" />
            <line x1="45" y1="16" x2="47" y2="20" />
            <line x1="50" y1="17" x2="52" y2="21" />
            <line x1="55" y1="18" x2="53" y2="22" />
          </g>
          
          {/* Lips */}
          <ellipse cx="40" cy="52" rx="10" ry="6" fill="#E53935" />
          
          {/* Ears */}
          <circle cx="12" cy="35" r="6" fill="#BFFF00" />
          <circle cx="68" cy="35" r="6" fill="#BFFF00" />
          
          {/* Arms */}
          <ellipse cx="15" cy="65" rx="6" ry="12" fill="#BFFF00" />
          <ellipse cx="65" cy="65" rx="6" ry="12" fill="#BFFF00" />
        </svg>
      </div>
      
      {isAnimating && (
        <div className="absolute -top-2 -right-2 animate-ping">
          <span className="text-2xl">✨</span>
        </div>
      )}
    </div>
  );
}
