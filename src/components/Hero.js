import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
      <video src='/videos/video.mp4' autoPlay loop muted></video>
      <h1>Climate Control</h1>
      <p>Needs to change Now. Not tomorrow</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          Get Started
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
          Watch Trailer <i className='far fa-play-circle'></i>
        </Button>
      </div>
    </div>
  );
}

export default Hero;
