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
    dashboard,
    virtualpinboard,
    ytclone,
    homerent,
    musicapp,
    fitnessapp,
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
    },
    {
      name: "Social Pin App",
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
      source_code_link: "https://github.com/saulkurosaki/SHAREME-SOCIAL-M-APP-PROJECT",
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
    },
    {
      name: "Home Rent",
      description:
        "A home rental search application to see the most updated, fabulous and functional livings according to your needs. In which you can explore the infinity of best located apartments to live the life of your dreams.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "chakraui",
          color: "green-text-gradient",
        },
        {
          name: "rapidapi",
          color: "pink-text-gradient",
        },
      ],
      image: homerent,
      source_code_link: "https://github.com/saulkurosaki/REAL-ESTATE-APP-PROJECT",
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
    },
    {
      name: "Fitness Exercises App",
      description:
        "The new training app to learn how to manage, perform your workout times and exercises and maintain your gains all by your self. In which you'll be capable to search any exercise available and learn how to do it the proper way.",
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
      source_code_link: "https://github.com/saulkurosaki/FITNESS-EXERCISES-APP-PROJECT",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };