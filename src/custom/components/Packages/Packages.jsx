import React, { useState } from 'react';
import './Packages.scss';

function Packages() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const packages = [
    {
      "id": 1,
      "name": "Kerala Scenic Trip",
      "image": "/assets/kochi-image.jpg",
      "duration": "6 Days / 5 Nights",
      "price": "₹12,000",
      "highlights": [
        "Kochi ",
        "Munnar",
        "Thekkady ",
        "Alleppey",
        "Kochi Drop-off"
      ],
      "description": "Explore Munnar, Thekkady, and Alleppey in a 6-day Kerala road trip. Ideal for small groups."
    },
    {
      "id": 2,
      "name": "Kochi-Munnar-Alleppey",
      "image": '/assets/alleppey.jpg',
      "duration": "5 Days / 4 Nights",
      "price": "₹10,000",
      "highlights": [
        "Kochi",
        "Munnar",
        "Alleppey",
        "Kochi Drop-off"
      ],
      "description": "Compact 5-day Kerala trip covering hills and backwaters, perfect for small groups."
    },
    {
      "id": 3,
      "name": "Kerala Tour",
      "image": '/assets/munnar.jpg',
      "duration": "9 Days / 8 Nights",
      "price": "₹22,800",
      "highlights": [
        "Kochi",
        "Athirappilly",
        "Munnar",
        "Thekkady",
        "Alleppey",
        "Varkala",
        "Kovalam",
        "Trivandrum",
        "Kanyakumari"
      ],
      "description": "9-day Kerala trip covering hill stations, backwaters, beaches, and city sights. Trivandrum drop-off included."
    },
    
  
    {
      "id": 4,
      "name": "Kerala Round Trip",
      "image": '/assets/varakla-cliff.jpg',
      "duration": "7 Days / 6 Nights",
      "price": "₹18,000",
      "highlights": [
        "Kochi",
        "Munnar",
        "Thekkady",
        "Alleppey",
        "Varkala",
        "Trivandrum"
      ],
      "description": "A 7-day Kerala road trip covering hills, backwaters, and beaches. Ideal for up to 3 persons."
    },
    
  ];

  const faqs = [
    {
      id: 1,
      question: "What does Allu Cabs Cochin offer in Kerala?",
      answer: "We offer personalized Kerala tour packages—from Alleppey houseboat cruises to Munnar hill escapes. Enjoy authentic local experiences, free travel planning, and warm hospitality, all tailored for a safe and unforgettable trip."
    },
    {
      id: 2,
      question: "Can I customize these packages?",
      answer: "Yes! All our packages can be customized to meet your specific needs. Contact our team for personalized modifications to any package."
    },
    {
      id: 3,
      question: "What's the best time to visit Kerala?",
      answer: "The winter months from October to March are generally considered the best time to visit Kerala due to pleasant weather, ideal for exploring backwaters, beaches, and enjoying festivals. Alternatively, the monsoon season from June to September offers a unique experience with lush landscapes."
    },
    {
      id: 4,
      question: "How do I book a package?",
      answer: "You can book a package by contacting our team through phone, email, or the contact form on our website. We'll guide you through the booking process."
    }
  ];

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="packages">
      <div className="packages-head">
        <h1>Most Popular Holiday Packages</h1>
        <p>Experience the best of Kerala with our carefully curated holiday packages</p>
      </div>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <div className="package-image">
              <img src={pkg.image} alt={pkg.name} />
              <div className="package-price">{pkg.price}</div>
            </div>
            <div className="package-content">
              <h3>{pkg.name}</h3>
              <p className="duration">{pkg.duration}</p>
              <p className="description">{pkg.description}</p>
              <div className="highlights">
                <h4>Highlights:</h4>
                <ul>
                  {pkg.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="custom-tour-section">
        <h2>Can't Find Your Perfect Trip?</h2>
        <p>
          Let us craft a personalized Kerala tour tailored to your unique preferences.
          From specific destinations to preferred activities and budget, we'll design
          an unforgettable itinerary just for you.
        </p>
        <button className="custom-tour-button"
          onClick={() => window.open('https://api.whatsapp.com/send?phone=+917736433575&text=Enquiring%20for%20available%20services%20-%20Allu%20Cabs%20Cochin', "_blank")}        
        >
          Design Your Custom Tour
        </button>
      </div>


      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <div 
                className={`faq-question ${activeQuestion === faq.id ? 'active' : ''}`}
                onClick={() => toggleQuestion(faq.id)}
              >
                {faq.question}
                <span className="faq-icon">{activeQuestion === faq.id ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeQuestion === faq.id ? 'active' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Packages;


