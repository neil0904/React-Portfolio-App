import blogsVideo from "../assets/projects/Blogs.mp4";
import eshopVideo from "../assets/projects/eshop.mp4";
import natureVideo from "../assets/projects/NatureMedia.mp4";
import pakdonationVideo from "../assets/projects/Pakdonation.mp4";
import workspotterVideo from "../assets/projects/Workspotter.mp4";
import hostelMenuVideo from "../assets/projects/HostelMenu.mp4";
import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
import project3 from '../assets/projects/project-3.jpg';
import project4 from '../assets/projects/project-4.jpg';

export const HERO_CONTENT = `I am a passionate Full Stack Developer with 5+ years of experience in web development. I’ve built eCommerce platforms, donation portals like PakistanGiving, job portals, and custom web apps using ASP.NET Core, C#, ReactJS, Angular 19, Bootstrap, and TailwindCSS. Skilled in frontend & backend development, database integration, and creating responsive, user-friendly designs.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Freelancer/Full Stack Developer",
    company: "Yozae Pvt. Ltd.",
    description: `Led a team in developing and maintaining web applications using As.Net Core MVC, Javascript, jQuery, html5, css3, and Bootstrap5. 
    Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Asp.Net Core", "Jvascript", "HTML5", "CSS3", "Bootstrap5", "MySql"],
  },
  {
    year: "2023 - 2024",
    role: "Junior Full Stack Developer",
    company: "Higher Performance Computing Pvt. Ltd.",
    description: `Developed user interfaces for web applications using Asp.Net Core MVC. 
    Worked closely with other tema members and Tesing team. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Asp.Net Core", "Jvascript", "HTML5", "CSS3", "Bootstrap5", "MySql"],
  },
  {
    year: "2021 - 2023",
    role: "Frontend Practitioner",
    company: "At Home",
    description: `Developed and maintained web applications using JavaScript, React.js, and Angular 17+. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Reactjs", "Angular", "Three.Framer-Motion", "Tailwindcss"],
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
   {
    title: "Charity/Donation plateform",
    image: project1,
    video: pakdonationVideo,
    description:
      "Charity & donation platform with charity portfolios, eCommerce, multiple roles, blogs, zakat calculator, and payment gateway.",
    technologies: ["HTML5", "CSS3", "ASP.Net Core 6", "Entity Framework", "Identity Framework",  "MySql", "Javascript", "jQuert"],
  },
     {
    title: "Admin Panel",
    image: project1,
    description:
      "Admin panel for content management (CRUD) with API Integration.",
    technologies: ["HTML5", "CSS3", "ASP.Net Core 6", "Entity Framework", "MySql", "Javascript", "jQuert"],
  },
    {
    title: "Taaj | Health care with discount cards",
    image: project1,
    description:
      "Dynamic health care with discount cards website with secure registraion/login, contact, product searching and filtering. ",
    technologies: ["HTML5", "CSS3", "ASP.Net Core 6", "Entity Framework", "MySql", "Javascript", "jQuert"],
  },
  {
    title: "Animated Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, experience, and contact information.",
    technologies: ["HTML", "React", "Tailwindcss", "Framer Motion"],
  },
  {
    title: "eShop | E-Commerce Website",
    image: project1,
    video: eshopVideo,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, payment gateway, and user authentication.",
    technologies: ["HTML5", "CSS3", "Bootstrap5", "ASP.NET CORE 6 MVC", "MySql"],
  },
  {
    title: "Tasktick | Task Management App",
    image: project2,
    //  video: TasktickVideo,
    description:
      "An application for managing tasks and projects, with features such as task creation, update, delete, and progress tracking.",
    technologies: ["HTML", "CSS", "React"],
  },
  
  {
    title: "Blogging Platform",
    image: project4,
    video: blogsVideo,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML5", "CSS3", "ASP.Net Core MVC", "Bootstrap5", "mySQL"],
  },
    {
    title: " Animated Hostel Menu Card | Practice Poject",
    image: project3,
     video: hostelMenuVideo,
    description:
      "Food menu gallery of my hostel with filtering.",
    technologies: ["React", "CSS3", "Bootstrap"],
  },
   {
    title: "Nature Mania | Yozae Assessment Task",
    image: project3,
     video: natureVideo,
    description:
      "A fully responsive, browser-compatible animated natural photography website. Features include image carousels (OwlCarousel), parallex effects, and an engaging UI/UX optimized for all devices.",
    technologies: ["React", "CSS3", "Bootstrap5", "Javascript"],
  },
     {
    title: "workspotter | Practice Project",
    image: project3,
     video: workspotterVideo,
    description:
      "A fully responsive, browser-compatible fronend job portal. Engaging UI/UX optimized for all devices with parallex effects.",
    technologies: ["html5", "CSS3", "Bootstrap5", "Javascript"],
  },
];

export const CONTACT = {
  address: "Y-1, Taqqi Road, Gulshan-e-Maymar, Karachi, Pakistan, 75340 ",
  phoneNo: "+92 313 124 77 67 ",
  email: "shneil0904@hotmail.com",
};
