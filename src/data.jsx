import {
  Code2,
  Zap,
  Globe as GlobeIcon,
  Users,
  ShoppingCart,
  Droplets,
  Award,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiVite,
  SiReactrouter,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiAxios,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiNetlify,
  SiVercel,
  SiNotion,
} from "react-icons/si";

export const personalInfo = {
  name: "Ahmed Elmallah",
  title: "Frontend Engineer",
  tagline:
    "Building responsive, scalable web apps with React.js and modern frontend tech. Passionate about clean code and intuitive user experiences.",
  about: `I'm a Frontend Developer and Computer Science student with a passion for building web applications that are both beautiful and functional. I specialize in React.js and modern frontend technologies, with hands-on experience in state management, API integration, authentication systems, and performance optimization. I love turning complex problems into clean, intuitive interfaces.`,
  email: "ahmedwaheedelmallah@gmail.com",
  github: "https://github.com/AhmedWaheedElmallah29",
  whatsappLink: "https://wa.me/201095492533?text=Hello%20Ahmed!",
  phoneDisplay: "+20 109 549 2533",
};

export const aboutStrengths = [
  {
    icon: <Code2 size={20} />,
    text: "React.js, Vite & component-based architecture",
  },
  { icon: <Zap size={20} />, text: "State management with Context API" },
  {
    icon: <GlobeIcon size={20} />,
    text: "REST API integration & authentication (Clerk)",
  },
  { icon: <Users size={20} />, text: "Technical mentoring & training" },
];

export const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "React Router DOM", icon: <SiReactrouter /> },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Mantine UI", icon: null },
      { name: "CSS Modules", icon: <SiCss /> },
      { name: "Sass", icon: <SiSass /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Integration & Backend",
    skills: [
      { name: "Axios", icon: <SiAxios /> },
      { name: "REST APIs", icon: null },
      { name: "Clerk Auth", icon: null },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB Atlas", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Notion", icon: <SiNotion /> },
      { name: "Terminal", icon: null },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A responsive e-commerce single-page application with shopping cart functionality, complex global state management, REST API integration for dynamic product data, and robust form validation.",
    tech: [
      "React",
      "Vite",
      "Mantine UI",
      "Context API",
      "Formik",
      "Yup",
      "Axios",
    ],
    liveUrl: "https://1-e-commerce-project.vercel.app",
    icon: <ShoppingCart size={40} />,
    gradient: "linear-gradient(135deg, #0080FF 0%, #00F0FF 50%, #7B61FF 100%)",
    bullets: [
      "Built a responsive e-commerce SPA using React.js and Vite",
      "Implemented shopping cart with complex global state via Context API",
      "Integrated REST APIs using Axios for dynamic product data",
      "Developed robust form handling and validation using Formik & Yup",
      "Configured dynamic client-side routing with React Router DOM",
    ],
  },
  {
    id: 2,
    title: "Water Tracker Application",
    description:
      "A hydration tracking app with dashboard analytics, history tracking, secure authentication, CRUD functionality with real-time optimistic UI updates, and full-stack deployment.",
    tech: ["React", "Vite", "Clerk", "Express.js", "MongoDB Atlas", "Vercel"],
    liveUrl: "https://water-tracker-all.vercel.app",
    icon: <Droplets size={40} />,
    gradient: "linear-gradient(135deg, #00F0FF 0%, #7B61FF 50%, #FF61D0 100%)",
    bullets: [
      "Built hydration tracking with dashboard analytics & history",
      "Implemented secure authentication using Clerk",
      "CRUD operations with real-time optimistic UI updates",
      "Integrated frontend with decoupled Express.js backend via REST APIs",
      "Deployed full-stack on Vercel serverless infrastructure",
    ],
  },
];

export const experiences = [
  {
    title: "Frontend Instructor & Core Member",
    org: "IEEE El-Shorouk Academy Student Branch",
    bullets: [
      "Delivered comprehensive frontend development training sessions covering HTML, CSS, JavaScript, and React.",
      "Mentored junior members and assisted in solving technical challenges.",
      "Progression: Advanced from MERN Stack trainee to Frontend Instructor, demonstrating rapid technical growth.",
    ],
  },
  {
    title: "Operations & Logistics Coordinator",
    org: "",
    bullets: [
      "Coordinated transportation operations for university students, ensuring efficient and timely logistics.",
      "Managed schedules and problem resolution in a fast-paced environment.",
      "Strengthened leadership, communication, crisis management, and organizational skills.",
    ],
  },
];

export const certifications = [
  {
    title: "Best Member Award",
    issuer: "IEEE El-Shorouk Academy Student Branch",
    year: "2025",
    icon: <Award size={24} />,
  },
  {
    title: "MERN Stack Workshop",
    issuer: "IEEE El-Shorouk Academy Student Branch",
    year: "Aug 2025",
    detail: "60 training hours",
    icon: <BookOpen size={24} />,
  },
  {
    title: "Front-End Development Training Program",
    issuer: "OrbScope Academy",
    year: "2025",
    icon: <GraduationCap size={24} />,
  },
  {
    title: "Field Training Program",
    issuer: "OrbScope Academy",
    year: "2025",
    icon: <GraduationCap size={24} />,
  },
];
