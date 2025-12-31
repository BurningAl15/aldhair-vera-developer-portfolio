import {
  mobile,
  backend,
  creator,
  web,
  gameDev,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  postgresql,
  unity,
  threejs,
  masuno,
  makeItReal,
  globalTask,
  subterra,
  freelance,
  kodland,
  quote,
  blackjack,

  foodya,
  aldhaNote,
  studentManager,
  sabor,
  pokedex,

  voting,
  tulum,
  landing,
  cozyPomodoro,
  videogamePortfolio,
  fastTaskManager,
  sm_github,
  sm_linkedin,
  sm_youtube,
  sm_itchio,
} from "../assets";

export interface NavLink {
  id: string;
  title: string;
}

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export interface Service {
  title: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Frontend Engineer (React/TypeScript)",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Game Developer (Unity)",
    icon: gameDev,
  },
  {
    title: "XR Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

export interface Technology {
  name: string;
  icon: string;
}

const technologies: Technology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "unity",
    icon: unity,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const [oldColor, newColor] = ["#383E56", "#E6DEDD"];

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: "Unity Developer (Freelance for TGA)",
    company_name: "Freelance",
    icon: freelance,
    iconBg: oldColor,
    date: "February 2024 - December 2025",
    points: [
      "Developing e-learning and e-training videogames for Android, iOS, and WebGL platforms.",
      "Building interactive educational experiences using Unity engine and C#.",
      "Implementing cross-platform solutions with focus on performance optimization.",
      "Collaborating with educational content teams to create engaging learning experiences.",
    ],
  },
  {
    title: "Web Development Teacher",
    company_name: "Kodland",
    icon: kodland,
    iconBg: oldColor,
    date: "October 2023 - January 2024",
    points: [
      "Taught frontend foundations (HTML, CSS, JavaScript) to students aged 12-18.",
      "Created engaging lesson plans and interactive coding exercises.",
      "Mentored students in web development best practices and problem-solving.",
      "Fostered a creative learning environment to build students' confidence in coding.",
    ],
  },
  {
    title: "Full-Stack Developer (MERN)",
    company_name: "Subterra AI",
    icon: subterra,
    iconBg: oldColor,
    date: "May 2022 - June 2023",
    points: [
      "Built and maintained React views with AWS integrations (Lambdas, S3, DynamoDB, AuroraDB).",
      "Implemented GraphQL queries for efficient data fetching; managed global state with Redux and Context API.",
      "Improved code reliability by implementing unit tests with Jest, reducing regressions in existing flows.",
      "Collaborated with cross-functional teams (UX, QA, backend) to deliver high-quality features.",
      "Stack: React, Redux, React Query, TypeScript; Backend: Node.js/Java.",
    ],
  },
  {
    title: "React Front-End Developer",
    company_name: "GlobalTask",
    icon: globalTask,
    iconBg: oldColor,
    date: "February 2022 - May 2022",
    points: [
      "Delivered React features for dashboard and landing page applications.",
      "Customized Material-UI templates with hooks, filters, tables, and cards.",
      "Worked in a team of 7 developers to maintain clean, reusable, and high-quality code.",
      "Participated in code reviews and applied React best practices.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Make It Real",
    icon: makeItReal,
    iconBg: oldColor,
    date: "November 2021 - August 2022",
    points: [
      "Developed and maintained web applications using React.js and related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and developers.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "MASuno",
    icon: masuno,
    iconBg: oldColor,
    date: "December 2020 - August 2021",
    points: [
      "Built e-commerce and video-streaming (Orbem App) frontends using Laravel Blade, SASS, and jQuery.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Developed layouts and programmed functionalities for web applications.",
    ],
  },
];

export interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export interface ProjectTag {
  name: string;
  color: string;
}

export interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  preview_project_link?: string;
  source_code_link?: string;
}

