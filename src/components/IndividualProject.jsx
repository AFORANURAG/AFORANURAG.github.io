import { Col } from "react-bootstrap";
import netlify from "../assets/img/icons8-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites.-48.png";
import github from "../assets/img/icons8-github.svg"
import githubicon from "../assets/img/icons8-github-94.png"
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Divider,Center } from '@chakra-ui/react'
// import { Divider } from '@chakra-ui/react'
export const IndividualProject= ({ project1}) => {
  console.log(project1)
  return (
    <Col size={22}  sm={9} md={7} style={{marginLeft:"20%"}} >
    <div className="project1">
    <div className="right">

    <img style={{height:"60%",marginTop:"10%"}} src={project1[0].imgUrl} alt="" />


<div className="techstack">
{project1[0]?.TechStack?.map((el)=>{
return (
 <>
 <div className="containerdiv">
 <img  className="skillsused" src={el.img} alt="" />
 <span style={{color:"white",fontSize:"25px",fontFamily:"Noto-serif"}}>{el.name}</span>
 </div>
 
 </> 
)
})}
</div>

<Center>
  <img src={githubicon} style={{width:"8%",position:"relative",top:"10%"}} alt="" />  
<Link href={project1[0].github} color={"white"} isExternal>
  Github <ExternalLinkIcon mx='2px' />
</Link>

<div style={{width:"3px",height:"30px",color:"white",border:"1px solid white",margin:"10px"}}></div>
<img src={netlify} style={{width:"8%",position:"relative"}} alt="" />  

<Link href={project1[0].href} color={"white"} isExternal>
{project1[0].title}  <ExternalLinkIcon mx='2px' />
</Link>
</Center>
</div>
<div className="left">
<h1 style={{marginTop:"5%",fontFamily:'cursive',fontSize:"26px",lineHeight:"30px",color:"white"}}>{project1[0].Name}</h1>
<p style={{marginTop:"7%",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px", fontFamily:'Noto Serif',fontSize:"18px",lineHeight:"30px",color:"white"}}>
{project1[0].description}
</p>
<h1 style={{marginTop:"5%",fontFamily:'cursive',fontSize:"22px",lineHeight:"30px",color:"white"}}>Areas Of Responsibility</h1>
<p style={{marginTop:"7%",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",fontFamily:'Noto Serif',fontSize:"18px",lineHeight:"30px",color:"white"}}>
{project1[0].AreasOfResponsibility}
</p>
<h1 style={{marginTop:"5%",fontFamily:'cursive',fontSize:"22px",lineHeight:"30px",color:"white"}}>Project Type</h1>
<p style={{marginTop:"7%",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",fontFamily:'Noto Serif',fontSize:"18px",lineHeight:"30px",color:"white"}}>
{project1[0].ProjectType}
</p>
</div>
</div> 
    </Col>
  )
}


// <a style={{color:"white "}} href={project1[0].github}>
// <h2 style={{fontSize:"22px",marginLeft:"-50%",marginTop:"-30px",position:"relative",top:"10%"}}>
// Github
// </h2>  
//  <img src={githubicon} style={{width:"8%",position:"relative",top:"10%",marginLeft:"35%",marginRight:"20%",marginTop:"-7%"}} alt="" />  
// </a>

// <div className="vl" style={{borderLeft:"3px solid black",height: "30px",position:"relative",left:"47%",right:"30%",top:"5%"}}></div>

// <a style={{color:"white "}} href={project1[0].href}>
// <h2 style={{fontSize:"22px",marginLeft:"30%",marginTop:"-5px"}}>
// {project1[0].title}
// </h2>
//  <img src={netlify} style={{width:"8%",position:"relative",marginLeft:"80%",marginRight:"20%",marginTop:"-6%"}} alt="" />  
//  </a>