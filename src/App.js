import React, { useState, useEffect } from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Heading from './component/heading/Heading';
import Gospel from './component/body/gospel/Gospel';
import Schedule from './component/body/schedule/Schedule';
import Body from './component/body/Body';
import News from './component/body/News';
import Footer from './component/footer/Footer';
import Donation from './component/body/donation/Donation';
import LeadersData from './component/body/LeadersData';
import Testimony from './component/body/testimony/Testimony';
import GoogleMap from './component/map/GoogleMap';
import Contact from './component/contact/Contact';


const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300); // Show the button when scrolled 300px or more
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   
      <div>
        
        <Heading />
        <Body />
        <Gospel />
        <Schedule />
        <LeadersData />
        <Testimony />
        <Donation />
        <News />
        <GoogleMap />

        <Contact/>

        <Footer />

        <button
          className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
       
     </div>
  );
};

export default App;


// begining day this page THU,MAY 25, 2:00PM
 
