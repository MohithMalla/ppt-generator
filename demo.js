import React from 'react';
import './App.css';
import vieo from './apinde.mp4';

export default function Intro({ onClose }) {
  return (
    <div className="vedodiv">
      
      <div>
        <p>
          Create Your Slide:<br/>
          1. Enter Title or Text:<br/>
          &emsp;Type the title or text you want to display on the slide in the entry box.<br/>
          2. Choose Your Option:<br/>
          &emsp;- Select With Image to add an image to your slide.<br/>
          &emsp;- Select Without Image to display only text.<br/>
          3. Select Your Image:<br/>
          &emsp;If you chose "With Image", browse and select the image you want to display on the slide.
        </p>
      </div>
      <video src={vieo} controls></video>
    </div>
  );
}
