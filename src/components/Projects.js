import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { IndividualProject } from "./IndividualProject";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg5 from "../assets/img/project-img5.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export const Projects = () => {

  const projects = [
    
    {
      title: "See Full Project (Deployed)",
      description: "Beauty Bomb (Clone of Nykaa) Beauty Bomb , An E-commerce Website built to provide the best products available in the market",
      imgUrl: projImg1,
      href:"https://beauttybomb.netlify.app/",
      github:"https://github.com/BmDevelopers001/attractive-bikes-9922",
      TechStack:"Html,Css,Js,Bootstrap,Node,Express,MongoDB,Firebase,Jwt,Nodemailer and Stripe",
      ProjectType:"A Collaborative Project Built by a team of four Full stack Devloper",
 AreasOfResponsibility:"Main Product Page,Stripe Api Integration and Authentication using Jwt and Nodemailer "
    }
   
  ];

  const project1 = [
    
    {
      Name:"Lyst",
      title: "See Full Project (Deployed)",
      description: "Lyst.com (Clone of Lyst ,A London based Ecommerce Webstore)",
      imgUrl: projImg2,
      href:"https://serene-bublanina-1e30b8.netlify.app/",
      github:"https://github.com/AFORANURAG/volatile-wilderness-1112",
      TechStack:"Html,Css And Js",
      ProjectType:"Individual Project",
      AreasOfResponsibility:"Homepage,Filter ,Sorting functionality ,Login,Signup and Main Product Page"

    }
   
  ];


  const project2 = [
    
    {
      Name:"Hey Fit India Fitness Store",
      title: "See Whole Project (Deployed)",
      description: "Hey Fit India (Clone of GeFit) is a fitness website where you can find some of the best fitness plans that suits to you",
      imgUrl: projImg3,
      href:"https://aforanurag.github.io/amazing-shape-3534/",
      github:"https://github.com/AFORANURAG/amazing-shape-3534",
      TechStack:"Node,Express,Html,Css,Js,Splide,Stripe and Jquery",
      ProjectType:"A Collaborative Project Built by a team of four Full stack Devloper",
      AreasOfResponsibility:"Team Lead ,built Navbar and Sliders , Integrating Stripe with node and express in backend,Subscription Page , generating PR ,resolving Conflicts"

    }
   
  ];

  const project3 = [
    
    {
      Name:"KhaanaBaato Web Application",
      title: "See Full Project (Deployed)",
      description: "KhaanaBaato (Self Designed ) , An application build to Remove Hunger and Food Wastage from World ",
      imgUrl: projImg3,
      href:"https://aforanurag.github.io/amazing-shape-3534/",
      github:"https://github.com/AFORANURAG/ChatAppwithsocket",
      TechStack:"Node,Express,React Js ,Socket.io,mongodb And Chakra UI",
      ProjectType:"Individual Project",
      AreasOfResponsibility:"Authentication with Jwt ,Oauth with github and Google, Chat functionlality with socket,Crud functionality. Comments and Role Base Access Controls"

    }
   
  ];

  const project4 = [
    
    {
      Name:"Authentication System",
      title: "See Full Project (Deployed)",
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
      title: "See Full Project (Deployed)",
      description: "A Simple Utility Clock App built",
      imgUrl: projImg5,
      href:"https://aforanurag.github.io/clock-app/",
      github:"https://github.com/AFORANURAG/clock-app",
      TechStack:"Html ,Css and Javascript",
      ProjectType:"Individual Project",
      

    }
   
  ];


  return (
    <Element name="Project" >
    
    <section  className="project" id="Projects">
    <Container>
      <Row>
        <Col size={20}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              <h2>Projects</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Tab.Container  id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Project 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Project 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Project 3</Nav.Link>
                  </Nav.Item>
                 

                </Nav>
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
              <Nav.Item>
              <Nav.Link style={{border:"1px solid #EDEADE"}}  eventKey="fourth">Project 4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link style={{border:"1px solid #EDEADE"}} eventKey="fifth">Project 5</Nav.Link>
          </Nav.Item>
          <Nav.Item>

          <Nav.Link style={{border:"1px solid #EDEADE"}} eventKey="sixth">Project 6</Nav.Link>
        </Nav.Item>
              
              </Nav>  
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <IndividualProject
                              key={index}
                              {...project}
                              href={project.href}
github={project.github}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                 

                  <Tab.Pane eventKey={"second"} id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Row>
                  {
                    project1.map((project, index) => {
                      return (
                        <IndividualProject
                          key={index}
                          {...project}
                          href={project.href}
                          github={project.github}

                          />
                      )
                    })
                  }
                </Row>
                    </Tab.Pane>


                  <Tab.Pane eventKey={"third"} id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Row>
                  {
                    project2.map((project, index) => {
                      return (
                        <IndividualProject
                          key={index}
                          {...project}
                          href={project.href}
                          github={project.github}

                          />
                      )
                    })
                  }
                </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey={"fourth"} id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Row>
                    {
                      project3.map((project, index) => {
                        return (
                          <IndividualProject
                            key={index}
                            {...project}
                            href={project.href}
                            github={project.github}
  
                            />
                        )
                      })
                    }
                  </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey={"fifth"} id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                      {
                        project4.map((project, index) => {
                          return (
                            <IndividualProject
                              key={index}
                              {...project}
                              href={project.href}
                              github={project.github}
    
                              />
                          )
                        })
                      }
                    </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey={"sixth"} id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Row>
                        {
                          project5.map((project, index) => {
                            return (
                              <IndividualProject
                                key={index}
                                {...project}
                                href={project.href}
                                github={project.github}
      
                                />
                            )
                          })
                        }
                      </Row>
                          </Tab.Pane>


                </Tab.Content>
              </Tab.Container>
            </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>
  </section>
    
    </Element>
   
  )
}
// {
//   title: "Business Startup",
//   description: "Design & Development",
//   imgUrl: projImg2,
// },
// {
//   title: "Business Startup",
//   description: "Design & Development",
//   imgUrl: projImg3,
// },