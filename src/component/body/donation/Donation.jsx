import React from 'react';
import './Donation.css'; // Import the CSS file for styling

const PayPalDonateButton = () => {
  const buttonId = 'YOUR_BUTTON_ID';

  return (

   <>
   
    <div className="donations-section">
        
    <div id='donation-container'>
      


    <form action="https://www.paypal.com/donate" method="post" target="_blank">
      <input type="hidden" name="hosted_button_id" value={buttonId} />
      <h1 className='donation__title'>Online Donations</h1>
        <p>Offer a secure platform for online donations to support your church's operations.</p>
      <button className="paypal-button" type="submit">
        Donate with PayPal
      </button>
      <p className="bank-details"><b>Or you can choose</b><br/>
          Bank Name: Ethiopian Commercial Bank<br />
          Account Number:1000384475<br />
          Account Holder: Alem Brihan
        </p>
    </form>
    </div>
    </div>
    </>
  );
};

export default PayPalDonateButton;
