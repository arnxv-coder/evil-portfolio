import { useEffect, useRef, useState } from 'react';
import { skills, specializedSkills, tools } from '@/lib/utils';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  useEffect(() => {
    if (isVisible && typeof window.gsap !== 'undefined') {
      const gsap = window.gsap;
      
      skillBarsRef.current.forEach((el, index) => {
        if (el) {
          // Animate the width of the progress bar
          gsap.fromTo(
            el,
            { width: '0%' },
            { 
              width: `${skills[index].percentage}%`, 
              duration: 1.5, 
              delay: 0.2 + (index * 0.1),
              ease: "power2.out"
            }
          );
        }
      });
    }
  }, [isVisible]);

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-heading">
            <span className="text-cyber-purple">&lt;</span>
            <span>SKILLS</span>
            <span className="text-cyber-purple">/&gt;</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glassmorphism rounded-lg p-6">
            <h3 className="font-orbitron text-xl mb-6 text-cyber-green">TECHNICAL SKILLS</h3>
            
            {skills.map((skill, index) => (
              <div key={skill.name} className="mb-6 last:mb-0">
                <div className="flex justify-between mb-2">
                  <span className="font-vt323 text-lg">{skill.name}</span>
                  <span className="font-vt323 text-lg" style={{ color: skill.color }}>{skill.percentage}%</span>
                </div>
                <div className="skill-progress">
                  <div 
                    ref={(el) => { skillBarsRef.current[index] = el; }}
                    className="skill-progress-bar"
                    style={{ 
                      backgroundColor: skill.color,
                      width: isVisible ? `${skill.percentage}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="glassmorphism rounded-lg p-6">
            <h3 className="font-orbitron text-xl mb-6 text-cyber-purple">SPECIALIZED SKILLS</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {specializedSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="bg-cyber-darkgray p-4 rounded-lg text-center hover:bg-cyber-gray transition-colors group"
                >
                  <i className={`fas ${skill.icon} text-4xl mb-4 text-${skill.color} group-hover:text-${skill.hoverColor} transition-colors`}></i>
                  <h4 className="font-orbitron text-lg">{skill.name}</h4>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-cyber-darkgray p-4 rounded-lg">
              <h4 className="font-orbitron text-lg mb-3 text-cyber-red">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span 
                    key={tool.name}
                    className={`bg-cyber-gray px-3 py-1 rounded-full font-vt323 text-${tool.color}`}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
