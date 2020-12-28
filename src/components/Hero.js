import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
      <video src='/video/video-2.mp4' autoPlay loop muted></video>
      <h1>Climate Control</h1>
      <p>Needs to change today, not tomorrow</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Hero;
