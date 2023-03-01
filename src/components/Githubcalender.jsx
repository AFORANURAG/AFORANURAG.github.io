import React,{useEffect,useState} from 'react'
import GitHubCalendar from 'react-github-calendar';


 export default function GitHubcalendar() {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      
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
          <div  className="calendar-container" style={{color:"black", width: '90%' }}>
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
      

 
