import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/slytherin.gif';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/iconmonstr-github-1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <NavLink to='/'>
          <img className='slytherin' src={logo} alt="logo" />
            </NavLink>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2022. All Rights Reserved</p>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/emmanuel-delu-586695184/" target="_blank" rel="noopener"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/grailedemperor/" target="_blank" rel="noopener"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;