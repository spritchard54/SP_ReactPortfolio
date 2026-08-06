import activateMeImg from "../assets/portfolioImages/actMe_1000w.png";
import weatherDash from "..//assets/portfolioImages/weatherDash_1000w.png";

const projects = [
  {
    id: 1,
    title: "ActivateMe",
    description:
      "Time has a way of slipping away from us. This inspired myself and team members from my UPENN Web Development Bootcamp to create ActivateMe. Log and view daily activities and utilize data visualizations to better understand where all that time is going.",
    image: activateMeImg,
    liveUrl: "https://activateme.onrender.com/#",
    githubUrl: "https://github.com/spritchard54/ActivateMe",
    featured: false,
  },
  {
    id: 2,
    title: "OpenWeather Forecast",
    description:
      "This site allows users to view the forecast for a desired location by typing in the name of the city. Time allowing I want to add in zip code functionality and city and state funtionality. It utilizes the OpenWeather API and the site was built using HTML, CSS, and JavaScript.",
    image: weatherDash,
    liveUrl: "https://spritchard54.github.io/weatherDashboard/",
    githubUrl: "https://github.com/spritchard54/weatherDashboard",
    featured: false,
  },
  {
    id: 3,
    title: "Vinyl Logic",
    description:
      "This project is a result of my recent entry into the world of vinyl record collecting. I've been around longing enough to remember buying cassettes and then CDs before living in a world of streaming content. I miss going into the music store, I miss skimming through physical copies of my own music, and so now I'm buying records. The only format that seems to have stood the test of time.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    image: "https://res.cloudinary.com/dpir0th3m/image/upload/v1786039307/vinylrecords_qxlqrr",
    liveUrl: "/vinyl",
    githubUrl: "https://github.com/spritchard54/SP_ReactPortfolio",
    featured: true,
  },
];

export default projects;
