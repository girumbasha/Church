import React from 'react';
import './Testimony.css'; // Import your CSS file for styling
import Biniyam from'./Biniyam.JPG'


function Testimony() {
  
  const testimonials = [
    {
      name: "Girum Bahsa",
      quote: "I have been a member of this church for years, and it has truly transformed my life. The community is supportive, the teachings are inspiring, and the sense of belonging is unmatched.",
      photo: Biniyam,
 
   
    },
    {
      name: "Selamawit Basha",
      quote: "Attending services at this church has been a breath of fresh air. The welcoming atmosphere, the heartfelt worship, and the impactful sermons have made a significant impact on my spiritual journey.",
      photo: Biniyam,
    
  },
    {
      name: "Bekele Nare",
      quote: "I recently joined this church, and I'm amazed by the love and acceptance I have received. The genuine care from the pastors and the friendships I've formed here have made me feel like I've found my spiritual home.",
      photo: Biniyam,
    }
  ];

  return (
    <div className="app">
      <h2 className="app__title">Testimonials and Reviews</h2>
      <div className="app__testimonials">
      {testimonials.map((testimonial, index) => (
  <div className="app__testimonial" key={index}>
    <img src={testimonial.photo} alt={testimonial.name} className="testimonials-photo" />
    <p className="app__testimonial-quote">{testimonial.quote}</p>
    <p className="app__testimonial-name">- {testimonial.name}</p>
  </div>
))}
</div>
    </div>
  );
}

export default Testimony;
