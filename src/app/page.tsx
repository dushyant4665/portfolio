"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFilePdf, FaEnvelope, FaExternalLinkAlt, FaRocket } from "react-icons/fa";
import type { ReactNode } from "react";
import { FaX } from "react-icons/fa6";

const NAME = "Dushyant Khandelwal";
const EMAIL = "dushyantkhandelwal4665@gmail.com";
const SOCIALS = [
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/dushyant-khandelwal-516319221", label: "LinkedIn" },
  { icon: <FaGithub />, href: "https://github.com/dushyant4665", label: "GitHub" },
  // { icon: <FaFilePdf />, href: "/resume.pdf", label: "Resume" },
  { icon: <FaTwitter />, href: "https://x.com/dushyant4665", label: "Twitter" },
];
const CONTACTS = [
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/dushyant-khandelwal-516319221" },
  { icon: <FaTwitter />, label: "Twitter", href: "https://twitter.com/" },
  { icon: <FaEnvelope />, label: "Email", href: `mailto:${EMAIL}` },
];
const SKILLS = [
  "TypeScript", "Next.js", "React", "Node.js", "WebGL", "Three.js", "GraphQL", "WebSockets", "Docker", "CI/CD", "AWS", "GCP", "Distributed Systems", "AI/ML", "Security", "Cloud", "Microservices",
  "PostgreSQL", "MongoDB", "Supabase", "Firebase", "Redis", "Kafka", "RabbitMQ", "Elasticsearch", "Prisma", "NextAuth", "Zod", "TailwindCSS", "Postman", "VS Code"
];
const PROJECTS = [
  {
    name: "CRISP Shopping",
    desc: "E-commerce. Stripe. Real-time. Scalable infra.",
    tech: ['MERN', 'React', 'Node.js', 'MongoDB', 'Stripe', 'Firebase'],
    github: "https://github.com/dushyant4665/crispShopping-ecomp-mern",
    live: "https://crisp-shopping.vercel.app/",
  },
  {
    name: "CRISP GPT Chrome Extension",
    desc: "AI Chrome extension. Mistral LLM, Secure.",
    tech: ['Chrome Ext', 'Mistral AI', 'Express', 'Node.js', 'MongoDB'],
    github: "https://github.com/dushyant4665/CRISP_GPT_chrome_extension",
    live: "https://chrome.google.com/webstore/detail/crisp-gpt/",
  },
  {
    name: "Earth Visualization Globe",
    desc: "3D Earth. Real-time. Three.js. WebGL.",
    tech: ['Three.js', 'WebGL', 'Vite', 'React', 'Textures'],
    github: "https://github.com/dushyant4665/earth-visualization",
    live: "https://earth-visualization.vercel.app/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans flex flex-col items-center px-2 sm:px-4 md:px-8 relative overflow-hidden">
      {/* Background SVG mesh/gradient */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <radialGradient id="bg1" cx="50%" cy="50%" r="80%" fx="50%" fy="50%" gradientTransform="rotate(45)">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.95" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#bg1)" />
          <circle cx="1200" cy="200" r="300" fill="#6366f1" fillOpacity="0.08" />
          <circle cx="300" cy="700" r="200" fill="#a855f7" fillOpacity="0.07" />
        </svg>
      </div>
      {/* Hero */}
      <motion.section 
        className="w-full max-w-2xl mt-16 sm:mt-20 mb-8 sm:mb-12 text-center px-2 sm:px-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold mb-2 tracking-tight bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#a855f7] bg-clip-text text-transparent animate-gradient-x"
          style={{ fontFamily: "var(--font-heading)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {NAME}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-2xl mb-4 text-gray-300 font-bold font-mono"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Full Stack-Dev I build fast, secure, scalable systems.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {SOCIALS.map((s) => (
            <SocialLink key={s.label} {...s} />
          ))}
        </motion.div>
        <motion.div
          className="mt-2 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-lg sm:text-xl font-bold text-[#a5b4fc] select-all">{EMAIL}</span>
        </motion.div>
      </motion.section>

      {/* Skills */}
      <motion.section
        className="w-full max-w-2xl mb-8 sm:mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-lg sm:text-xl font-bold mb-3 text-center" style={{ fontFamily: "var(--font-heading)" }}>Skills</h2>
        <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5">
          {SKILLS.map((skill, i) => (
            <motion.span
              key={skill}
              className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#18181b] rounded-lg text-xs sm:text-sm font-medium border border-[#23234a] text-[#a5b4fc] shadow-xs hover:shadow-md transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        className="w-full max-w-2xl mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-lg sm:text-xl font-bold mb-3 text-center" style={{ fontFamily: "var(--font-heading)" }}>Projects</h2>
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 hide-scrollbar">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.name}
              className="min-w-[90vw] max-w-xs sm:min-w-[320px] sm:max-w-xs bg-[#18181b] rounded-2xl p-4 sm:p-5 border-2 border-transparent bg-clip-padding relative flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-gradient-to-r hover:from-[#6366f1] hover:to-[#a855f7] transition-all duration-300 group"
              style={{ boxShadow: '0 4px 32px 0 rgba(99,102,241,0.10)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5, type: 'spring' }}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base sm:text-lg font-bold text-[#a5b4fc] group-hover:text-[#6366f1] transition-colors">{p.name}</span>
                </div>
                <div className="text-gray-300 text-xs sm:text-sm mb-2">{p.desc}</div>
                <div className="flex flex-wrap gap-1 mt-auto mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-[#23234a] text-[#a5b4fc] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#23234a] text-[#a5b4fc] font-bold text-xs sm:text-sm hover:bg-[#6366f1] hover:text-white transition-colors shadow-md">
                  <FaGithub className="text-base sm:text-lg" /> GitHub
                </a>
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-bold text-xs sm:text-sm hover:from-[#a855f7] hover:to-[#6366f1] transition-colors shadow-md">
                  <FaExternalLinkAlt className="text-base sm:text-lg" /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        className="w-full max-w-2xl mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-lg sm:text-xl font-bold mb-3 text-center" style={{ fontFamily: "var(--font-heading)" }}>Contact</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {CONTACTS.map((c) => (
            <ContactButton key={c.label} {...c} />
          ))}
        </div>
      </motion.section>
    </main>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
  delay?: number;
  className?: string;
}
const Section = ({ title, children, delay = 0, className = '' }: SectionProps) => (
  <motion.section
    className={`w-full max-w-2xl ${className}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
  >
    <motion.h2 
      className="text-xl font-bold mb-8 text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#6366f1] after:to-transparent"
      style={{ fontFamily: "var(--font-heading)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay + 0.1 }}
    >
      {title}
    </motion.h2>
    {children}
  </motion.section>
);

interface SocialLinkProps {
  icon: ReactNode;
  href: string;
  label: string;
}
const SocialLink = ({ icon, href, label }: SocialLinkProps) => (
  <motion.a 
    href={href}
    className="w-10 h-10 rounded-full bg-[#18181b] flex items-center justify-center text-[#a5b4fc] hover:text-[#6366f1] hover:shadow-md transition-all border border-[#23234a]"
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3 }}
  >
    {icon}
  </motion.a>
);

interface ContactButtonProps {
  icon: ReactNode;
  label: string;
  href: string;
}
const ContactButton = ({ icon, label, href }: ContactButtonProps) => (
  <motion.a
    href={href}
    className="flex items-center gap-3 px-5 py-2.5 rounded-lg bg-[#18181b] border border-[#23234a] hover:border-[#6366f1] hover:text-[#6366f1] text-[#a5b4fc] font-semibold transition-colors shadow-md"
    style={{ fontFamily: "var(--font-body)" }}
    whileHover={{ y: -3 }}
    target="_blank"
    rel="noopener noreferrer"
    download={label === "Download Resume"}
  >
    {icon}
    <span>{label}</span>
  </motion.a>
);

// .hide-scrollbar::-webkit-scrollbar { display: none; }
// .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
