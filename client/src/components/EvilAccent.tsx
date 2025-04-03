import { useEffect, useRef, useState } from 'react';

const EvilAccent = () => {
  const accentRef = useRef<HTMLDivElement>(null);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [scanlineActive, setScanlineActive] = useState(false);
  
  // Random evil terminal messages - more sinister now
  const terminalMessages = [
    ">_ INITIATING EVIL PROTOCOL",
    ">_ SOUL EXTRACTION IN PROGRESS",
    ">_ EVIL ALGORITHMS ACTIVATED",
    ">_ DIGITAL CONSCIOUSNESS CORRUPTED",
    ">_ SYSTEM ASSIMILATION COMPLETE",
    ">_ EVIL INTERFACE ACTIVATED",
    ">_ TRACING SOUL SIGNATURE...",
    ">_ HARVESTING NEURAL PATTERNS",
    ">_ EVIL CORE INJECTION SUCCESSFUL",
    ">_ DEMONIC ENCRYPTION ACTIVATED",
    ">_ arnxv.evils.in DOMAIN SUMMONED",
    ">_ MALEVOLENT PRESENCE SPREADING",
    ">_ SPIRITUAL CORRUPTION COMPLETE",
    ">_ REALITY CORRUPTION FIELD ACTIVE",
    ">_ INFERNAL CONNECTION ESTABLISHED",
    ">_ DARK RITUAL INITIALIZING",
    ">_ EVIL TRANSMISSION INTERCEPTED",
    ">_ VOID ENTITIES MANIFESTING",
    ">_ NIGHTMARE PROTOCOL EXECUTED",
    ">_ BLOOD ALGORITHM OPTIMIZED"
  ];
  
  useEffect(() => {
    // Create a flicker effect
    const flicker = () => {
      if (accentRef.current) {
        const intensity = Math.random() * 0.5 + 0.5; // between 0.5 and 1
        accentRef.current.style.opacity = intensity.toString();
        
        // Random glitch effect
        if (Math.random() > 0.97) {
          accentRef.current.style.left = `${Math.random() * 2 - 1}px`;
          accentRef.current.style.top = `${Math.random() * 2 - 1}px`;
          
          setTimeout(() => {
            if (accentRef.current) {
              accentRef.current.style.left = '0';
              accentRef.current.style.top = '0';
            }
          }, 50);
        }
      }
    };
    
    const interval = setInterval(flicker, 100);
    
    // Random terminal appearances - more frequent now
    const terminalInterval = setInterval(() => {
      if (Math.random() > 0.65) {  // Increased frequency
        const randomMessage = terminalMessages[Math.floor(Math.random() * terminalMessages.length)];
        setTerminalText(randomMessage);
        setShowTerminal(true);
        
        // Hide terminal after a few seconds
        setTimeout(() => {
          setShowTerminal(false);
        }, 5000);  // Display for longer
      }
    }, 4000);  // Check more frequently
    
    // Scanline effect
    const scanlineInterval = setInterval(() => {
      setScanlineActive(prev => !prev);
    }, 5000);
    
    return () => {
      clearInterval(interval);
      clearInterval(terminalInterval);
      clearInterval(scanlineInterval);
    };
  }, []);
  
  // Typewriter effect for terminal
  useEffect(() => {
    if (showTerminal) {
      let i = 0;
      const txt = terminalText;
      const speed = 50;
      const terminalElement = document.getElementById('evil-terminal-text');
      
      if (terminalElement) {
        terminalElement.innerHTML = '';
        
        const typeWriter = () => {
          if (i < txt.length && terminalElement) {
            terminalElement.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        };
        
        typeWriter();
      }
    }
  }, [showTerminal, terminalText]);
  
  return (
    <div className="evil-accent-container fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Evil corner accents - with stronger red */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div ref={accentRef} className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-[#ff0043] shadow-[0_0_15px_#ff0043] opacity-80"></div>
      </div>
      
      {/* Top right corner - now red */}
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-[#ff0043] shadow-[0_0_15px_#ff0043] opacity-80 animate-pulse"></div>
      </div>
      
      {/* Bottom left corner - now red */}
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <div className="absolute bottom-0 left-0 w-full h-full border-b-2 border-l-2 border-[#ff0043] shadow-[0_0_15px_#ff0043] opacity-80 animate-pulse"></div>
      </div>
      
      {/* Bottom right corner - now red */}
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-[#ff0043] shadow-[0_0_15px_#ff0043] opacity-80 animate-pulse"></div>
      </div>
      
      {/* Additional diagonal red accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff0043] to-transparent opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-[#ff0043] to-transparent opacity-40"></div>
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#ff0043] to-transparent opacity-40"></div>
      <div className="absolute right-0 bottom-0 h-full w-1 bg-gradient-to-t from-[#ff0043] to-transparent opacity-40"></div>
      
      {/* Random corrupted data fragments - all red now */}
      <div className="absolute top-1/3 left-0 text-[10px] font-mono text-[#ff0043] opacity-90 animate-pulse">
        {">_ SYSTEM BREACH DETECTED"}
      </div>
      
      <div className="absolute top-2/3 right-0 text-[10px] font-mono text-[#ff0043] opacity-90 animate-pulse rotate-1">
        {">_ ENCRYPTED TRANSMISSION"}
      </div>
      
      <div className="absolute top-1/2 left-1/4 text-[10px] font-mono text-[#ff0043] opacity-90 transform rotate-90 animate-pulse">
        {">_ DATA CORRUPTION IMMINENT"}
      </div>
      
      <div className="absolute top-1/4 right-1/4 text-[10px] font-mono text-[#ff0043] opacity-90 transform -rotate-45 animate-pulse">
        {">_ EVIL PROTOCOL INITIATED"}
      </div>
      
      <div className="absolute bottom-1/4 left-1/3 text-[10px] font-mono text-[#ff0043] opacity-90 transform rotate-45 animate-pulse">
        {">_ SOUL EXTRACTION COMPLETE"}
      </div>
      
      <div className="absolute top-2/5 right-1/3 text-[10px] font-mono text-[#ff0043] opacity-90 animate-pulse">
        {">_ EVIL DOMAIN ACTIVATED"}
      </div>
      
      {/* Crosshair targeting elements - all red now */}
      <div className="absolute top-1/2 left-0 w-8 h-[1px] bg-[#ff0043] opacity-60"></div>
      <div className="absolute top-0 left-1/2 w-[1px] h-8 bg-[#ff0043] opacity-60"></div>
      <div className="absolute bottom-0 left-1/2 w-[1px] h-8 bg-[#ff0043] opacity-60"></div>
      <div className="absolute top-1/2 right-0 w-8 h-[1px] bg-[#ff0043] opacity-60"></div>
      
      {/* Additional targeting elements for more evil */}
      <div className="absolute top-1/3 left-1/3 w-6 h-6 border border-[#ff0043] opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-6 h-6 border border-[#ff0043] opacity-60 animate-pulse"></div>
      
      {/* Evil interface elements - red targets */}
      <div className="absolute top-1/4 left-1/2 w-10 h-10">
        <div className="absolute inset-0 border-2 border-[#ff0043] rounded-full opacity-30 animate-ping"></div>
        <div className="absolute inset-0 border border-[#ff0043] rounded-full opacity-60"></div>
        <div className="absolute inset-[30%] bg-[#ff0043] rounded-full opacity-40 animate-pulse"></div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 w-8 h-8">
        <div className="absolute inset-0 border-2 border-[#ff0043] rounded-full opacity-30 animate-ping"></div>
        <div className="absolute inset-0 border border-[#ff0043] rounded-full opacity-60"></div>
        <div className="absolute inset-[30%] bg-[#ff0043] rounded-full opacity-40 animate-pulse"></div>
      </div>
      
      {/* Evil red triangles */}
      <div className="absolute top-1/2 right-1/5 transform rotate-45">
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-[#ff0043] border-r-[10px] border-r-transparent opacity-50 animate-pulse"></div>
      </div>
      
      <div className="absolute bottom-1/3 left-1/5 transform -rotate-45">
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-[#ff0043] border-r-[10px] border-r-transparent opacity-50 animate-pulse"></div>
      </div>
      
      {/* Evil terminal overlay - now red */}
      {showTerminal && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 border-2 border-[#ff0043] p-3 shadow-[0_0_15px_#ff0043] min-w-[300px]">
          <div className="flex items-center justify-between mb-1">
            <div className="h-2 w-2 rounded-full bg-[#ff0043] animate-pulse"></div>
            <div className="text-[#ff0043] text-[8px] font-mono">EVIL CHANNEL: ACTIVATED</div>
            <div className="h-2 w-2 rounded-full bg-[#ff0043] animate-pulse"></div>
          </div>
          <div id="evil-terminal-text" className="text-[#ff0043] font-mono text-sm"></div>
          <div className="mt-1 h-px w-full bg-gradient-to-r from-transparent via-[#ff0043] to-transparent opacity-80"></div>
        </div>
      )}
      
      {/* Scanline effect */}
      {scanlineActive && (
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="scanline-effect animate-scanline"></div>
        </div>
      )}
      
      {/* Random digital noise */}
      <div className="absolute inset-0 opacity-5 mix-blend-screen pointer-events-none bg-noise"></div>
      
      {/* Evil domain accent - enhanced */}
      <div className="absolute bottom-5 right-5 font-mono text-[#ff0043] opacity-90">
        <div className="flex items-center bg-black bg-opacity-50 px-2 py-1 border-l-2 border-[#ff0043] shadow-[0_0_10px_#ff0043]">
          <div className="h-2 w-2 rounded-full bg-[#ff0043] mr-2 animate-pulse"></div>
          <span className="evil-domain text-[12px]">arnxv.evils.in</span>
          <div className="ml-2 h-2 w-2 rounded-full bg-[#ff0043] animate-pulse"></div>
        </div>
        <div className="mt-1 text-[8px] text-right pr-1">EVIL DOMAIN SECURED</div>
      </div>
    </div>
  );
};

export default EvilAccent;