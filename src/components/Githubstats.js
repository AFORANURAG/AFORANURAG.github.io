import React, { useEffect } from 'react'
// import  {GitHubCalendar} from  "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"
import GitHubCalendar from 'react-github-calendar';
import Githubcalender from "./Githubcalender"
// import {GitHubCalendar} from "github-calendar"
export default function Githubstats() {
  
// useEffect(()=>{
// let container=document.querySelector(".calender")
// GitHubCalendar(container, "AFORANURAG", { responsive: true });


// },[])
    
 
  
    return (
    <div id='githubsection' style={{position:"relative",top:"100px",marginTop:"100px",background:"white"}}>
    <h1 style={{textAlign:"center",marginBottom:"50px",color:"black",fontSize:"50px"}}> Github Stats</h1>
    
   <Githubcalender/>
    <img className='githubstateimage' style={{marginTop:"70px",width:"50%",marginLeft:"27%"}} src="http://github-readme-streak-stats.herokuapp.com?user=AFORANURAG&theme=dark&background=000000" alt="" />
<img className='githubstateimage' style={{marginTop:"70px",width:"50%",marginLeft:"27%"}} src="https://github-readme-stats.vercel.app/api?username=AFORANURAG&show_icons=true&theme=radical" alt="" />
<img className='githubstateimage' style={{marginTop:"70px",width:"50%",marginLeft:"27%"}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=AFORANURAG&layout=compact" alt="" />

</div>
    
    
  
  )
}
