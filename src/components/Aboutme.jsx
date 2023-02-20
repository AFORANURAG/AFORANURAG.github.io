import React from 'react';
import {Container,Col} from "react-bootstrap"
import 'animate.css';

let colors = [ 'blue', 'green', 'red' ];
// this section is going to contain all information about me specially the technical ones
// it would contain my background, my coding experience my achivements, my likes ;
// I was a freak , this component is very important
// I am gonna mention all the work that i have been doing in masai school
export default function Aboutme() {
  return (
    <Container id="aboutme" className="aboutme" style={{width:"100%",border:"1px solid white",marginTop:"50px",marginBottom:"100px",height:"auto",textAlign:"center"}}>
    <h1 class="animate__animated animate__bounce">An animated element</h1>

    <h1 style={{color:"black",fontSize:"30px"}}> AboutMe</h1>
<img className="codingkrtahuacoder" style={{width:"20%",marginRight:"40%", marginLeft:"40%",marginTop:"30px", borderRadius:"13%"}} src="https://media1.giphy.com/media/i1JHRZSXO9LZZDHqii/giphy.gif?cid=ecf05e47rxgz6titdcddtv1en3qd4c13frsxlrfns0arvkg2&rid=giphy.gif&ct=g" alt="" />

    <div className = "aboutmeinfo">
    Highly skilled Node.js developer with a passion for creating efficient and scalable backend solutions. Proficient  in developing
    robust and secure web applications using Node.js, Express and other related technologies. Proven track record of delivering successful 
    projects
    on time and within budget. Expertise in developing RESTful APIs and integrating with various databases,
     including MongoDB and SQL. 
    Strong problem-solving and analytical skills, with the ability to quickly learn new technologies and programming languages. A team 
    player with excellent communication skills,
    able to collaborate with cross-functional teams and contribute to the development of high-quality software.
    </div>


<div className='classofaboutme'>
<img src="https://i.imgur.com/fZMQdrP.jpg" style={{height:"100%"}} alt="" />
</div>
<h1 className='achivement' style={{color:"black",marginTop:"50px",fontSize:"30px"}}>My achivements</h1>
<h2 className='achivmentssummary'  style={{color:"black",marginTop:"50px",lineHeight:"25px",fontFamily:'Noto Serif',fontSize:"20px"}}>My greatest achivement is completing the web developement course of masai school.It is a very intensive and immersive course   and it includes everything  , from coding to dsa to softskills training.Daily proctured evaluations and construct week projects.  </h2>


<div className="masaischoolstats">
<div className="innerdiv">
1200+ hrs 
<p> of coding

</p>
</div>
<div className="innerdiv">
5+ 
<p>collaborative projects and Full Stack Projects.</p>
</div>
<div className="innerdiv">
Participated in student senate and leadership.
<p>Spent more than 100+ hours of softskill and corporate traning </p>
</div>
<div className="innerdiv" >
Data Structure and Algorithms. 
<p>completed more than 300 questions including topics like recursion,dynamic programming ,linkedlist ,stacks and queues.</p>
</div>
<div className="innerdiv">Hackerank and Linkedin certified JavaScript developer.</div>
<div className="innerdiv">
1000+ github contribution till now. 
</div>
</div>
</Container>
  )
}

