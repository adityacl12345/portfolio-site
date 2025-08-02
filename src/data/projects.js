// src/data/projects.js

const projects = [
  {
    id: 1,
    name: "CholBro",
    description: "A MERN full-stack social app with post creation, image uploads, comments, and auth.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveLink: "https://cholbro.vercel.app",
    githubLink: "https://github.com/adityacl12345/Mern",
    featured: true,
  },
  {
    id: 2,
    name: "Social Feed",
    description: "React-based social feed with login/register, infinite scrolling, pagination, and search.",
    tech: ["React", "CSS", "JavaScript"],
    liveLink: "https://adityacl12345.github.io/social-login/",
    githubLink: "https://github.com/adityacl12345/social-login",
    featured: false,
  },
  {
    id: 3,
    name: "News Deck",
    description: "A React project displaying news with search, sorting, and featured highlights.",
    tech: ["React", "Tailwind CSS", "News API"],
    liveLink: "https://adityacl12345.github.io/news-deck/",
    githubLink: "https://github.com/adityacl12345/news-deck",
    featured: false,
  },
  {
    id: 4,
    name: "My Portfolio",
    description: "A React project for my portfolio.",
    tech: ["React", "Tailwind CSS", "Vite"],
    liveLink: "https://adityacl12345.github.io/portfolio-site/",
    githubLink: "https://github.com/adityacl12345/portfolio-site/tree/master",
    featured: true,
  },
  {
    id: 5,
    name: "Summoner's Inn",
    description: "UI/UX redesign of the esports website for Freaks 4U Gaming GmbH.",
    tech: ["HTML", "SCSS", "JavaScript", "PHP"],
    liveLink: "https://www.summoners-inn.de/",
    githubLink: "",
    featured: false,
  },
  {
    id: 6,
    name: "Overtake (Porsche)",
    description: "Corporate site theming and frontend for Porsche under Freaks 4U Gaming.",
    tech: ["WordPress", "HTML", "CSS"],
    liveLink: "https://www.overtake.gg/",
    githubLink: "",
    featured: false,
  },
  {
    id: 7,
    name: "Fiesta Online",
    description: "MMORPG website redesign project done during my time at Gamigo AG.",
    tech: ["HTML", "jQuery", "CSS"],
    liveLink: "https://fiesta.gamigo.com/",
    githubLink: "",
    featured: false,
  },
];

export default projects;
