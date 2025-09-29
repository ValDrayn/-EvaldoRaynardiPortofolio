export type Project = {
  img: String;
  title: String;
  tags: String[];
  link?: String;
  description: String;
};

export const projects: Project[] = [
  {
    img: "matchpoint.jpg",
    title: "MatchPoint",
    tags: ["Flutter", "Dart", "Firebase", "Materialize CSS"],
    link: "https://drive.google.com/file/d/1rX40eSN-QQe7nWKg2tCnD_zA8JxdUO_n/view?usp=sharing",
    description:
      "This app is designed to record the scores of both teams in real time as well as keep a history of various available sports.",
  },
  {
    img: "tracker.png",
    title: "Tracker",
    tags: ["React Vite", "Tailwind CSS", "Typescript"],
    link: "http://tracker04.netlify.app",
    description:
      "This web application is designed to predict ingredients prices for the upcoming months, helping consumers make informed decisions before purchasing ingredients.",
  },
  {
    img: "simpleEcommerce.png",
    title: "Simple E-commerce",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "CSS"],
    description:
      "A simple e-commerce platform built with Laravel that allows users to browse products, manage their shopping cart, and complete transactions",
  },
  {
    img: "simpleCRUD.png",
    title: "Simple CRUD",
    tags: ["Laravel", "PHP", "MySQL", "CSS", "JavaScript"],
    description:
      "A basic CRUD (Create, Read, Update, Delete) application developed with Laravel that enables users to manage data efficiently, including adding, editing, and deleting records through a simple and intuitive interface.",
  },
];
