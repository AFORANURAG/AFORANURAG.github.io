import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import React, { Component } from "react";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import myimage from "../assets/img/Anurag-Upadhyay-logo.jpg";
import { Image } from "@chakra-ui/react";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Homepage = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["A Full Stack Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home" style={{ marginTop: "-130px" }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div>
                <span className="tagline animate__animated animate__backInLeft">
                  I Trust You Are In Your Best Health
                </span>
                <h1
                  className="animate__animated animate__backInDown"
                  style={{
                    fontSize: "50px",
                    marginTop: "50px",
                    lineHeight: "70px",
                  }}
                >
                  {`Hello! I'm Anurag`}{" "}
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "A Full Stack Web Developer" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p
                  style={{
                    color: "white",
                    fontFamily: "Noto-serif",
                    fontSize: "20px",
                    marginTop: "50px",
                  }}
                  className="animate__animated animate__backInUp"
                >
                  I'm a tech enthusiast passionate about building things that
                  deliver real value. In the past, I’ve helped create several
                  AI-based products that serve thousands of users daily and
                  bring in hundreds of subscriptions each month. I’ve worked
                  with Go (Golang), Openai APIS, Langchain, Node.js, Next.js,
                  React.js, AWS, Mongodb and Docker. I’m adaptable, curious, and
                  always focused on creating solutions that make a meaningful
                  impact—versatility defines me best..{" "}
                </p>
              </div>
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              <Image
                className="tagline animate__animated animate__backInRight"
                w={"70%"}
                ml={10}
                mt={"100px"}
                borderRadius={"20px"}
                src={myimage}
                alt=""
              />
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
