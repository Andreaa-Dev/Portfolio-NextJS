import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { RiGatsbyLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";

import dior from "../images/dior.png";
import bike from "../images/bike.png";
import cloth from "../images/cloth.png";
import meal from "../images/meal.png";
import fee from "../images/fee.png";
import csharf from "../images/csharf.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Helsinki, Finland",
    description:
      "I'm now a full-stack developer working on the SMS (Student Management System) a web service for Integrify's recruiter and teacher to manage students and classes, developed with React for Frontend and NestJS for backend.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Front-End Developer",
    location: "Helsinki, Finland",
    description:
      "I worked as a front-end developer for almost a year. My main task is to take over the maintenance of the restaurant's website by re-design and update the site content. I build the blog page for the site using Gatsby with static rendering. ",
    icon: React.createElement(RiGatsbyLine),
    date: "2021",
  },
  {
    title: "Self-learning",
    location: "Udemy online",
    description:
      "I took some courses in Udemy coving web development: HTML, CSS, JavaScript and React",
    icon: React.createElement(FaCode),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "C# Backend",
    description: "A server-side application using C# integrated authentication mechanisms to build robust APIs with secure endpoints",
    tags: ["C#", ".NET Core "],
    imageUrl: csharf,
    githubLink: "https://github.com/Andreaa-Dev/Helsinki-bike",
  },
  {
    title: "Helsinki Bike",
    description:
      "Full-stack app for exploring Helsinki bike stations and journeys via map view. Utilizes MongoDB with Bash scripting for CSV data import, employing pagination for millions of rows.",
    tags: ["React", "Redis", "MapBox", "Github Action", "Docker "],
    imageUrl: bike,
    githubLink: "https://github.com/Andreaa-Dev/Helsinki-bike",
  },
  {
    title: "Dior Website",
    description:
      "Fullstack Dior-inspired app with user authentication (Google OAuth), seamless cosmetics product checkout, order placement, and password reset via email confirmation using Sendgrid. ",
    tags: ["React", "Express", "MongoDB", "Stripe", "Jest", "Docker"],
    imageUrl: dior,
    githubLink: "https://github.com/Andreaa-Dev/Fullstack-Ecommerce",
  },
  {
    title: "Delivery calculation fee ",
    description:
      "The application is a calculation form where the user can enter information of the order and get the delivery fee.",
    tags: ["React", "Formik", "Yup", "Jest"],
    imageUrl: fee,
    githubLink: "https://github.com/Andreaa-Dev/Delivery-fee-calculation",
  },
  {
    title: "E-commerce",
    description:
      "An e-commerce website using Angular. The user can register/log in, add products to wishlist and buy product. The additional features are searching product by name, sorting by price and alphabet ",
    tags: ["Angular", "NgRx", "Tailwind"],
    imageUrl: cloth,
    githubLink: "https://github.com/Andreaa-Dev/ecommerce-angular",
  },
  {
    title: "Meal Receipts ",
    description:
      "A front-end project showcasing meal receipts, allowing users to search and filter by both name and ingredients",
    tags: ["Vue", "Tailwind"],
    imageUrl: meal,
    githubLink: "https://github.com/Andreaa-Dev/meal-ts",
  },
] as const;

export const skillsData = [
  "TypeScript",
  "JavaScript",
  "C#",
  "Java",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Redux",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Testing (Jest)",
  "Docker",
  "GitHub Action",
  "Bash",
  "Figma",
  "HTML, CSS",
  "SASS",
  "Git",
] as const;
