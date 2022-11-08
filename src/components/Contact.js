import React, { useState } from 'react';
import { minMaxLength, validEmail } from './validations.js';

function Contact() {
    const [formErrors, setFormErrors] = useState({});
    function handleChange (e){
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
      }
  
    return (
    <form action="" method="get" className="form-example">
        <div className="FIND A CLASS">
            <label for="name">Name: </label>
            <input type="text" placeholder="Name" name="name" id="name" required> </input>
        </div>
        <div className="FIND A CLASS">
            <label for="email">Email: </label>
            <input type="email" placeholder="Email" name="email" id="email" required> </input>
        </div>
        <div className="FIND A CLASS">
            <label for="message">Message: </label>
            <input type="text" placeholder="Give Me The Deets!" name="message" id="message" required> </input>
        </div>
        <div className="FIND A CLASS">
            <input type="submit" value="Holla @ Me!"> </input>
        </div>
    </form>
  );
}

export default Contact;
