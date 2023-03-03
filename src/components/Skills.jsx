
import 'react-multi-carousel/lib/styles.css';
import { Grid, GridItem } from '@chakra-ui/react'
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
import React, { useEffect, useRef } from 'react';


// import mysql from '../assets/img/express-109.svg';


export const Skills = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const top = elementRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) { // trigger animation when element is 80% in view
          elementRef.current.style.opacity = 1;
         
        } else {
          elementRef.current.style.opacity = 0;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <section ref={elementRef} style={{ opacity: 0, transition: 'opacity 2s' }} className="skill" id="Skills">
    <h1 style={{color:"white",fontFamily:"cursive",fontSize:"35px",marginTop:"50px",marginBottom:"30px"}}>Skills</h1>

    <div className='skills' >
       <div className="techskill">
       <img className='techimage' src={react}  alt="" />
       <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>React js &#10084;</span>
       </div>
       <div className="techskill">
  
       
       <img  className='techimage' src={node} alt="" />
       <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>Node js</span>
       

       </div>

       <div className="techskill">
       <img  className='techimage' src={express} alt="" />
       <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>Express js &#10084;</span>

       </div>
       <div className="techskill">
       <img  className='techimage' src={"https://www.rust-lang.org/logos/rust-logo-64x64-blk.png"} alt="" />
       <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>Rust Programming language &#10084;</span>

       </div>
       <div className="techskill">
       <img  className='techimage' src={redis} alt="" />

       <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>Redis</span>
       </div>
       <div className="techskill">
       <img  className='techimage' src={html} alt="" />
       <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>html</span>

       </div>
       <div className="techskill">
       <img  className='techimage' src={mysql} alt="" />
       <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>MySQL</span>

       </div>
       <div className="techskill">
       <img  className='techimage' src={typescript} alt="" />
       <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>Typescript &#10084;</span>

       </div>
       <div className="techskill">
       <img  className='techimage' src={css} alt="" />
       <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>CSS</span>

       </div>
       <div className="techskill">
       
       <img className='techimage' src={aws} alt="" />
       <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>AWS</span>

       </div>
       <div className="techskill">
       <img className='techimage' src={js} alt="" />
       <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>JavaScript</span>

       </div>
       <div className="techskill">
       <img className='techimage' 
       src={bootstrap} alt="" />
       <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>Bootstrap 5&#10084;</span>

       </div>
       <div className="techskill">
       <img className='techimage' 
       src={chakraui} alt="" />
       <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>Chakra UI&#10084;</span>
       </div>
       <div className="techskill">
       <img className='techimage' 
       src={mongodb} alt="" />
       <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>Mongo db&#10084;</span>
       </div>
       <div className="techskill">
       <img className='techimage' 
       src={docker} alt="" />
       <span style={{fontFamily:"sans-serif",fontSize:"20px"}}>Docker containerisation&#10084;</span>
       </div>
       </div>
    </section>
  )
}
