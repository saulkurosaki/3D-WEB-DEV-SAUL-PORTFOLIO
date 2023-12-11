import {
  mobile,
  backend,
  creator,
  web,
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
  nextjs,
  githublogo,
  meta,
  utel,
  udemy,
  dev,
  dashboard,
  virtualpinboard,
  ytclone,
  metaverse,
  musicapp,
  fitnessapp,
  figma,
  meta_prof,
  meta_adv_react,
  meta_dev_caps,
  meta_js,
  udemy_adv_react,
  udemy_mern,
  udemy_fund_node,
  meta_bas_react,
  meta_ux_ui,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "NextJs Developer",
    icon: creator,
  },
  {
    title: "UI/UX Developer",
    icon: backend,
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
    name: "Next JS",
    icon: nextjs,
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
    name: "Figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: githublogo,
  },
];

const experiences = [
  {
    title: "Computer Science Engineering",
    company_name: "Utel University",
    icon: utel,
    iconBg: "#383E56",
    date: "",
    points: [
      "Learned what OOP stands for, and put my Object Oriented Programming skills in practice.",
      "Studied how Data Bases work, the right commands to implement one and how to maintain them properly.",
      "Practiced all the fundamentals of Algorithms and Data Structures Time and Space Complexity.",
      "Collaborated with my classmates in some coding projects to learn how to work in team development.",
    ],
  },
  {
    title: "Udemy Courses",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Mastered my HTML, CSS and JavaScript fundamental knowledge by making many exercises.",
      "Started implementing new projects based on React using Node.js as it's runtime environment.",
      "Practiced a lot of my React knowledge and all the MERN Stack technologies by the Project Based Learning (PBL) method.",
      "Prepared by practicing with a lot of coding interview questions, exercises and challenges.",
    ],
  },
  {
    title: "Front-End Professional Certificate",
    company_name: "by Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Practiced developing and maintaining web applications using React.js and other related technologies, frameworks and libraries.",
      "Participated and collaborated with cross-functional teams to create efficient, scalable and high-quality products.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Mastered my React, Git, Node.js, API's, frameworks and libraries knowledge.",
    ],
  },
  {
    title: "Clones and Personal Web Projects",
    company_name: "Saul Paredes",
    icon: dev,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developed a complete, responsive and functional Music Streaming App using technologies like React, Tailwind, Redux and RapidAPI.",
      "Developed a FullStack complete, responsive and functional Social Media App inspired in Pinterest using technologies like React, Sanity, Tailwind and Google Authentication API.",
      "Developed a complete, responsive and functional Fitness Exercises App with technologies like React, MaterialUi and RapidApi.",
      "Developed an entire, responsive and fully functional Youtube Clone App using technologies like React, MaterialUi5, and RapidApi for it.",
    ],
  },
];

const certificates = [
  {
    name: "Meta Front-End Professional Certificate",
    image: meta_prof,
    url: "https://www.coursera.org/account/accomplishments/professional-cert/F8DFNFSYF32Q",
  },
  {
    name: "Meta React Basics Certificate",
    image: meta_bas_react,
    url: "https://www.coursera.org/account/accomplishments/verify/YQPK7B9VDSH3",
  },
  {
    name: "Meta Advanced React Certificate",
    image: meta_adv_react,
    url: "https://www.coursera.org/account/accomplishments/verify/CCR5HE8LWFYU",
  },
  {
    name: "Meta Front-End Developer Capstone",
    image: meta_dev_caps,
    url: "https://www.coursera.org/account/accomplishments/verify/4RA7YBLB8APM",
  },
  {
    name: "Udemy Advanced React Certificate",
    image: udemy_adv_react,
    url: "https://www.udemy.com/certificate/UC-f46c9d42-bfc0-4909-b745-682e61787f36/",
  },
  {
    name: "Udemy MERN Stack Certificate",
    image: udemy_mern,
    url: "https://www.udemy.com/certificate/UC-4696efc0-3172-4d4f-907c-b76b847086e3/",
  },
  {
    name: "Udemy Html, Css, Js and NodeJs Certificate",
    image: udemy_fund_node,
    url: "https://www.udemy.com/certificate/UC-bb820daa-39f3-4187-8165-cdeb1f3da3bc/",
  },
  {
    name: "Meta JavaScript Certificate",
    image: meta_js,
    url: "https://www.coursera.org/account/accomplishments/verify/MKFKS6EP5G9S",
  },
  {
    name: "Meta UI/UX Certificate",
    image: meta_ux_ui,
    url: "https://www.coursera.org/account/accomplishments/verify/Q5BQRERGP7KH",
  },
];

const projects = [
  {
    name: "Ecommerce Dashboard",
    description:
      "Web Ecommerce Dashboard where the user can manage the earnings, the customers, products, sales and refunds updates, the orders, employees and customers charts, and so much more management tools.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/saulkurosaki/DASHBOARD-PROJECT",
    url: "https://dashboardsaulproject.netlify.app/",
  },
  {
    name: "Metaverse Website",
    description:
      "An amazing and outstanding Website to explore the future of the Metaverse, how it'll work, the latest news and updates about it, track the people around the world and connect with your friends.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framermotion",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link:
      "https://github.com/saulkurosaki/METAVERSE-WEBSITE-PROJECT",
    url: "https://metaversussaulproject.netlify.app/",
  },
  {
    name: "Youtube Clone",
    description:
      "A clone of one of the most popular, industry leading and antique video streaming platform. You can search your favorite music or creative videos, as well as your favorite artists and stay updated with new content.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui5",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
    ],
    image: ytclone,
    source_code_link: "https://github.com/saulkurosaki/YOUTUBE-CLONE-PROJECT",
    url: "https://youtubeclonesaulproject.netlify.app/",
  },
  {
    name: "Pinterest Clone",
    description:
      "Social Media Pin Application to login with google, post your favorite images as pins, share posts, comment your friends images, follow your partners or favorite content creators and save awesome pins.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "google-auth-api",
        color: "pink-text-gradient",
      },
    ],
    image: virtualpinboard,
    source_code_link:
      "https://github.com/saulkurosaki/SHAREME-SOCIAL-M-APP-PROJECT",
    url: "https://sharemesaulproject.netlify.app/login",
  },
  {
    name: "Music Streaming App",
    description:
      "A Music Streaming Application to play your favorite bands and artists, stay updated on the most popular and top listening charts, discover the people around you music and explore new generes you might love.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
    ],
    image: musicapp,
    source_code_link: "https://github.com/saulkurosaki/MUSIC-APP-PROJECT",
    url: "https://lyricsappsaulproject.netlify.app/",
  },
  {
    name: "Fitness Exercises App",
    description:
      "The new training app to learn how to manage, perform your workout times and exercises and maintain your gains all by your self. In which you'll be capable to search any exercise available and learn how to perform it the proper way.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui5",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
    ],
    image: fitnessapp,
    source_code_link:
      "https://github.com/saulkurosaki/FITNESS-EXERCISES-APP-PROJECT",
    url: "https://fitnessappsaulproject.netlify.app/",
  },
];

export { services, technologies, experiences, certificates, projects };
