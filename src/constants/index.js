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

  quote,
  blackjack,
  foodRecipes,
  frontend,
  sabor,
  voting,
  tulum,
  landing,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: gameDev
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
    icon: unity
  }
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const [oldColor, newColor] = ["#383E56", "#E6DEDD"]

const experiences = [
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
      "As FrontEnd, I was able to layout and program functionalities for the web apps by using laravel blade, SASS and JQuery."
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
      "As FrontEnd, I was able to layout and program whole features to modify a template (Materially) and apply hooks, filters, work with tables and cards, fetch data from some endpoints and work with a 7 members team to have clean, reusable and high quality code by applying good manners for React apps."
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
 
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
      "For FrontEnd I worked with React, Redux, React Query and Typescript"
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
    description:
      "Landing Page to layout a restaurant",
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
    description:
      "Landing Page to layout a coffee",
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
    description:
      "Landing Page to show a little about Tulum in Mexico",
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
    source_code_link: "https://github.com/BurningAl15/Assesment-frontend-retrieval-makeit",
  },
];

export { services, technologies, experiences, testimonials, projects };
