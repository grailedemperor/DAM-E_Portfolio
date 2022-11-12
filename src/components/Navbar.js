import { Container, Nav, Navbar } from 'react-bootstrap';
import { useEffect, useState } from "react";
import logo from '../assets/img/slytherin.gif';
import { NavLink } from 'react-router-dom';
import wand from '../assets/img/wand.svg'

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');

  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
  }, [])


  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand>
            <NavLink to='/'>
            <img className='slytherin' src={logo} alt="logo" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <li><NavLink to="/" className={activeLink === 'home' ? 'active navbar-link  navi' : 'navbar-link navi'} onClick={() => onUpdateActiveLink('home')}>Home <img className= 'wand' src={wand} alt="wand"/></NavLink></li>
              <li><NavLink to="/aboutme" className={activeLink === 'aboutme' ? 'active navbar-link navi' : 'navbar-link navi'} onClick={() => onUpdateActiveLink('aboutme')}>About <img className= 'wand' src={wand} alt="wand"/></NavLink></li>
              <li><NavLink to="/portfolio" className={activeLink === 'portfolio' ? 'active navbar-link navi' : 'navbar-link navi'} onClick={() => onUpdateActiveLink('portfolio')}>Portfolio <img className= 'wand' src={wand} alt="wand"/></NavLink></li>
              <li><NavLink to="/resume" className={activeLink === 'resume' ? 'active navbar-link navi' : 'navbar-link navi'} onClick={() => onUpdateActiveLink('resume')}>Resume <img className= 'wand' src={wand} alt="wand"/></NavLink></li>
              <li><NavLink to="/contact" className={activeLink === 'contact' ? 'active navbar-link navi' : 'navbar-link navi'} onClick={() => onUpdateActiveLink('contact')}>Contact <img className= 'wand' src={wand} alt="wand"/></NavLink></li>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
};

export default NavBar;