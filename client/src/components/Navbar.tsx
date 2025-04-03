import { useState, useEffect } from 'react';
import { Link } from 'wouter';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollTo = (id: string) => {
    closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-black bg-opacity-80 backdrop-blur-md border-b border-cyber-green border-opacity-30' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-xl font-orbitron font-bold tracking-wider"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="text-cyber-green">&lt;</span>
            <span>AB</span>
            <span className="text-cyber-green">/&gt;</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="font-orbitron tracking-wide hover:text-cyber-green transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
            >
              ABOUT
            </a>
            <a 
              href="#skills" 
              className="font-orbitron tracking-wide hover:text-cyber-purple transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('skills');
              }}
            >
              SKILLS
            </a>
            <a 
              href="#projects" 
              className="font-orbitron tracking-wide hover:text-cyber-red transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('projects');
              }}
            >
              PROJECTS
            </a>
            <a 
              href="#contact" 
              className="font-orbitron tracking-wide hover:text-cyber-blue transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
            >
              CONTACT
            </a>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-cyber-green text-2xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
          <div className="flex flex-col space-y-4 mt-4 pb-4">
            <a 
              href="#about" 
              className="font-orbitron tracking-wide hover:text-cyber-green transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
            >
              ABOUT
            </a>
            <a 
              href="#skills" 
              className="font-orbitron tracking-wide hover:text-cyber-purple transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('skills');
              }}
            >
              SKILLS
            </a>
            <a 
              href="#projects" 
              className="font-orbitron tracking-wide hover:text-cyber-red transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('projects');
              }}
            >
              PROJECTS
            </a>
            <a 
              href="#contact" 
              className="font-orbitron tracking-wide hover:text-cyber-blue transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
