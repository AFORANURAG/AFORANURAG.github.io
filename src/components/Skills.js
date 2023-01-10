import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
    
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel  responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"} alt="Image" />
                                <h5>Nodejs</h5>
                            </div>
                            <div className="item">
                                <img src={"https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_21a537a2f60ea582bd213cab0722cb1a/express-js.png"} alt="Image" />
                                <h5>Expressjs</h5>
                            </div>
                            <div className="item">
                                <img src={"https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg"} alt="Image" />
                                <h5>Mongo Db</h5>
                            </div>


                            <div className="item">
                                <img src={"https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png"} alt="Image" />
                                <h5> MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={"https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png"} alt="Image" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src={"https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg"} alt="Image" />
                                <h5>Redis</h5>
                            </div>
                            <div className="item">
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"} alt="Image" />
                                <h5>JS</h5>
                            </div>


                            <div className="item">
                            <img src={"https://cdn-icons-png.flaticon.com/512/143/143655.png"} alt="Image" />
                            <h5>HTML</h5>
                        </div>
                        <div className="item">
                        <img src={"https://img.freepik.com/free-icon/css_318-698167.jpg?w=2000"} alt="Image" />
                        <h5>CSS</h5>
                    </div>
                    <div className="item">
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"} alt="Image" />
                    <h5>Boostrap</h5>
                </div>

                <div className="item">
                <img src={"https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png"} alt="Image" />
                <h5>Chakra UI</h5>
            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
// <div id="tech-stack">
// <div class="techstacklogodiv">  <img id="reactlogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="">
// </div>
// <div class="techstacklogodiv">  <img id="nodejslogo" src="" alt="">
// </div>
// <div class="techstacklogodiv">  <img id="expresslogo" src="" alt="">
// </div>
// <div class="techstacklogodiv">  <img id="mongodblogo" src="" alt="">
// </div>
// <div class="techstacklogodiv">  <img id="mysqllogo" src="" alt="">
// </div>
// <div class="techstacklogodiv">  <img id="linuxlogo" src="" alt="">
// </div>
// <div class="techstacklogodiv">  <img id="redislogo" src="" alt="" srcset="">
// </div>
// </div>
// <div class="techstacklogodiv">  <img id="jslogo" src="" alt="">
// </div>
// <div class="techstacklogodiv">  <img id ="csslogo" src=  ""
//   alt="">
// </div>
// <div class="techstacklogodiv">  <img id="bootstraplogo" src="" alt="">
// </div>
// <div class="techstacklogodiv">  <img id="reduxlogo" src="https://cdn.iconscout.com/icon/free/png-256/redux-3627245-3029653.png" alt="">
// </div>
// <div id="chakradiv">  <img id="chakralogo" src="" alt="">
// </div>  
//   </div>
