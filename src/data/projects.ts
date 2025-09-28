export type Project = {
  img: String;
  title: String;
  tags: String[];
  link?: string;
};

export const projects: Project[] = [
  {
    img: "matchpoint.jpg",
    title: "MatchPoint",
    tags: ["Flutter", "Dart", "Firebase", "Materialize CSS"],
    link: "https://drive.google.com/file/d/1rX40eSN-QQe7nWKg2tCnD_zA8JxdUO_n/view?usp=sharing",
  },
  {
    img: "tracker.png",
    title: "Tracker",
    tags: ["React Vite", "Tailwind CSS", "Typescript"],
    link: "http://tracker04.netlify.app",
  },
  {
    img: "simpleEcommerce.png",
    title: "Simple E-commerce",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "CSS"],
  },
  {
    img: "simpleCRUD.png",
    title: "Simple CRUD",
    tags: ["Laravel", "PHP", "MySQL", "CSS", "Java"],
  },
];
