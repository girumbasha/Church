import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import './gospel/HeadGospel.css';
import placeholder from './BibleImage.jpg';

import './Body.css';
import Contact from '../contact/Contact';

function Body() {
  return (
    <div>
      <div className="container-body">
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to In Christ Love World Light Church</h1>
            <p>Join us in worship, community, and service.</p>
            <a href="#ministry" className="btn">
              See More
            </a>
          </div>
        </section>

        <FaMapMarkerAlt size={13} color="grey" />
        <span className="location-title">Hawassa, Ethiopia</span>

        <div className="app__first_paragraph-container">
          <p className="app__first_paragraph">
            <i>
              <b>Bekrstos Fkir Yealem Brihan Church </b>
            </i>
            is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ullam necessitatibus, labore quos quaerat
            esse! Similique, exercitationem, sed libero et amet quas natus assumenda placeat dignissimos, sunt cum
            omnis labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repellat quisquam eius cum
            vel sapiente doloremque non quos dolore reiciendis nostrum voluptatibus iste vero quod, nemo, voluptatum
            eum. Numquam, labore.
          </p>
        </div>

        <div className="gospel-container">
          <div className="image-container">
            <img src={placeholder} alt="Gospel" className="gospel-image" />
          </div>
          <div className="text-container">
            <h2 className="description-title">What is Gospel</h2>
            <p className="description-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus risus ut eleifend aliquam. Vivamus
              at nisl lacus. Morbi at suscipit enim, eu dictum elit. Quisque in mauris sed ligula tristique tempus ac
              a justo. Sed sed efficitur purus, in finibus elit. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Tenetur magni consectetur nemo culpa voluptatum, harum iste delectus labore blanditiis nulla
              voluptas neque dolor eius numquam necessitatibus accusantium quia quasi voluptates.
            </p>
          </div>
        </div>

        <div id="ministry">
          <div className="ministry-container">
            <h2 className="ministry-title">
              <marque>OUR MINISTRY</marque>
            </h2>

            <div className="app__blog-container">
              <div className="app__first_blog-container">
                <div className="app__paragraph">
                  <h2 className="app__paragraph-title">Worship Ministry</h2>
                  <p className="app__paragraph-first">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestiae dolorem cum sunt itaque
                    perspiciatis, similique, doloribus culpa fuga hic esse mollitia incidunt laudantium excepturi, amet
                    voluptatem est sapiente provident?
                  </p>
                </div>

                <div className="app__paragraph">
                  <h2 className="app__paragraph-title">Children's Ministry</h2>
                  <p className="app__paragraph-first">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestiae dolorem cum sunt itaque
                    perspiciatis, similique, doloribus culpa fuga hic esse mollitia incidunt laudantium excepturi, amet
                    voluptatem est sapiente provident?
                  </p>
                </div>
              </div>

              <div className="app__first_blog-container">
                <div className="app__paragraph">
                  <h2 className="app__paragraph-title">Youth Ministry</h2>
                  <p className="app__paragraph-first">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestiae dolorem cum sunt itaque
                    perspiciatis, similique, doloribus culpa fuga hic esse mollitia incidunt laudantium excepturi, amet
                    voluptatem est sapiente provident?
                  </p>
                </div>

                <div className="app__paragraph">
                  <h2 className="app__paragraph-title">Women's Ministry</h2>
                  <p className="app__paragraph-first">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestiae dolorem cum sunt itaque
                    perspiciatis, similique, doloribus culpa fuga hic esse mollitia incidunt laudantium excepturi, amet
                    voluptatem est sapiente provident?
                  </p>
                </div>
              </div>

              <div className="app__first_blog-container">
                <div className="app__paragraph">
                  <h2 className="app__paragraph-title">Outreach Ministry</h2>
                  <p className="app__paragraph-first">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestiae dolorem cum sunt itaque
                    perspiciatis, similique, doloribus culpa fuga hic esse mollitia incidunt laudantium excepturi, amet
                    voluptatem est sapiente provident?
                  </p>
                </div>

                <div className="app__paragraph">
                  <h2 className="app__paragraph-title">Missions and Global Outreach</h2>
                  <p className="app__paragraph-first">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestiae dolorem cum sunt itaque
                    perspiciatis, similique, doloribus culpa fuga hic esse mollitia incidunt laudantium excepturi, amet
                    voluptatem est sapiente provident?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="leader__info-container"></div>

          <div id="about-main-container">
            <h2 className="about__title">About Us</h2>
            <p className="about__content">
              Write clear, concise, and well-organized content that is easy to read and understand. Avoid excessive
              jargon or technical terms, and focus on conveying your message in a straightforward manner. Use headings,
              bullet points, and paragraphs to structure your content and improve readability.
            </p>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default Body;
