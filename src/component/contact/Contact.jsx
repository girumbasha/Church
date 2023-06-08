
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r8k7xap', 'template_ccdp105', form.current, 'Sdt8h6NMxAN6pnrkG')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  // Initialize emailjs library
  emailjs.init('Sdt8h6NMxAN6pnrkG');

  return (
    <div id ='contact_message'>
      <section>
      <div className='container'>
      <h2 className='text-center text-primary'>Contact Us</h2>
  <form ref={form} onSubmit={sendEmail} className='card flex-center dir-column border-0'>
  <div className='form-group'>
  <input type='text' placeholder='Full Name' name='user_name' required className='form-control mb-3' style={{ fontFamily: "'Cormorant Upright', serif" }} />
</div>
<div className='form-group'>
  <input type='email' placeholder='Email' name='user_email' required className='form-control mb-3' style={{ fontFamily: "'Cormorant Upright', serif" }} />
</div>
<div className='form-group'>
  <input type='text' placeholder='Title      (optional)' name='subject' className='form-control mb-3' style={{ fontFamily: "'Cormorant Upright', serif" }} />
</div>
<div className='form-group'>
  <textarea name='message' cols='30' rows='10' className='form-control mb-3' style={{ fontFamily: "'Cormorant Upright', serif" }}></textarea>
</div>

    <button type='submit' className='btn btn-primary text-center'style = {{width:'140px'}}>Send Message</button>
  </form>
</div>



      </section>
    </div>
  );
}

export default Contact;
