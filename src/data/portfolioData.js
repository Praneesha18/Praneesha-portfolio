export const links = {
  github: 'https://github.com/Praneesha18',
  linkedin: 'https://www.linkedin.com/in/praneesha-bheemarasetty-7815523a1/',
  email: 'pranesha182004@gmail.com',
  phone: '+91 9392356950',
  resume: '/resume/PraneeshaResumeUpdated.pdf'
}

export const skills = [
  ['Languages', 'Java, Python, JavaScript, TypeScript, SQL, C'],
  ['Backend & Web', 'Spring Boot, Angular, React.js, Node.js, Express.js, FastAPI, Next.js, HTML5, CSS3, REST APIs'],
  ['AI & Agents', 'Agentic AI, LangGraph, LangChain, Production RAG, Prompt Engineering, OpenAI SDK, Claude SDK, PyTorch, PySpark, Qdrant, ChromaDB'],
  ['Databases & Tools', 'PostgreSQL, MongoDB, MySQL, Git, GitHub, Docker, VS Code, Postman'],
  ['Core Foundations', 'System Design (Scalability, Caching, Load Balancing, Microservices), Data Structures & Algorithms (150+ LeetCode), OOP, DBMS, OS, Computer Networks']
]

export const experiences = [
  {
    role: 'Software Development Engineer Intern',
    company: 'HashedIn by Deloitte',
    date: 'Apr 2024 — Aug 2024',
    place: 'Bellandur, Bengaluru, Karnataka',
    points: [
      'Completed an intensive engineering internship developing enterprise full-stack applications with Angular (Signals, NgRx, Standalone) and React.',
      'Architected microservices and scheduled batch workflows with Java, Spring Boot, Spring Batch, and Apache Kafka messaging.',
      'Developed asynchronous backend REST APIs in Python using FastAPI, Pydantic data validation, and secure JWT authentication.',
      'Engineered distributed data pipelines with PySpark and Pandas for automated data validation, reconciliation, and dataset analysis.',
      'Built Generative AI workflows with LangGraph multi-agent systems, RAG with hybrid vector search, and Model Context Protocol (MCP).'
    ]
  },
  {
    role: 'SDE Trainee Intern',
    company: 'Aspire InfoLabs Pvt. Ltd.',
    date: 'Sep 2025 — Apr 2026',
    place: 'Hyderabad, Telangana',
    points: [
      'Developed MERN-stack projects using MongoDB, Express.js, React.js, and Node.js.',
      'Implemented authentication and authorization workflows using JWT and session-based logic.'
    ]
  },
  {
    role: 'Front-end Developer Intern',
    company: 'a-hub, Andhra University',
    date: 'Jul 2024 — Dec 2024',
    place: 'Visakhapatnam, Andhra Pradesh',
    points: [
      'Developed FixMyMill (Matric Services), a production platform for workshops, internships, and student projects using React.js and Chakra UI.',
      'Implemented service listings, project uploads, and an ambassador-program workflow.'
    ],
    link: { label: 'Visit Matric Services', url: 'https://www.matricservices.in/' }
  },
  {
    role: 'Web Development Intern',
    company: 'DEVMEUP Virtual Internship',
    date: 'Jun 2025 — Jul 2025',
    points: [
      'Built a Study Tracker application with student login, subject enrolment, progress tracking, authentication, and a structured dashboard.',
      'Designed the application for a clear, organised student experience.'
    ],
    link: { label: 'View Study Tracker', url: 'https://study-tracker-app-e37o.vercel.app/' }
  },
  {
    role: 'Web Development Intern',
    company: 'AICTE Virtual Internship',
    date: 'Apr 2024 — Jun 2024',
    points: [
      'Built responsive web applications including an image gallery, calculator, and responsive website using HTML, CSS, and JavaScript.'
    ]
  }
]

export const projects = [
  {
    title: 'AI-Powered CCTV Video Search',
    type: 'B.Tech Final-Year Project',
    desc: 'A semantic video-retrieval system that returns relevant frames and timestamps from natural-language queries.',
    details: 'Built normalized 512-dimensional CLIP ViT-B/16 image and text embeddings, Qdrant vector retrieval with cosine similarity, prompt-enhanced queries, and temporal sliding-window pooling.',
    stack: ['React', 'Node.js', 'FastAPI', 'PyTorch', 'CLIP', 'Qdrant', 'MongoDB', 'Docker'],
    github: 'https://github.com/Praneesha18/cctv-4-2-project',
    visual: 'cctv'
  },
  {
    title: 'Agent Factory — Code Synthesis from BRD/TRD',
    type: 'GenAI & Autonomous Agents',
    desc: 'An autonomous multi-agent system that digests requirement documents (BRD/TRD) to automatically plan, generate, and test production code.',
    details: 'Orchestrated with LangGraph state graphs, self-critique reflection loops, tool calling, and automated testing in sandboxed environments.',
    stack: ['Python', 'LangGraph', 'LangChain', 'OpenAI SDK', 'FastAPI', 'Pytest'],
    github: 'https://github.com/Praneesha18',
    visual: 'agent'
  },
  {
    title: 'Matric Services (FixMyMill)',
    type: 'Production Web Platform',
    desc: 'A production web platform connecting students with workshops, internships, project submissions, and ambassador workflows.',
    details: 'Designed with React.js, Chakra UI, and REST APIs for a-hub, Andhra University, supporting student innovators.',
    stack: ['React.js', 'Chakra UI', 'REST APIs', 'Node.js'],
    github: 'https://github.com/Praneesha18',
    link: { label: 'Visit Live Site', url: 'https://www.matricservices.in/' },
    visual: 'matric'
  },
  {
    title: 'Study Tracker App',
    type: 'Educational Web App',
    desc: 'A student productivity platform with subject enrollment, progress tracking, authentication, and structured dashboards.',
    details: 'Built during DEVMEUP internship featuring student authentication, subject milestone tracking, and clean UI.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Authentication'],
    github: 'https://github.com/Praneesha18',
    link: { label: 'View Live App', url: 'https://study-tracker-app-e37o.vercel.app/' },
    visual: 'tracker'
  },
  {
    title: 'Varahi Pickles',
    type: 'Personal Project',
    desc: 'A warm, responsive product showcase made for a local artisanal brand with gallery and WhatsApp ordering.',
    details: 'Created with a product gallery, WhatsApp contact flow, responsive navigation, and JSON-server-backed product data.',
    stack: ['React.js', 'Chakra UI', 'JSON Server', 'WhatsApp API'],
    github: 'https://github.com/Praneesha18',
    link: { label: 'View Live Store', url: 'https://varahi-alpha.vercel.app/' },
    visual: 'pickles'
  }
]

export const education = [
  { degree: 'B.Tech, Computer Science & Systems Engineering', school: 'Andhra University College of Engineering, Visakhapatnam', result: 'CGPA 8.80 / 10', date: '2022 — Present' },
  { degree: 'Class XII, AP Board', school: 'Sri Chaitanya Junior College, Visakhapatnam', result: '97.8%', date: '2020 — 2022' },
  { degree: 'Class X, SSC', school: "Success 'n' Success School, Visakhapatnam", result: '10 / 10', date: '2019 — 2020' }
]
