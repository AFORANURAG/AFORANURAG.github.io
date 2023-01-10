import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export const Projects = () => {

  const projects = [
    
    {
      title: "See Full Project",
      description: "eauty Bomb (Clone of Nykaa)",
      imgUrl: projImg1,
      href:"https://beauttybomb.netlify.app/",
      github:"https://github.com/BmDevelopers001/attractive-bikes-9922"
    }
   
  ];

  const project1 = [
    
    {
      title: "See Full Project",
      description: "Lyst.com (Clone of Lyst ,A London based Ecommerce Webstore)",
      imgUrl: projImg2,
      href:"https://serene-bublanina-1e30b8.netlify.app/",
      github:"https://github.com/AFORANURAG/volatile-wilderness-1112"

    }
   
  ];


  const project2 = [
    
    {
      title: "See Whole Project",
      description: "Hey Fit India (Clone of GeFit)",
      imgUrl: projImg3,
      href:"https://aforanurag.github.io/amazing-shape-3534/",
      github:"https://github.com/AFORANURAG/amazing-shape-3534"

    }
   
  ];


  return (
    <Element name="Project" >
    
    <section  className="project" id="project">
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
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
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
                        <ProjectCard
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
                        <ProjectCard
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