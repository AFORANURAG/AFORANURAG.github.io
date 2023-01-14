import { Col } from "react-bootstrap";

export const IndividualProject= ({ title, description, imgUrl,href,github}) => {
  return (
    <Col size={22}  sm={9} md={7} style={{marginLeft:"20%"}} >
      <div className="proj-imgbx">
        <img  className="projectimage" src={imgUrl} />
        <div className="proj-txtx">
        <a href={href}>
        <h4>{title}</h4>
        </a>   
          <span>{description}</span>
          <a href={github}>
          <img style={{width:"50px",marginLeft:"45%",marginTop:"15px"}} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>

          </a>

        </div>
      </div>
    </Col>
  )
}
