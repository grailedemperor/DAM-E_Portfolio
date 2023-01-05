import React from "react";
import { ArrowRightCircle} from 'react-bootstrap-icons';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Contact from "./Contact";
import Lakers from "../assets/img/lakers_logo.svg"
import Giants from "../assets/img/giants_logo.svg"

const AboutMe = () => {

  const navigate = useNavigate();
  const navigateToContact = () => {
    // 👇️ navigate to /contacts
    navigate('/contact');
  };

  return (
    <div className="about-me">
      <p id='name'> 👑 EMMANUEL DELU </p>
      <br></br>
      <br></br>
      <p>I've spent numerous years involved in requirements creation/management, data entry/interpretation, database management, data analysis, data compiling, and data reporting/presentation. I take joy in project management and administration tools because I’m expertly skilled at them. Plus, I always appreciate the opportunity to utilize my skills as well as gain more. My admin, sales/customer service (as a part time employee in my teens) and data analysis background throughout the years has really shaped the asset I have become because of my ability to see how decisions affect stakeholders in multiple facets. Recently, I’ve undertook web development to further the capabilities in my purview as well as enhance my ability to manage the development lifecycle. Enhancing the translation of requirements from client to developer is pivotal in maximizing the return on potential value to actual value.</p>
      <br></br>
      <ul className='aboutme-list'>
        <li className='aboutme-list-item'>Nigerian descent, Born and Raised in Los Angeles #SoCalBaby</li>
        <li className='aboutme-list-item'>Hobbies & Interests: Surfing/Swimming/Working Out, Music Composition and Production, Automating Admin/Project Management Activities through AI, Swing/Day Trading, Cybersecurity, Real Estate </li>
        <li className='aboutme-list-item'>Random fact: I'm a rehabing sweet tooth and I've never had a cavity.</li>
        <li className='aboutme-list-item'><img className="sports" alt='Lakers' src={Lakers}/> <img className="sports" alt='Giants' src={Giants}/> #LakeShow + #BigBlue Till I Die! </li>
        <li className='aboutme-list-item'>Cinephile's Notable Mentions: Hereditary, Dark Knight Trilogy, Game of Thrones </li>
        <li className='aboutme-list-item'>Aural Vibes: Reggae, Afro-Beat, Alternative, Vintage and Modern House, Tasteful Rap/Hip-Hop, Pop & R&B, Vintage & Modern Latin & Reggaeton </li>
      </ul>
      <button onClick={navigateToContact} className="vvd"><span>Holla @ Me!<ArrowRightCircle size={25} /></span></button>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default AboutMe;


