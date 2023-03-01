import { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { Heading } from '@chakra-ui/react'
import TrackVisibility from 'react-on-screen';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/Orion_github.svg';
//874 990 pixels
export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [width,setwidth]=useState(window.innerWidth)

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  useEffect(()=>{
    window.addEventListener("resize", ()=>{setwidth(window.innerWidth)});
    return ()=>{
    window.removeEventListener("resize",()=>{setwidth(window.innerWidth)}) 
    }
    
    },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  function redirector(e){
    console.log(e.target.id)
if(e.target.id==="linkedin"){
window.location.href="https://www.linkedin.com/in/anurag-upadhyay-9676b5239"
  
}else{
window.location.href="https://github.com/AFORANURAG"

}


  }
  return (
    <section  style={{marginTop:"100px"}} className="contact" id="ContactMe">
    <div style={{textAlign:"center",marginBottom:"150px"}}>
    <h1 style={{fontSize:"50px",fontFamily:"cursive"}}>
    Contact Me
    </h1>
    </div>
    
 
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          {width>600?<>
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/anurag-upadhyay-9676b5239"><img src={navIcon1} alt="" /></a>
           
            <label className="contactsbottom"  id="linkedin" htmlFor="" style={{fontSize:"25px",marginLeft:"20px"}}>
            Linkedin
            </label>
            <br />  
  
            <a style={{position:"relative",marginTop:"20px"}} href="https://github.com/AFORANURAG"><img color={"white" } style={{position:"relative"}} src={navIcon3} alt="" /></a>
            
            <label className="contactsbottom" onClick={redirector}  id="github" htmlFor="" style={{fontSize:"25px",marginLeft:"20px"}}>  Github </label>
            <br />
            
            <img  style={{width:"9%",position:"relative",top:"25px"}} src={"https://media1.giphy.com/media/aOften89vRbG/giphy.gif?cid=ecf05e47ohbe029qpyttfyosd23whv077l6ui282rr1y3584&rid=giphy.gif&ct=g"} alt="" />
            
  
            <label  htmlFor="" style={{fontSize:"25px",marginLeft:"15%",position:"relative",top:"-15px"}}>
          anuragupadhyay172912313@gmail.com
            </label>
          <br />
  
            <img  style={{width:"9%",position:"relative",top:"25px"}} src={"https://media0.giphy.com/media/3o6Mb5h1UQlrtoebK0/giphy.gif?cid=ecf05e477600t1ypd384dtb3o9wi0oepczh7vj7ktmgh8yta&rid=giphy.gif&ct=g "} alt="" />
            
  
            <label  htmlFor="" style={{fontSize:"25px",marginLeft:"15%",position:"relative",top:"-15px"}}>
        7836068460
            </label>
            </div>
            
            </>:<>
            
            <div style={{marginLeft:"20px",position:"relative",bottom:"100px"}} className="social-icon">
            <a href="https://www.linkedin.com/in/anurag-upadhyay-9676b5239"><img src={navIcon1} alt="" /></a>
           
            <label className="contactsbottom"  id="linkedin" htmlFor="" style={{fontSize:"25px",marginLeft:"20px"}}>
            Linkedin
            </label>
            <br />  
  
            <a style={{position:"relative",marginTop:"20px"}} href="https://github.com/AFORANURAG"><img color={"white" } style={{position:"relative"}} src={navIcon3} alt="" /></a>
            
            <label className="contactsbottom" onClick={redirector}  id="github" htmlFor="" style={{fontSize:"25px",marginLeft:"20px"}}>  Github </label>
            <br />
            
            <img  style={{width:"9%",position:"relative",top:"25px"}} src={"https://media1.giphy.com/media/aOften89vRbG/giphy.gif?cid=ecf05e47ohbe029qpyttfyosd23whv077l6ui282rr1y3584&rid=giphy.gif&ct=g"} alt="" />
            
  
            <div  htmlFor="" style={{fontSize:"25px",marginLeft:"15%",marginRight:"15%",position:"relative",top:"-15px"}}>
          anuragupadhyay172912313@gmail.com
            </div>
          <br />
  
            <img  style={{width:"9%",position:"relative"}} src={"https://media0.giphy.com/media/3o6Mb5h1UQlrtoebK0/giphy.gif?cid=ecf05e477600t1ypd384dtb3o9wi0oepczh7vj7ktmgh8yta&rid=giphy.gif&ct=g "} alt="" />
            
  
            <label  htmlFor="" style={{fontSize:"25px",marginLeft:"15%",position:"relative",top:"-30px"}}>
        7836068460
            </label>
            </div>
  
            
            </>}
          
         
{width>750&&width<1000?<>
  <TrackVisibility>
    {({ isVisible }) =>
                    <img style={{marginTop:"-150px"}} className={isVisible ? "animate__animated animate__zoomIn" : ""} src={"https://media1.giphy.com/media/4Xp5iQo8Iqnfi/giphy.gif?cid=ecf05e47fjdg3pdxckw4t38snanmfocml82fbll1r04gsr06&rid=giphy.gif&ct=g"} alt="Contact Us"/>
                  }
    </TrackVisibility>
  </>:<>
  
  <TrackVisibility>
  {({ isVisible }) =>
                  <img style={{marginTop:"-400px"}} className={isVisible ? "animate__animated animate__zoomIn" : ""} src={"https://media1.giphy.com/media/4Xp5iQo8Iqnfi/giphy.gif?cid=ecf05e47fjdg3pdxckw4t38snanmfocml82fbll1r04gsr06&rid=giphy.gif&ct=g"} alt="Contact Us"/>
                }
  </TrackVisibility>
  
  </>}


          </Col>
          <Col size={12} md={6} style={{marginTop:"200px"}}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
