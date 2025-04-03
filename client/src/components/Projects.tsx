import { useEffect, useRef } from 'react';
import { projects } from '@/lib/utils';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && typeof window.gsap !== 'undefined') {
            const gsap = window.gsap;
            
            projectRefs.current.forEach((el, index) => {
              if (el) {
                gsap.from(el, {
                  duration: 0.8,
                  opacity: 0,
                  y: 30,
                  delay: 0.2 + (index * 0.1),
                  ease: "power3.out"
                });
              }
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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
    <section id="projects" ref={sectionRef} className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-heading">
            <span className="text-cyber-red">&lt;</span>
            <span>PROJECTS</span>
            <span className="text-cyber-red">/&gt;</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={(el) => { projectRefs.current[index] = el; }}
              className={`glassmorphism rounded-lg overflow-hidden group hover:border-cyber-${index === 0 ? 'green' : index === 1 ? 'purple' : 'red'} transition-colors duration-300`}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={`${project.title} Project`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-orbitron text-xl text-white">{project.title}</h3>
                  <p className={`font-vt323 text-cyber-${index === 0 ? 'green' : index === 1 ? 'purple' : 'red'}`}>{project.category}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="font-vt323 text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`bg-cyber-darkgray px-2 py-1 rounded text-xs font-vt323 text-cyber-${techIndex === 0 ? 'green' : techIndex === 1 ? 'purple' : 'red'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-orbitron text-sm text-cyber-green hover:text-white transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-code"></i> View Code
                  </a>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-orbitron text-sm text-cyber-purple hover:text-white transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-transparent border-2 border-cyber-blue text-cyber-blue font-orbitron tracking-wider rounded hover:bg-cyber-blue hover:bg-opacity-20 transition-all duration-300"
          >
            VIEW ALL PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
