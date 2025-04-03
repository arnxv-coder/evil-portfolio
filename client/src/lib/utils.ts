import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function typewriterEffect(element: HTMLElement, text: string, speed: number = 50) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  codeLink: string;
  demoLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'CyberShield',
    category: 'Security Framework',
    description: 'An advanced intrusion detection system with real-time monitoring and AI-powered threat analysis.',
    technologies: ['Python', 'TensorFlow', 'Docker'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    codeLink: 'https://github.com/',
    demoLink: '#'
  },
  {
    id: 2,
    title: 'NeuroLink',
    category: 'AI Communication Platform',
    description: 'A secure messaging platform with end-to-end encryption and neural network-powered sentiment analysis.',
    technologies: ['React', 'Node.js', 'WebRTC'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    codeLink: 'https://github.com/',
    demoLink: '#'
  },
  {
    id: 3,
    title: 'Quantum Vault',
    category: 'Decentralized Storage',
    description: 'A blockchain-based secure storage solution with quantum-resistant encryption algorithms.',
    technologies: ['Solidity', 'Web3.js', 'IPFS'],
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    codeLink: 'https://github.com/',
    demoLink: '#'
  }
];

export const skills = [
  { name: 'JavaScript', percentage: 90, color: '#00ff00' },
  { name: 'Python', percentage: 85, color: '#b14aed' },
  { name: 'React', percentage: 80, color: '#ff0043' },
  { name: 'Node.js', percentage: 75, color: '#0ef' },
  { name: 'Cybersecurity', percentage: 95, color: '#00ff00' }
];

export const specializedSkills = [
  { name: 'Penetration Testing', icon: 'fa-shield-alt', color: 'cyber-purple', hoverColor: 'cyber-green' },
  { name: 'Cryptography', icon: 'fa-terminal', color: 'cyber-green', hoverColor: 'cyber-purple' },
  { name: 'Exploit Development', icon: 'fa-bug', color: 'cyber-red', hoverColor: 'cyber-green' },
  { name: 'System Architecture', icon: 'fa-laptop-code', color: 'cyber-blue', hoverColor: 'cyber-red' }
];

export const tools = [
  { name: 'Docker', color: 'cyber-green' },
  { name: 'Kubernetes', color: 'cyber-purple' },
  { name: 'Metasploit', color: 'cyber-red' },
  { name: 'Burp Suite', color: 'cyber-blue' },
  { name: 'Wireshark', color: 'cyber-green' },
  { name: 'AWS', color: 'cyber-purple' },
  { name: 'GraphQL', color: 'cyber-red' },
  { name: 'TensorFlow', color: 'cyber-blue' }
];
