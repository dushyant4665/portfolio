export const featuredWork = [
  {
    id: '01',
    title: 'Marcus Aurelius',
    quote: 'A calm interface is not empty. It is disciplined enough to leave only what matters.',
    note: 'Products earn trust when they remove noise before they add motion.',
    image: '/hover/marcusarelius.webp',
    href: '#projects',
    cta: 'See the work',
  },
  {
    id: '02',
    title: 'Aristotle',
    quote: 'Excellence in product is not decoration repeated, but clarity practiced until friction disappears.',
    note: 'Readable systems stay useful longer than loud ones.',
    image: '/hover/aristrotle.jpg',
    href: '#about',
    cta: 'How I build',
  },
  {
    id: '03',
    title: 'Achilles',
    quote: 'What lasts in production is not hype, but the strength to stay sharp under real pressure.',
    note: 'Speed matters most when the structure underneath can carry it.',
    image: '/hover/achilles.jpg',
    href: '#contact',
    cta: 'Start a project',
  },
]

export const labProjects = [
   {
    id: '02',
    title: 'Self-Evolving Codebase',
    summary:
      'An AI-powered GitHub code evolution platform that scans repositories, generates structured improvements, logs history, and opens pull requests automatically.',
    highlight: 'AI code evolution platform',
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'Octokit', 'Gemini'],
    media: '/projectcontent/selfevolvingcodebaseimage.mp4',
    links: [
      {
        label: 'Live',
        href: 'https://self-evolving-codebase.vercel.app/',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/dushyant4665/self-Evolving-Codebase',
      },
    ],
  },
  {
    id: '01',
    title: 'TeamPulse',
    summary:
      'Full-stack SaaS platform for real-time team collaboration with workspace management, live chat, collaborative document editing, task boards, and integrated Stripe subscription billing.',
    highlight: 'SaaS Platform with Real-Time Collab',
    stack: ['React 18', 'Node.js', 'Socket.io', 'MongoDB', 'Stripe', 'Firebase'],
    media: '/projectcontent/teampulse.png',
    links: [
      {
        label: 'Live Demo',
        href: 'https://teampulsee.vercel.app',
      },
      {
        label: 'GitHub',
        href: '#contact',
      },
    ],
  },
 
  {
    id: '03',
    title: 'AI Chat Interface',
    summary: 'Streaming interface with memory-aware responses, command execution, and clean interaction states.',
    highlight: 'Fast response UX',
    stack: ['React', 'State Machines', 'Tooling'],
    media: '/hover/achilles.jpg',
    links: [
      {
        label: 'Discuss',
        href: '#contact',
      },
    ],
  },
  {
    id: '04',
    title: 'Automation Suite',
    summary: 'A control layer for recurring workflows, retries, and operator visibility across internal tasks.',
    highlight: 'Operational clarity',
    stack: ['Node.js', 'Queues', 'Integrations'],
    media: '/hover/marcusarelius.webp',
    links: [
      {
        label: 'Plan system',
        href: '#contact',
      },
    ],
  },
  {
    id: '05',
    title: 'Gambit',
    summary:
      'Real-time multiplayer chess game with room codes, WebSocket sync, and AI bots (Michael Tal & Bobby Fischer) powered by LLM + Stockfish. Create room, share code, play instantly.',
    highlight: 'Real-time Multiplayer Chess',
    stack: ['Next.js 14', 'TypeScript', 'Socket.IO', 'Supabase', 'Chess Engine', 'AI Bots'],
    media: '/projectcontent/gambit.png',
    links: [
      {
        label: 'Live Demo',
        href: 'https://gambitt.vercel.app',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/dushyant4665/gambit',
      },
    ],
  },
  {
    id: '06',
    title: '3D Earth Visualization',
    summary:
      'A real-time, data-driven Earth with dynamic clouds, atmospheric lighting, and animated global arcs. Built with Three.js for performance, clarity, and immersion. WebGL meets purpose.',
    highlight: 'Interactive 3D WebGL Globe',
    stack: ['Three.js', 'WebGL', 'GSAP', 'Vite', 'Real-time Rendering'],
    media: '/projectcontent/earthvisualization.mp4',
    links: [
      {
        label: 'Live Demo',
        href: 'https://earth-visualization.vercel.app',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/dushyant4665/earth-visualization',
      },
    ],
  },
]

export const capabilityGroups = [
  {
    title: 'Build',
    items: ['SaaS platforms & dashboards', 'Real-time collaboration tools', '3D web experiences & WebGL'],
  },
  {
    title: 'Engineer',
    items: ['React/Next.js + Node.js full-stack', 'WebSocket real-time systems', 'Three.js & 3D visualization'],
  },
  {
    title: 'Scale',
    items: ['Stripe payments & subscriptions', 'LLM workflows & AI agents', 'Production deployment'],
  },
]

export const proofPoints = [
  { value: 'Full-Stack SaaS', label: 'TeamPulse: Real-time collaboration platform with payments' },
  { value: '3+ Years', label: 'Building production web, AI, and SaaS systems' },
  { value: 'End-to-End', label: 'Concept, interface, backend, deployment & support' },
]

export const contactLinks = [
  {
    label: 'Email',
    value: 'dushyantkhandelwal4665@gmail.com',
    href: 'mailto:dushyantkhandelwal4665@gmail.com',
  },
  {
    label: 'Work',
    value: 'Selected projects',
    href: '#work',
  },
  {
    label: 'Projects',
    value: 'Experimental builds',
    href: '#projects',
  },
]
