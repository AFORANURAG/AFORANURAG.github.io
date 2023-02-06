
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Grid, GridItem } from '@chakra-ui/react'
export const Skills = () => {

  return (
    <section  className="skill" id="Skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Grid  templateColumns= {["repeat(1, 1fr)","repeat(3, 1fr)","repeat(6,1fr)"]} gap={6} wrap={"wrap"} direction={"row"}  >
                            <GridItem className="item">
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} alt="Image" />
                                <h5>React</h5>
                            </GridItem>
                            <GridItem className="item">
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"} alt="Image" />
                                <h5>Nodejs</h5>
                            </GridItem>
                            <GridItem className="item">
                                <img src={"https://www.geekandjob.com/uploads/wiki/2e5b0058b2d38158b21439fe06e9b8fabe3cb139.png"} alt="Image" />
                                <h5>Expressjs</h5>
                            </GridItem>
                            <GridItem className="item">
                                <img src={"https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg"} alt="Image" />
                                <h5>Mongo Db</h5>
                            </GridItem>


                            <GridItem className="item">
                                <img src={"https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png"} alt="Image" />
                                <h5> MySQL</h5>
                            </GridItem>
                            <GridItem className="item">
                                <img src={"https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png"} alt="Image" />
                                <h5>Linux</h5>
                            </GridItem>
                          
                           
                        </Grid>
<Grid  mt={20} templateColumns= {["repeat(1, 1fr)","repeat(3, 1fr)","repeat(6,1fr)"]}  gap={6} >
<GridItem className="item">
<img src={"https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg"} alt="Image" />
<h5 >Redis</h5>
</GridItem>
<GridItem  className="item">
<img src={"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"} alt="Image" />
<h5>JS</h5>
</GridItem>


<GridItem className="item">
<img src={"https://cdn-icons-png.flaticon.com/512/143/143655.png"} alt="Image" />
<h5>HTML</h5>
</GridItem>
<GridItem className="item">
<img src={"https://img.freepik.com/free-icon/css_318-698167.jpg?w=2000"} alt="Image" />
<h5>CSS</h5>
</GridItem>
<GridItem className="item">
<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"} alt="Image" />
<h5>Boostrap</h5>
</GridItem>

<GridItem className="item">
<img src={"https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png"} alt="Image" />
<h5>Chakra UI</h5>
</GridItem>

</Grid>

                    </div>
                </div>
            </div>
        </div>
        
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
