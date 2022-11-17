import { React, useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import bannerImg from '../assets/img/static-shock.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Contact from "./Contact";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Business Analyst", "Web Developer", "Software Engineer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(360 - Math.random() * 360)
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(30);
    }
  }

  const navigate = useNavigate();
  const navigateToContact = () => {
    // 👇️ navigate to /contacts
    navigate('/contact');
  };


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className='static'>
                  <span className="tagline">Welcome to DAM-E'S World 🌍 </span>
                  </div>
                  <div>
                  <h1>{``}
                    <span className="wrap">{text}</span></h1>
                  </div>
                  <div className='static'>
                  <p> Emmanuel...E...Dam(Duh-Ahh-M)..."Your Grace 👑"... <br></br>I can be referenced by many names. </p>
                  <button onClick={navigateToContact} className="vvd"><span>Holla @ Me!<ArrowRightCircle size={25} /></span></button>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={bannerImg} alt="BannerImg" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </section>
  )
};

export default Banner;