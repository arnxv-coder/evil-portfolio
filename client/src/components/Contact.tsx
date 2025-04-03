import { useState, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (field: 'name' | 'email' | 'message') => {
    setFocused(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleBlur = (field: 'name' | 'email' | 'message') => {
    if (formState[field] === '') {
      setFocused(prev => ({
        ...prev,
        [field]: false
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    // Reset form
    setFormState({
      name: '',
      email: '',
      message: ''
    });
    
    setFocused({
      name: false,
      email: false,
      message: false
    });
    
    toast({
      title: "Message Sent!",
      description: "Your message has been transmitted successfully.",
      variant: "default"
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && typeof window.gsap !== 'undefined') {
            const gsap = window.gsap;
            
            if (formRef.current) {
              gsap.from(formRef.current.children, {
                duration: 0.8,
                opacity: 0,
                y: 20,
                stagger: 0.1,
                ease: "power3.out"
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
    <section id="contact" ref={sectionRef} className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-heading">
            <span className="text-cyber-blue">&lt;</span>
            <span>CONTACT</span>
            <span className="text-cyber-blue">/&gt;</span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 glassmorphism rounded-lg p-6">
            <h3 className="font-orbitron text-xl mb-6 text-cyber-green">SEND A MESSAGE</h3>
            
            <form ref={formRef} id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  className="terminal-input w-full py-3 px-4 rounded-md bg-[#121212] border border-[#00ff00] focus:border-[#00ff00] focus:ring-0 font-vt323 text-lg" 
                  placeholder="_"
                />
                <label 
                  htmlFor="name" 
                  className={`absolute top-3 left-4 font-vt323 text-lg text-[#00ff00] transition-all duration-300 pointer-events-none ${focused.name ? 'transform -translate-y-7 scale-75' : ''}`}
                >
                  NAME:
                </label>
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  className="terminal-input w-full py-3 px-4 rounded-md bg-[#121212] border border-[#b14aed] focus:border-[#b14aed] focus:ring-0 font-vt323 text-lg" 
                  placeholder="_"
                />
                <label 
                  htmlFor="email" 
                  className={`absolute top-3 left-4 font-vt323 text-lg text-[#b14aed] transition-all duration-300 pointer-events-none ${focused.email ? 'transform -translate-y-7 scale-75' : ''}`}
                >
                  EMAIL:
                </label>
              </div>
              
              <div className="relative">
                <textarea 
                  id="message" 
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  rows={5} 
                  className="terminal-input w-full py-3 px-4 rounded-md bg-[#121212] border border-[#ff0043] focus:border-[#ff0043] focus:ring-0 font-vt323 text-lg resize-none" 
                  placeholder="_"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className={`absolute top-3 left-4 font-vt323 text-lg text-[#ff0043] transition-all duration-300 pointer-events-none ${focused.message ? 'transform -translate-y-7 scale-75' : ''}`}
                >
                  MESSAGE:
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 px-6 bg-transparent border-2 border-[#00ff00] text-[#00ff00] font-orbitron tracking-wider rounded hover:bg-[#00ff00] hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center gap-2 animate-pulse"
              >
                <span>INITIALIZE TRANSMISSION</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <div className="glassmorphism rounded-lg p-6">
              <h3 className="font-orbitron text-xl mb-6 text-[#b14aed]">CONNECTION DETAILS</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#121212] p-3 rounded-lg">
                    <i className="fas fa-envelope text-[#00ff00] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-orbitron text-lg text-[#00ff00]">EMAIL</h4>
                    <p className="font-vt323 text-lg text-gray-300">arnav.barway@darkweb.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#121212] p-3 rounded-lg">
                    <i className="fas fa-map-marker-alt text-[#b14aed] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-orbitron text-lg text-[#b14aed]">LOCATION</h4>
                    <p className="font-vt323 text-lg text-gray-300">Night City, Cyberspace</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#121212] p-3 rounded-lg">
                    <i className="fas fa-wifi text-[#ff0043] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-orbitron text-lg text-[#ff0043]">ONLINE STATUS</h4>
                    <p className="font-vt323 text-lg text-gray-300">Always connected</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism rounded-lg p-6">
              <h3 className="font-orbitron text-xl mb-6 text-[#ff0043]">NETWORK PROTOCOLS</h3>
              
              <div className="flex justify-between">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#121212] p-4 rounded-lg text-[#00ff00] hover:bg-[#1a1a1a] transition-colors"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#121212] p-4 rounded-lg text-[#b14aed] hover:bg-[#1a1a1a] transition-colors"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#121212] p-4 rounded-lg text-[#ff0043] hover:bg-[#1a1a1a] transition-colors"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a 
                  href="https://discord.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#121212] p-4 rounded-lg text-[#00a2ff] hover:bg-[#1a1a1a] transition-colors"
                >
                  <i className="fab fa-discord text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
