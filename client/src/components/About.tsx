import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const codeBlockRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate code block
            if (codeBlockRef.current && typeof window.gsap !== 'undefined') {
              const gsap = window.gsap;
              gsap.from(codeBlockRef.current, {
                duration: 1,
                opacity: 0,
                y: 20,
                ease: "power3.out"
              });
            }
            
            // Animate left column
            if (leftColRef.current && typeof window.gsap !== 'undefined') {
              const gsap = window.gsap;
              gsap.from(leftColRef.current, {
                duration: 1,
                opacity: 0,
                x: -30,
                delay: 0.3,
                ease: "power3.out"
              });
            }
            
            // Animate right columns with staggered delay
            if (rightColsRef.current.length && typeof window.gsap !== 'undefined') {
              const gsap = window.gsap;
              rightColsRef.current.forEach((el, index) => {
                if (el) {
                  gsap.from(el, {
                    duration: 0.8,
                    opacity: 0,
                    x: 30,
                    delay: 0.5 + (index * 0.2),
                    ease: "power3.out"
                  });
                }
              });
            }
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-heading">
            <span className="text-cyber-green">&lt;</span>
            <span>ABOUT_ME</span>
            <span className="text-cyber-green">/&gt;</span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div ref={leftColRef} className="w-full md:w-1/2 glassmorphism rounded-lg p-6 transform transition-transform duration-500 hover:scale-105">
            <div ref={codeBlockRef} className="bg-cyber-darkgray p-3 rounded-lg mb-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-cyber-red mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-cyber-green mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-cyber-purple"></div>
              </div>
              <pre className="text-cyber-green font-vt323 text-lg whitespace-pre-wrap">
<span className="text-cyber-purple">class</span> <span className="text-cyber-red">Developer</span> {'{'}
  constructor() {'{'}
    <span className="text-cyber-green">this</span>.name = <span className="text-white">"Arnav Barway"</span>;
    <span className="text-cyber-green">this</span>.role = <span className="text-white">"Dark Web Sorcerer"</span>;
    <span className="text-cyber-green">this</span>.languages = [<span className="text-white">"JavaScript", "Python", "C++"</span>];
    <span className="text-cyber-green">this</span>.passions = [<span className="text-white">"Web Development", "Cybersecurity", "UI/UX"</span>];
  {'}'}
{'}'}</pre>
            </div>
            
            <p className="text-gray-300 font-vt323 text-lg glitch-hover mb-4" data-text="I am a cybersecurity specialist and full-stack developer with a passion for creating secure, immersive digital experiences.">
              I am a cybersecurity specialist and full-stack developer with a passion for creating secure, immersive digital experiences.
            </p>
            
            <p className="text-gray-300 font-vt323 text-lg glitch-hover" data-text="With over 5 years of experience in the dark corners of the web, I specialize in building cutting-edge applications that are both beautiful and unhackable.">
              With over 5 years of experience in the dark corners of the web, I specialize in building cutting-edge applications that are both beautiful and unhackable.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <div 
              ref={(el) => { rightColsRef.current[0] = el; }}
              className="glassmorphism rounded-lg p-6 border-l-4 border-cyber-green"
            >
              <h3 className="font-orbitron text-cyber-green text-xl mb-2">MISSION</h3>
              <p className="text-gray-300 font-vt323 text-lg">To create digital experiences that combine functionality with cyberpunk aesthetics, pushing the boundaries of web development.</p>
            </div>
            
            <div 
              ref={(el) => { rightColsRef.current[1] = el; }}
              className="glassmorphism rounded-lg p-6 border-l-4 border-cyber-purple"
            >
              <h3 className="font-orbitron text-cyber-purple text-xl mb-2">APPROACH</h3>
              <p className="text-gray-300 font-vt323 text-lg">I blend cutting-edge technologies with avant-garde design principles to create websites that feel like they've been ripped from a dystopian future.</p>
            </div>
            
            <div 
              ref={(el) => { rightColsRef.current[2] = el; }}
              className="glassmorphism rounded-lg p-6 border-l-4 border-cyber-red"
            >
              <h3 className="font-orbitron text-cyber-red text-xl mb-2">VALUES</h3>
              <p className="text-gray-300 font-vt323 text-lg">Security. Innovation. Aesthetics. Performance. These four pillars guide every line of code I write.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
