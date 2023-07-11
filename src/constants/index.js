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
    api,
    githublogo,
    meta,
    utel,
    udemy,
    dev,
    carrent,
    jobit,
    tripguide,
    npm,
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
      title: "UI/UX Developer",
      icon: creator,
    },
    {
      title: "MERN-Stack Learner",
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
      name: "git",
      icon: git,
    },
    {
      name: "github",
      icon: githublogo,
    },
    {
      name: "Npm",
      icon: npm,
    },
    {
      name: "api",
      icon: api,
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
      company_name: "Meta",
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
        "Developed a Spotify based complete, responsive and functional Music Streaming App using technologies like React, Tailwind, Redux and RapidAPI.",
        "Developed a FullStack complete, responsive and functional Social Media App inspired in Pinterest using technologies like React, Sanity, Tailwind and Google Authentication API.",
        "Developed a complete, responsive and functional Fitness Exercises App with technologies like React, MaterialUi and RapidApi.",
        "Developed an entire, responsive and fully functional Youtube Clone App using technologies like React, MaterialUi5, and RapidApi for it.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };