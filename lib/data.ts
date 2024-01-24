import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Self-learning",
    location: "Udemy online",
    description: " some description",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },

  {
    title: "Front-End Developer",
    location: "Helsinki, Finland",
    description:
      "I worked as a front-end developer for almost a year. My main task is to take over the maintenance of the restaurant's website by re-design and update the site content. I build the blog page for the site using Gatsby with static rendering. ",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Helsinki, Finland",
    description:
      "I'm now a full-stack developer working on the SMS (Student Management System) a web service for Integrify's recruiter and teacher to manage students and classes, developed with React for Frontend and NestJS for backend.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Dior Website",
    description: "an e-commerce",
    tags: ["React", "Redux", "MongoDB"],
    imageUrl: dior,
  },
  {
    title: "Helsinki Bike",
    description: "bike",
    tags: ["React", "TypeScript", "Redux", "Express", "MongoBD"],
    imageUrl: bike,
  },
  {
    title: "E-commerce",
    description: "angular",
    tags: ["Angular", "NgRx"],
    imageUrl: cloth,
  },
  {
    title: "Meal ",
    description: "vue",
    tags: ["Vue"],
    imageUrl: meal,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Git",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Testing (Jest)",
  "Docker",
  "Figma",
] as const;
