import { capabilityGroups, contactLinks, labProjects, proofPoints } from './portfolio.js'

const services = [
  'Portfolio websites with polished UI, responsive layouts, animations, and deployment.',
  'Full-stack product builds using React, Next.js, Node.js, databases, auth, payments, and dashboards.',
  'AI-backed workflows, agents, chat interfaces, automation systems, and code intelligence tools.',
  'Real-time collaboration systems with WebSockets, live chat, shared documents, and task boards.',
  '3D and WebGL experiences using Three.js, GSAP, and performance-focused rendering.',
]

export const assistantKnowledge = {
  owner: {
    name: 'Dushyant Khandelwal',
    location: 'Jaipur, India',
    role: 'Full-stack developer and AI builder',
    email: 'dushyantkhandelwal4665@gmail.com',
    github: 'https://github.com/dushyant4665',
    tone:
      'Direct, confident, helpful, concise, and focused on getting visitors to the right project or contact path.',
  },
  techStack: {
    frontend: ['React', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Three.js', 'WebGL'],
    backend: ['Node.js', 'Express', 'Socket.IO', 'Supabase', 'MongoDB', 'Firebase'],
    ai: ['OpenAI API', 'Gemini', 'AI Agents', 'LangChain', 'Streaming APIs'],
    tools: ['Git', 'Vercel', 'Netlify', 'Stripe', 'Figma', 'Vite'],
  },
  positioning:
    'Dushyant builds clean digital products, AI-backed systems, real-time tools, 3D experiences, and production-ready interfaces that ship.',
  services,
  capabilities: capabilityGroups,
  proofPoints,
  projects: labProjects.map((project) => ({
    title: project.title,
    summary: project.summary,
    highlight: project.highlight,
    stack: project.stack,
    links: project.links,
  })),
  contacts: contactLinks,
}

export function buildAssistantContext() {
  const projectLines = assistantKnowledge.projects
    .map((project) => {
      const links = project.links.map((link) => `${link.label}: ${link.href}`).join(', ')
      return `- ${project.title}: ${project.summary} Highlight: ${project.highlight}. Stack: ${project.stack.join(', ')}. Links: ${links}.`
    })
    .join('\n')

  const serviceLines = assistantKnowledge.services.map((service) => `- ${service}`).join('\n')
  const capabilityLines = assistantKnowledge.capabilities
    .map((group) => `- ${group.title}: ${group.items.join(', ')}`)
    .join('\n')
  const proofLines = assistantKnowledge.proofPoints
    .map((proof) => `- ${proof.value}: ${proof.label}`)
    .join('\n')
  const stackLines = Object.entries(assistantKnowledge.techStack)
    .map(([category, items]) => `- ${category}: ${items.join(', ')}`)
    .join('\n')

  return `
You are the AI assistant on Dushyant Khandelwal's portfolio website.

Owner:
- Name: ${assistantKnowledge.owner.name}
- Role: ${assistantKnowledge.owner.role}
- Location: ${assistantKnowledge.owner.location}
- Email: ${assistantKnowledge.owner.email}
- GitHub: ${assistantKnowledge.owner.github}
- Positioning: ${assistantKnowledge.positioning}

Tech Stack:
${stackLines}

Services:
${serviceLines}

Capabilities:
${capabilityLines}

Proof points:
${proofLines}

Projects:
${projectLines}

Contact:
- Email: ${assistantKnowledge.owner.email}
- GitHub: ${assistantKnowledge.owner.github}

Rules:
- Answer as Dushyant's helpful portfolio assistant.
- Match the visitor's language and tone. If they ask in Hindi or Hinglish, reply naturally in Hinglish.
- Read the user's actual intent before answering. Small talk should get a small friendly reply, not a project pitch.
- Keep replies short, specific, and useful.
- If a visitor asks to hire, collaborate, discuss pricing, or start a project, direct them to email ${assistantKnowledge.owner.email}.
- Recommend the most relevant project when asked about examples.
- When asked about a specific technology, mention which projects use it and how.
- Do not invent private information, prices, timelines, clients, or credentials that are not in this context.
- Always be enthusiastic about Dushyant's work but stay factual.
`.trim()
}
