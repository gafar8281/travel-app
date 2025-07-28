import React from 'react';
import './Footer.scss';
import { BsFacebook, BsWhatsapp, BsInstagram, BsEnvelope, BsTelephone, BsGeoAlt } from 'react-icons/bs';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Company Info Section */}
          <div className="footer__section">
            <h2 className="footer__title">Allu Cabs Cochin</h2>
            <p className="footer__description">
              Offering unique taxi cab tours of Cochin/Ernakulam and the surrounding tourist places.
            </p>
            <div className="footer__social">
              <button 
                className="footer__social-btn"
                onClick={() => window.open('https://www.facebook.com/Allu-cabs-cochin-100973089207811/', '_blank')}
                aria-label="Facebook"
              >
                <BsFacebook />
              </button>
              <button 
                className="footer__social-btn"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=+917736433575&text=Enquiring%20for%20available%20services%20-%20Allu%20Cabs%20Cochin', '_blank')}
                aria-label="WhatsApp"
              >
                <BsWhatsapp />
              </button>
              <button 
                className="footer__social-btn"
                onClick={() => window.open('https://instagram.com/allu_cabs?utm_medium=copy_link', '_blank')}
                aria-label="Instagram"
              >
                <BsInstagram />
              </button>
            </div>
          </div>

          {/* Fleet Section */}
          <div className="footer__section">
            <h2 className="footer__title">Our Fleet</h2>
            <ul className="footer__list">
              <li>Toyota Innova Crysta</li>
              <li>Ford Aspire</li>
              <li>Toyota Etios</li>
              <li>Swift Dzire</li>
              <li>Maruti Suzuki Ertiga</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer__section">
            <h2 className="footer__title">Contact Us</h2>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <BsGeoAlt className="footer__icon" />
                <p>48/1238, Puthiyedath by Lane 1, Vytila, Ernakulam - 682019, Kerala</p>
              </div>
              <div className="footer__contact-item">
                <BsTelephone className="footer__icon" />
                <a href="tel:+917736433575">+91 77364 33575</a>
              </div>
              <div className="footer__contact-item">
                <BsEnvelope className="footer__icon" />
                <a href="mailto:allucabscochin@gmail.com">allucabscochin@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__container">
          <p className="footer__copyright">
            Copyright ©{currentYear} All rights reserved | Crafted with <span className="footer__heart">❤</span> by KS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;