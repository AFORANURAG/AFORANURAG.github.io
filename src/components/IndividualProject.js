import { Col } from "react-bootstrap";

export const IndividualProject= ({ Name,title, description, imgUrl,href,github,TechStack,ProjectType}) => {
  return (
    <Col size={22}  sm={9} md={7} style={{marginLeft:"20%"}} >
      <div className="proj-imgbx">
        <img  className="projectimage"  src={imgUrl} />
        <div className="proj-txtx">
        <h1 style={{marginBottom:"20px",fontSize:"30px",fontWeight:"bold"}} >{description}</h1>
      
        <a href={href}>
        <h4 style={{marginBottom:"20px"}}>{title}</h4>
        </a>   
        
          <div style={{marginTop:"20px"}}>
          <a href={github}>
          <span style={{fontSize:"25px"}} >Github:</span>
           <img style={{width:"40px",marginLeft:"14%",position:"relative",top:"-30px"}} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>

          </a>
          </div>
          
<div style={{fontSize:"25px",marginBottom:"20px"}} >
Tech-Stack :
{TechStack}

</div>
<div style={{fontSize:"25px"}} >
Project-Type:
{ProjectType}
</div>

        </div>
      </div>
    </Col>
  )
}
