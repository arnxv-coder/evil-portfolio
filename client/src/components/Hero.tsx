import { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Initialize GSAP animations
    if (typeof window.gsap !== 'undefined' && titleRef.current && subtitleRef.current) {
      const gsap = window.gsap;
      
      gsap.from(titleRef.current, {
        duration: 1.5,
        opacity: 0, 
        y: 30,
        ease: "power4.out"
      });
      
      const chars = subtitleRef.current.innerText.split('');
      subtitleRef.current.innerHTML = '';
      
      chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        subtitleRef.current?.appendChild(span);
        
        gsap.to(span, {
          opacity: 1,
          duration: 0.1,
          delay: 1.5 + (index * 0.05)
        });
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 relative">
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="glitch-hover" data-text="ARNAV BARWAY">
            <h1 
              ref={titleRef}
              className="text-5xl md:text-7xl font-orbitron font-bold tracking-wider text-white"
            >
              <span className="text-cyber-green">A</span>RNAV{' '}
              <span className="text-cyber-purple">B</span>ARWAY
            </h1>
          </div>
          
          <div className="typewriter max-w-md">
            <h2 
              ref={subtitleRef}
              className="text-xl md:text-3xl font-vt323"
            >
              <span className="text-cyber-green">&gt; </span>
              <span className="text-cyber-red">DARK WEB SORCERER</span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl max-w-lg mx-auto text-gray-400 font-vt323">
            Building digital experiences with code, coffee, and a touch of chaos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
            <button 
              onClick={() => scrollToSection('contact')}
              className="hire-me-btn w-full sm:w-auto"
            >
              <span>HIRE ME</span>
              <i className="fas fa-terminal ml-2"></i>
            </button>
            
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-transparent border-2 border-cyber-purple text-cyber-purple font-orbitron tracking-wider rounded hover:bg-cyber-purple hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              <span>MY WORK</span>
              <i className="fas fa-code ml-2"></i>
            </button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-cyber-green"
              aria-label="Scroll to About section"
            >
              <i className="fas fa-chevron-down text-3xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
