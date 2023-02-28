import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { IndividualProject } from "./IndividualProject";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg5 from "../assets/img/project-img5.png";

import react from '../assets/img/react-2.svg';
import node from '../assets/img/nodejs-1.svg';
import express from '../assets/img/express-109.svg';
import redis from "../assets/img/icons8-redis.svg"
import typescript from "../assets/img/icons8-typescript.svg"
import mysql from "../assets/img/icons8-mysql-logo.svg"
import html from "../assets/img/icons8-html-5.svg"
import css from "../assets/img/icons8-css3.svg"
import aws from "../assets/img/icons8-amazon-web-services.svg"
import js from "../assets/img/icons8-javascript.svg"
import bootstrap from "../assets/img/icons8-bootstrap.svg"
import chakraui from "../assets/img/icons8-chakra-ui.svg"
import mongodb from "../assets/img/icons8-mongodb.svg"
import docker from "../assets/img/icons8-docker.svg"

import 'animate.css';
import { Element} from 'react-scroll'

export const Projects = () => {

  const projects = [
    
    {
      title: "(Deployed)",
      description: "Beauty Bomb (Clone of Nykaa) Beauty Bomb , An E-commerce Website built to provide the best products available in the market",
      imgUrl: projImg1,
      href:"https://beauttybomb.netlify.app/",
      github:"https://github.com/BmDevelopers001/attractive-bikes-9922",
      TechStack:[html,css,js,bootstrap],
      ProjectType:"A Collaborative Project Built by a team of four Full stack Devloper",
 AreasOfResponsibility:"Main Product Page,Stripe Api Integration and Authentication using Jwt and Nodemailer "
    }
   
  ];

  const project1 = [
    {
      Name:"Lyst",
      title: " (Deployed)",
      description: "Lyst.com (Clone of Lyst ,A London based Ecommerce Webstore)",
      imgUrl: projImg2,
      href:"https://serene-bublanina-1e30b8.netlify.app/",
      github:"https://github.com/AFORANURAG/volatile-wilderness-1112",
      TechStack:[html,css,js],
      ProjectType:"Individual Project",
      AreasOfResponsibility:"Homepage,Filter ,Sorting functionality ,Login,Signup and Main Product Page"

    }
   
  ];


  const project2 = [
    
    {
      Name:"Hey Fit India Fitness Store",
      title: " (Deployed)",
      description: "Hey Fit India (Clone of GeFit) is a fitness website where you can find some of the best fitness plans that suits to you",
      imgUrl: projImg3,
      href:"https://aforanurag.github.io/amazing-shape-3534/",
      github:"https://github.com/AFORANURAG/amazing-shape-3534",
      TechStack:[node,express,html,css,js],
      ProjectType:"A Collaborative Project Built by a team of four Full stack Devloper",
      AreasOfResponsibility:"Team Lead ,built Navbar and Sliders , Integrating Stripe with node and express in backend,Subscription Page , generating PR ,resolving Conflicts"

    }
   
  ];

  const project3 = [
    
    {
      Name:"KhaanaBaato Web Application",
      title: "(Deployed)",
      description: "KhaanaBaato (Self Designed ) , An application build to Remove Hunger and Food Wastage from World ",
      imgUrl: projImg3,
      href:"https://aforanurag.github.io/amazing-shape-3534/",
      github:"https://github.com/AFORANURAG/ChatAppwithsocket",
      TechStack:[chakraui,react,node,express,mongodb],
      ProjectType:"Individual Project",
      AreasOfResponsibility:"Authentication with Jwt ,Oauth with github and Google, Chat functionlality with socket,Crud functionality. Comments and Role Base Access Controls"

    }
   
  ];

  const project4 = [
    
    {
      Name:"Authentication System",
      title: "(Deployed)",
      description: "A Full Fledge  Authentication System Enabled with JWT ,Github Oauth and Google Oauth",
      imgUrl: projImg3,
      href:"https://aforanurag.github.io/amazing-shape-3534/",
      github:"https://github.com/AFORANURAG/KhaanaBaatoWebApp",
      TechStack:"Node,Express,MongoDb,Passport Js,Github Authentication and Google Authentication",
      ProjectType:"Individual Project",
      AreasOfResponsibility:"Password hashing and integrating with passport js, Github Oauth and Google Oauth and Jwt token and cookies"

    }
   
  ];

  const project5 = [
    
    {
      Name:"Clock App Made With Love",
      title: " (Deployed)",
      description: "A Simple Utility Clock App built, It is a individual project, I learnt css and js concepts while doing this simple and decent project",
      imgUrl: projImg5,
      href:"https://aforanurag.github.io/clock-app/",
      github:"https://github.com/AFORANURAG/clock-app",
      TechStack:[html,css,js],
      ProjectType:"Individual Project",
      AreasOfResponsibility:"Design and developer the web app individual"
    }
   
  ];


  return (
    <Element name="Project"  style={{backgroundColor:"white"}} >
     <IndividualProject project1={projects} />
     <IndividualProject project1={project1} />
     <IndividualProject project1={project2} />
     <IndividualProject project1={project5} />

    </Element>
   
  )
}
