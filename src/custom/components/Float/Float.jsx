import React from 'react';
import './Float.scss';
import {BsWhatsapp} from 'react-icons/bs';
import {IoCall} from 'react-icons/io5';

function Float() {
  return (
    <div className='floater'>
      <div className="float-button-wrapper">
        <button 
          className='float-button call-float'
          onClick={() => window.open('tel:+917736433575', '_blank')}
          aria-label="Call us"
        >
          <IoCall />
        </button>
      </div>
      
      <div className="float-button-wrapper">
        <button 
          className='float-button whats-float'
          onClick={() => window.open('https://api.whatsapp.com/send?phone=+917736433575&text=Enquiring%20for%20available%20services%20-%20Allu%20Cabs%20Cochin', "_blank")}
          aria-label="Message on WhatsApp"
        >
          <BsWhatsapp />
        </button>
      </div>
    </div>
  );
}

export default Float;