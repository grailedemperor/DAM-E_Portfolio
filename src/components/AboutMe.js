import React from "react";
import { ArrowRightCircle} from 'react-bootstrap-icons';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Contact from "./Contact";

const AboutMe = () => {

  const navigate = useNavigate();
  const navigateToContact = () => {
    // 👇️ navigate to /contacts
    navigate('/contact');
  };

  return (
    <div className="about-me">
      <a> 👑 AVATAR </a>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      <br></br>
      <ul className='aboutme-list'>
        <li className='aboutme-list-item'>Nigerian descent, Born and Raised in Los Angeles #SoCalBaby</li>
        <li className='aboutme-list-item'>Hobbies & Interests:</li>
        <li className='aboutme-list-item'> </li>
        <li className='aboutme-list-item'></li>
        <li className='aboutme-list-item'></li>
        <li className='aboutme-list-item'></li>
      </ul>
      <button onClick={navigateToContact} className="vvd"><span>Holla @ Me!<ArrowRightCircle size={25} /></span></button>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default AboutMe;