const projects: Project[] = [
  {
    name: "Cozy Pomodoro",
    description:
      "Flutter mobile app combining Pomodoro timer with lo-fi music player. Features animations, notifications, breathing exercises, and premium themes. Built for focus and productivity, especially helpful for ADHD users. Published on Google Play Store.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "local data",
        color: "green-text-gradient",
      },
      {
        name: "material design",
        color: "pink-text-gradient",
      },
      {
        name: "play store",
        color: "red-text-gradient",
      },
    ],
    image: cozyPomodoro,
    preview_project_link: "https://cozy-pomodoro-landing.vercel.app/",
  },
  {
    name: "Videogame Developer Portfolio",
    description:
      "Next.js 14 portfolio showcasing 7 years of Unity game development experience. Features playable WebGL games using react-unity-webgl, custom Godot integration, blog system, YouTube integration, and PWA support. Displays projects, work history, and educational background.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "local data",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "netlify",
        color: "red-text-gradient",
      },
    ],
    image: videogamePortfolio,
    preview_project_link: "https://aldhairvera.netlify.app/",
  },
  {
    name: "Fast Task Manager",
    description:
      "Keyboard-first task manager inspired by Trello/Jira, built with Next.js. Features command palette, drag-and-drop, automatic subtask parsing, context logs, ticket numbering, and PWA support. Includes notifications and collapsible groups for efficient project management.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "netlify",
        color: "red-text-gradient",
      },
    ],
    image: fastTaskManager,
    preview_project_link: "https://fast-task-manager.netlify.app",
  },
  {
    name: "Blackjack",
    description:
      "Web application that simulates a blackjack game with vanilla JS",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "gh pages",
        color: "red-text-gradient",
      },
    ],
    image: blackjack,
    preview_project_link: "https://burningal15.github.io/blackjack-js/",
    source_code_link: "https://github.com/BurningAl15/blackjack-js",
  },
  {
    name: "Sabor a Peru",
    description: "Landing Page to layout a restaurant",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "gh pages",
        color: "red-text-gradient",
      },
    ],
    image: sabor,
    preview_project_link: "https://burningal15.github.io/sabor_a_peru/",
    source_code_link: "https://github.com/BurningAl15/sabor_a_peru",
  },
  {
    name: "Cake N Coffee",
    description: "Landing Page to layout a coffee",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "gh pages",
        color: "red-text-gradient",
      },
    ],
    image: landing,
    preview_project_link: "https://burningal15.github.io/CakeNCoffee-JS/",
    source_code_link: "https://github.com/BurningAl15/CakeNCoffee-JS",
  },
  {
    name: "Tulum Mexico",
    description: "Landing Page to show a little about Tulum in Mexico",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Surge",
        color: "red-text-gradient",
      },
    ],
    image: tulum,
    preview_project_link: "https://fundajs-aldhairvera.surge.sh/",
    source_code_link: "https://github.com/BurningAl15/CakeNCoffee-JS",
  },
  {
    name: "Random Quote",
    description:
      "Web Application that randomly shows random quotes and fetch them from a simple Json, uses React",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "json ",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Netlify",
        color: "red-text-gradient",
      },
    ],
    image: quote,
    preview_project_link: "https://random-quotes-by-aldhair.netlify.app/",
    source_code_link: "https://github.com/BurningAl15/fcc-random-quote",
  },


  {
    name: "Food Ya!",
    description:
      "Full web app that makes a place where you can buy multiple foods of multiple restaurants",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Not deployed yet",
        color: "red-text-gradient",
      },
    ],
    image: foodya,
    preview_project_link:
      "https://www.youtube.com/live/okLcs2-lf60?si=Cq27gpMacCmbepxy&t=1100",
    source_code_link: "https://github.com/Lizethsuk/food-ya/tree/presentation",
  },
  {
    name: "AldhaNote",
    description: "Mobile app made with React Native",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      // {
      //   name: "",
      //   color: "pink-text-gradient",
      // },
      {
        name: "Not deployed yet",
        color: "red-text-gradient",
      },
    ],
    image: aldhaNote,
    preview_project_link: "https://www.youtube.com/watch?v=XA4EZ8pANb0",
    source_code_link: "https://github.com/BurningAl15/personal-makeitreal/",
  },
  {
    name: "Student Manager for Kodland",
    description:
      "Students Manager made to simplify the experience when I teach to my students and get all the data I need thinking in each group I give classes to",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "json",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
      {
        name: "Netlify",
        color: "red-text-gradient",
      },
    ],
    image: studentManager,
    preview_project_link: "https://student-manager-test.netlify.app/",
    source_code_link: "https://github.com/BurningAl15/Students-Manager",
  },
  {
    name: "Pokedex",
    description:
      "Pokedex made with react native expo using the PokeAPI to get data and AsyncStorage to save locally the favorites",
    tags: [
      {
        name: "react native expo",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      // {
      //   name: "material-ui",
      //   color: "pink-text-gradient",
      // },
      {
        name: "expo - Not deployed yet",
        color: "red-text-gradient",
      },
    ],
    image: pokedex,
    // preview_project_link: "",
    source_code_link: "https://github.com/BurningAl15/pokedexMobile",
  },

];

export interface SocialMedia {
  id: string;
  image: string;
  url: string;
  title: string;
}

const socialMedias: SocialMedia[] = [
  {
    id: "social_media_github",
    image: sm_github,
    url: "https://github.com/BurningAl15",
    title: "Github",
  },
  {
    id: "social__media_linkedIn",
    image: sm_linkedin,
    url: "https://www.linkedin.com/in/aldhairvera-web/",
    title: "Full Stack LinkedIn",
  },
  {
    id: "social_media_linkedIn",
    image: sm_linkedin,
    url: "https://www.linkedin.com/in/aldhairvera/",
    title: "Game Dev LinkedIn",
  },
  {
    id: "social_media_youtube",
    image: sm_youtube,
    url: "https://www.youtube.com/channel/UCdcgOD_SQ9Pm1CyAC58-aZA",
    title: "Youtube",
  },
  {
    id: "social_media_itchio",
    image: sm_itchio,
    url: "https://fatcatgamestudio.itch.io/",
    title: "Itch.io",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialMedias,
};
