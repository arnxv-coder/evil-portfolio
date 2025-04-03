import { useEffect, useRef, useState } from 'react';

const EvilAccent = () => {
  const accentRef = useRef<HTMLDivElement>(null);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [scanlineActive, setScanlineActive] = useState(false);
  
  // Random evil terminal messages
  const terminalMessages = [
    ">_ INITIATING NEURAL SCAN",
    ">_ DATA BREACH IN PROGRESS",
    ">_ SECURITY PROTOCOLS BYPASSED",
    ">_ IDENTITY THEFT COMPLETE",
    ">_ SYSTEM COMPROMISED",
    ">_ NEURAL INTERFACE ACTIVATED",
    ">_ TRACING IP ADDRESS...",
    ">_ BIOMETRIC DATA COLLECTED",
    ">_ MALWARE INJECTION SUCCESSFUL",
    ">_ ENCRYPTION KEYS STOLEN"
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
    
    // Random terminal appearances
    const terminalInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        const randomMessage = terminalMessages[Math.floor(Math.random() * terminalMessages.length)];
        setTerminalText(randomMessage);
        setShowTerminal(true);
        
        // Hide terminal after a few seconds
        setTimeout(() => {
          setShowTerminal(false);
        }, 3000);
      }
    }, 8000);
    
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
      {/* Evil corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20">
        <div ref={accentRef} className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-[#ff0043] shadow-[0_0_10px_#ff0043] opacity-70"></div>
      </div>
      
      {/* Top right corner */}
      <div className="absolute top-0 right-0 w-20 h-20">
        <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-[#00a2ff] shadow-[0_0_10px_#00a2ff] opacity-70 animate-pulse"></div>
      </div>
      
      {/* Bottom left corner */}
      <div className="absolute bottom-0 left-0 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-full h-full border-b-2 border-l-2 border-[#b14aed] shadow-[0_0_10px_#b14aed] opacity-70 animate-pulse"></div>
      </div>
      
      {/* Bottom right corner */}
      <div className="absolute bottom-0 right-0 w-20 h-20">
        <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-[#00ff00] shadow-[0_0_10px_#00ff00] opacity-70 animate-pulse"></div>
      </div>
      
      {/* Random corrupted data fragments */}
      <div className="absolute top-1/3 left-0 text-[10px] font-mono text-[#ff0043] opacity-80 animate-pulse">
        {">_ SYSTEM BREACH DETECTED"}
      </div>
      
      <div className="absolute top-2/3 right-0 text-[10px] font-mono text-[#00ff00] opacity-80 animate-pulse rotate-1">
        {">_ ENCRYPTED TRANSMISSION"}
      </div>
      
      <div className="absolute top-1/2 left-1/4 text-[10px] font-mono text-[#b14aed] opacity-80 transform rotate-90 animate-pulse">
        {">_ DATA CORRUPTION IMMINENT"}
      </div>
      
      {/* Crosshair targeting elements */}
      <div className="absolute top-1/2 left-0 w-5 h-[1px] bg-[#ff0043] opacity-50"></div>
      <div className="absolute top-0 left-1/2 w-[1px] h-5 bg-[#00a2ff] opacity-50"></div>
      <div className="absolute bottom-0 left-1/2 w-[1px] h-5 bg-[#00ff00] opacity-50"></div>
      <div className="absolute top-1/2 right-0 w-5 h-[1px] bg-[#b14aed] opacity-50"></div>
      
      {/* Evil terminal overlay */}
      {showTerminal && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 border border-[#00ff00] p-3 shadow-[0_0_10px_#00ff00] min-w-[280px]">
          <div className="flex items-center justify-between mb-1">
            <div className="h-2 w-2 rounded-full bg-[#ff0043] animate-pulse"></div>
            <div className="text-[#00ff00] text-[8px] font-mono">SECURE CHANNEL: ACTIVATED</div>
            <div className="h-2 w-2 rounded-full bg-[#00ff00] animate-pulse"></div>
          </div>
          <div id="evil-terminal-text" className="text-[#00ff00] font-mono text-sm"></div>
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
    </div>
  );
};

export default EvilAccent;