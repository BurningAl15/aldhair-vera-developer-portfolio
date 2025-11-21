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
  quote,
  blackjack,
  foodRecipes,
  frontend,
  foodya,
  aldhaNote,
  studentManager,
  sabor,
  pokedex,
  gameDevPortfolio,
  voting,
  tulum,
  landing,
  sm_github,
  sm_linkedin,
  sm_youtube,
  sm_itchio,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "XR Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: gameDev,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: oldColor,
    date: "July 2023 - Present",
    points: [
      "Creating tools for my own use",
      "Working on different freelance projects",
      "Learning new technologies and practising new skills",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Subterra",
    icon: subterra,
    iconBg: oldColor,
    date: "May 2022 - June 2023",
    points: [
      "Developing and maintaining the layout, add functionalities, make improvements, form validations, bring data from AWS lambdas, upload images and other types of media, create new views and join them to the product, fix bugs in front and backend, modify backend lambdas (NodeJS and Java) and deploy them, AWS to see S3, DynamoDB.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "For FrontEnd I worked with React, Redux, React Query and Typescript",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "GlobalTask",
    icon: globalTask,
    iconBg: oldColor,
    date: "February 2022 - May 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developing the layout and program FrontEnd for a dashboard app with React.",
      "Developing the layout and program FrontEnd for a landing page app with React.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "As FrontEnd, I was able to layout and program whole features to modify a template (Materially) and apply hooks, filters, work with tables and cards, fetch data from some endpoints and work with a 7 members team to have clean, reusable and high quality code by applying good manners for React apps.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Make It Real",
    icon: makeItReal,
    iconBg: oldColor,
    date: "November 2021 - August 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "MasUno",
    icon: masuno,
    iconBg: oldColor,
    date: "December 2020 - August 2021",
    points: [
      "Developing the layout and program FrontEnd for an e-commerce.",
      "Developing the layout and program FrontEnd for a video-streaming app. (Orbem App)",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "As FrontEnd, I was able to layout and program functionalities for the web apps by using laravel blade, SASS and JQuery.",
    ],
  },
];

const testimonials = [
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

const projects = [
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
    name: "Food Recipes",
    description:
      "Web Application that gets food recipes and can search words to produce new results fetched from an API",
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
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "gh pages",
        color: "red-text-gradient",
      },
    ],
    image: foodRecipes,
    preview_project_link: "https://burningal15.github.io/RecipeApp/",
    source_code_link: "https://github.com/BurningAl15/RecipeApp",
  },
  {
    name: "Ecommerce FrontEnd",
    description:
      "Web Application that gets data from an API and shows data, the products simulate a limited time offer, after a specific time, you can't see their details",
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
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Netlify",
        color: "red-text-gradient",
      },
    ],
    image: frontend,
    preview_project_link: "https://makeit-frontend-assesment.netlify.app/",
    source_code_link:
      "https://github.com/BurningAl15/Assesment-frontend-retrieval-makeit",
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
  {
    name: "Game Developer portfolio",
    description:
      "My Game/XR Developer portfolio made with NextJS and using packages like react-unity-webgl and a custom implementation to run also godot games inside the web app",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      // {
      //   name: "material-ui",
      //   color: "pink-text-gradient",
      // },
      {
        name: "Netlify",
        color: "red-text-gradient",
      },
    ],
    image: gameDevPortfolio,
    preview_project_link: "https://aldhairvera.netlify.app/",
    // source_code_link: "",
  },
];

const socialMedias = [
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
