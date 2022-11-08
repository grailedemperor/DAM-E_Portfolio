import React, { useState } from "react";


function Nav() {
  return (
    <Nav className="">
       <h1 className="" onClick={handleClick}>WORLD OF DAM-E</h1>
       <h1 className="" onClick={handleClick}>About Me</h1>
       <h1 className="" onClick={handleClick}>Portfolio</h1>
       <h1 className="" onClick={handleClick}>Resume</h1>
       <h1 className="" onClick={handleClick}>Contact</h1>
    </Nav>
  );
}

export default Nav;