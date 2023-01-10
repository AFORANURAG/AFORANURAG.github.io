import React, { useEffect } from 'react'
// import  {GitHubCalendar} from  "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"
import GitHubCalendar from 'react-github-calendar';

// import {GitHubCalendar} from "github-calendar"
export default function Githubstats() {
  
// useEffect(()=>{
// let container=document.querySelector(".calender")
// GitHubCalendar(container, "AFORANURAG", { responsive: true });


// },[])
    
 
  
    return (
    <div style={{position:"relative",top:"-50px"}}>
    
    <GitHubCalendar style={{marginLeft:"13%"}} username="aforanurag" />
<img width={"80%"} style={{marginTop:"70px",width:"80%",marginLeft:"9%"}} src="http://github-readme-streak-stats.herokuapp.com?user=AFORANURAG&theme=dark&background=000000" alt="" />
<img width={"80%"} style={{marginTop:"70px",width:"80%",marginLeft:"9%"}} src="https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true&theme=radical" alt="" />



</div>
    
    
  
  )
}
