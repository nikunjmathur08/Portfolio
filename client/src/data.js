// Centralized data for programmatic SEO and scalable pages
// Each project has a unique slug for dynamic routing

import signieImg from "./assets/images/signie.webp";
import notriskImg from "./assets/images/notrisk.webp";
import evincoImg from "./assets/images/evinco.webp";
import extractImg from "./assets/images/extract.webp";
import circuitsImg from "./assets/images/circuits.webp";

export const siteConfig = {
  name: "Nikunj Mathur",
  title: "Nikunj Mathur — Frontend Developer & Designer",
  description: "Frontend developer and designer based in New Delhi, India. Specializing in React, React Native, and creating digital experiences that inspire and connect.",
  url: "https://nikunjmathur.vercel.app",
  email: "nikunjmathur0810@gmail.com",
  social: {
    github: "https://github.com/nikunjmathur08",
    linkedin: "https://www.linkedin.com/in/nikunjmathur08/",
    twitter: "https://x.com/nikunjmathur08",
  },
};

export const projects = [
  {
    slug: "signie",
    name: "Signie - Gamified Sign Language Learning",
    shortName: "Signie",
    description: "A gamified sign language learning application built with React Native. Uses CNNs and MediaPipe Hands for real-time hand gesture recognition to teach sign language interactively.",
    type: "UI/UX Design • App Development",
    year: "2025",
    tools: ["React Native", "CNNs", "MediaPipe Hands"],
    image: signieImg,
    link: "https://github.com/nikunjmathur08/Signie",
    featured: true,
  },
  {
    slug: "not-risk",
    name: "(not)-RISK - Receipts Insurance Services Keeper",
    shortName: "(not)-RISK",
    description: "A SaaS platform for managing receipts, insurance documents, and service records. Built with the MERN stack for seamless document organization and retrieval.",
    type: "SaaS • Frontend Development",
    year: "2025",
    tools: ["MongoDB", "Express", "React", "TailwindCSS", "Node"],
    image: notriskImg,
    link: "https://not-risk.vercel.app",
    featured: true,
  },
  {
    slug: "evinco",
    name: "evinco - event-interact-connect",
    shortName: "Evinco",
    description: "A full-stack event management platform that enables users to create, discover, and interact with events. Features real-time updates and social connectivity.",
    type: "Web Design • Full Stack Development",
    year: "2024",
    tools: ["MongoDB", "Express", "React", "Node.js"],
    image: evincoImg,
    link: "https://github.com/nikunjmathur08/evinco",
    featured: true,
  },
  {
    slug: "smart-extractor",
    name: "Terminal Based Dynamic Web Scraper",
    shortName: "Smart Extractor",
    description: "A powerful terminal-based web scraping tool that leverages local AI models for intelligent data extraction. Supports dynamic content and provides structured output.",
    type: "Web Scraping • Local Models",
    year: "2025",
    tools: ["Python", "Ollama", "Crawl4Ai"],
    image: extractImg,
    link: "https://github.com/nikunjmathur08/Smart_Extractor",
    featured: true,
  },
  {
    slug: "circuit-creations",
    name: "Circuit Creations",
    shortName: "Circuit Creations",
    description: "An interactive digital logic design platform for SRMIST's DLD department. Enables students to create and simulate digital circuits in the browser.",
    type: "Frontend Development",
    year: "2025",
    tools: ["React", "TailwindCSS", "JavaScript"],
    image: circuitsImg,
    link: "https://dld.srmist.edu.in/eLogic/",
    featured: true,
  },
];

export const skills = {
  expertise: [
    "Full Stack Dev",
    "Web Design",
    "UI/UX Design",
    "App Development",
  ],
  tools: [
    "ReactJs",
    "ExpressJs",
    "JavaScript",
    "MongoDB",
    "NodeJs",
    "HTML/CSS",
    "Figma",
    "MediaPipe Hands",
    "React Native",
  ],
};
