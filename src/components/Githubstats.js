import React, { useState,useEffect } from 'react'
// import  {GitHubCalendar} from  "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"
import GitHubCalendar from 'react-github-calendar';
import Githubcalender from "./Githubcalender"
// import {GitHubCalendar} from "github-calendar"

export default function Githubstats() {
  const [width,setwidth]=useState(window.innerWidth)
  
const imagestyles={
img:{
  marginTop:"70px",width:"55%",marginLeft:"22%",marginRight:"20%"
},
img2:{
  marginTop:"70px",width:"80%",marginLeft:"10%"

}
,
'@media (max-width: 900px)': {
img:{
width:"100%",
marginLeft:"20px",
marginRight:"20px"
}
}
}






useEffect(()=>{
window.addEventListener("resize", ()=>{setwidth(window.innerWidth)});
return ()=>{
window.removeEventListener("resize",()=>{setwidth(window.innerWidth)}) 
}

},[])


// },[])
    
 
  
    return (
    <div id='githubsection' style={{position:"relative",top:"100px",marginTop:"100px",paddingTop:"100px",paddingBottom:"100px",background:"white"}}>
    <h1 style={{fontFamily:"cursive",textAlign:"center",marginBottom:"50px",color:"black",fontSize:"50px"}}> Github Stats</h1>
   <Githubcalender/>
   {width<900?<>
    <img className='githubstateimage' style={imagestyles.img2} src="http://github-readme-streak-stats.herokuapp.com?user=AFORANURAG&theme=dark&background=000000" alt="" />
    <img className='githubstateimage' style={imagestyles.img2} src="https://github-readme-stats.vercel.app/api?username=AFORANURAG&show_icons=true&theme=radical" alt="" />
 <img className='githubstateimage' style={imagestyles.img2} src="https://github-readme-stats.vercel.app/api/top-langs/?username=AFORANURAG&layout=compact" alt="" />
    </>:<>
   <img className='githubstateimage' style={imagestyles.img} src="http://github-readme-streak-stats.herokuapp.com?user=AFORANURAG&theme=dark&background=000000" alt="" />
   <img className='githubstateimage' style={imagestyles.img} src="https://github-readme-stats.vercel.app/api?username=AFORANURAG&show_icons=true&theme=radical" alt="" />
<img className='githubstateimage' style={imagestyles.img} src="https://github-readme-stats.vercel.app/api/top-langs/?username=AFORANURAG&layout=compact" alt="" /> 
   
   </>}


</div>
    
    
  
  )
}
