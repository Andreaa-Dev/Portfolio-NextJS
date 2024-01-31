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
    title: "Dior Website",
    description:
      "Fullstack Dior-inspired app with user authentication (Google OAuth), seamless cosmetics product checkout, order placement, and password reset via email confirmation using Sendgrid. ",
    tags: ["React", "Express", "MongoDB", "Stripe", "Jest", "Docker"],
    imageUrl: dior,
  },
  {
    title: "Helsinki Bike",
    description:
      "Full-stack app for exploring Helsinki bike stations and journeys via map view. Utilizes MongoDB with Bash scripting for CSV data import, employing pagination for millions of rows.",
    tags: ["React", "Redis", "MapBox", "Github Action", "Docker "],
    imageUrl: bike,
  },
  {
    title: "E-commerce",
    description:
      "An e-commerce website using Angular. The user can register/log in, add products to wishlist and buy product. The additional features are searching product by name, sorting by price and alphabet ",
    tags: ["Angular", "NgRx", "Tailwind"],
    imageUrl: cloth,
  },
  {
    title: "Meal Receipts ",
    description:
      "A front-end project showcasing meal receipts, allowing users to search and filter by both name and ingredients",
    tags: ["Vue", "Tailwind"],
    imageUrl: meal,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "JavaScript",
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
  "HTML",
  "CSS",
  "SASS",
  "Git",
] as const;
