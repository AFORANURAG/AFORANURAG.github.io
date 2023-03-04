import React,{useEffect,useState,useRef} from 'react'
import GitHubCalendar from 'react-github-calendar';


 export default function GitHubcalendar() {
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const [isVisible,setIsVisible]=useState(false);
console.log(isVisible);

const ref= useRef(null)
useEffect(()=>{
const observer = new IntersectionObserver(([entry])=>
setIsVisible(entry.isIntersecting),
{rootMargin:"-100px"}
)
if(ref.current){
  observer.observe(ref.current);
}
return ()=>{
if(ref.current){
  observer.observe(ref.current);
}
}
},[])

// cons      
        useEffect(() => {
          function handleResize() {
            setWindowWidth(window.innerWidth);
          }
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
        return (
          <div ref={ref} className = {isVisible?"calendar-container animate__backInLeft":"calendar-container"} style={{color:"black", width: '90%' }}>
          <GitHubCalendar
   
              username="aforanurag"
              blockSize={windowWidth>450&&windowWidth<800?25 : 25}
              blockMargin={windowWidth>450&&windowWidth < 800 ?   5 : 5 }
              color={"green"}
              fontSize={windowWidth < 540? 15:30 }
              />
          </div>
        );
      }
      

 
