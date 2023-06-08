import React from 'react';
import './Footer.css';



function Footer() {
  return (

    //Map 
    <footer id="footer">
    <div className="container">
     
      <div className="bottom-footer">
        

        <div id="footer-contact">
          <div className="followme">
            <h3 className='followme-title'>Contact Us</h3>
            <span className="footer-line"></span>
            <div className="social-media">
              <a href="#">
              <i className="phonenumber">Phone Number: 0911767265</i>
              </a>
              <a href="#">
                <i className="fab fa-twitter">@twitter</i>
              </a>
              <a href="#">
                <i className="fab fa-instagram">@facebook</i>
              </a>

              <div className="copyright">
          <p className="text">
            Copyright&copy;2023 All rights reserved | Made by
            <span className='maker-name'> <a href='#'>Girum Bahsa</a></span>
          </p>
        </div>
              <a href="#">
                <i className="fab fa-linkedin-in">My profile</i>
              </a>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  </footer>
    
  )
}
export default Footer;