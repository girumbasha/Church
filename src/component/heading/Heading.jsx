import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineCancel} from 'react-icons/md';

import './Heading.css';
function Heading() {
  const [toggleMenu,setToggleMenu] =useState(false);


 
  return (
    
      <nav>
          <div className="container" >
            <p id="header__logo">
           WorldLove
            </p>
           

            <div class="links">
              <ul>
                <li>
                  <a  className='active' href="#header">Home</a>
                </li>
                <li>
                  <a href="#about-main-container">About</a>
                </li>
               
                <li>
                  <a href="#schedule"> Schedule</a>
                </li>
                <li>
                  <a href="#footer-contact">Contact</a>
                </li>
                <li>
                  <a href="#donation-container">Donate</a>
                </li>
                
              </ul>
            </div>
           

            {/* <div className="hamburger-menu">
              <div className="bar"></div>
            </div> */}
          </div>

  {/* small screen */}
<div className='app__navbar-smallscreen'>
  <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
  {toggleMenu && (
    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <MdOutlineCancel fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />

      <ul className='app__navbar-smallscreen_links'>
        <li className='p__opensans'>
          <a className='active' href='#header' onClick={() => setToggleMenu(false)}>Home</a>
        </li>
        <li className='p__opensans'>
          <a href='#about-main-container' onClick={() => setToggleMenu(false)}>About</a>
        </li>
        <li className='p__opensans'>
          <a href='#schedule' onClick={() => setToggleMenu(false)}>Schedule</a>
        </li>
        <li className='p__opensans'>
          <a href='#footer-contact' onClick={() => setToggleMenu(false)}>Mission</a>
        </li>
        <li className='p__opensans'>
          <a href='#donation-container' onClick={() => setToggleMenu(false)}>Donate</a>
        </li>
      </ul>
    </div>
  )}
</div>

        </nav> 

  )
}
export default Heading;
