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
          <div  className="calendar-container" style={{ width: '100%' }}>
            <GitHubCalendar
              username="aforanurag"
              blockSize={windowWidth < 800 ? 30 : 12}
              blockMargin={windowWidth < 800 ? 6 : 6   }
              
            />
          </div>
        );
      }
      

 
