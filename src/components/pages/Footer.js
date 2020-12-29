import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the fight to stop Climate change to receive and email on how to
          contribute.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='footer-input'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Spread the Word</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Spread the Word</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Spread the Word</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Spread the Word</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              climaNow <i className='fab fa-typo3'></i>
            </Link>
          </div>
          <small className='website-rights'>climaNow 2020</small>
          <div className='social-icons'>
            <Link className='social-icon-link facebook' to='/' target='_blank'>
              <i className='fab fa-facebook-f'></i>
            </Link>
            <Link className='social-icon-link instagram' to='/' target='_blank'>
              <i className='fab fa-instagram'></i>
            </Link>
            <Link className='social-icon-link twitter' to='/' target='_blank'>
              <i className='fab fa-twitter'></i>
            </Link>
            <Link className='social-icon-link linkedin' to='/' target='_blank'>
              <i className='fab fa-linkedin'></i>
            </Link>
            <Link className='social-icon-link youtube' to='/' target='_blank'>
              <i className='fab fa-youtube'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
