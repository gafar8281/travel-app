import React from 'react';
import './Services.scss';

function Services() {
  const servicesData = [
    {
      imgSrc: "/assets/airport.jpg",
      altText: "Airport pickup service with a car", 
      title: "Airport Pickup",
      description: "Arriving from abroad? We re here to ensure a safe and smooth journey to your destination. Just sit back, relax, and enjoy—no worries at all!",
    },
    {
      imgSrc: "/assets/taxi.jpg",
      altText: "Taxi car on a street",
      title: "Book Your Taxi",
      description: "Allu Cabs Cochin knows what their client expect and deserve, so all customers are treated with royalty. Our taxi rates are really affordable worth the money.",
    },
    {
      imgSrc: "/assets/holiday.jpg",
      altText: "Scenic holiday destination with a car", 
      title: "Holiday Packages",
      description: "We offer you exclusive Kerala Holiday Packages that will gift you and your family with a thrilling Kerala experience. We know the best places for chilling!",
    },
    {
      imgSrc: "/assets/honeymoon.jpg",
      altText: "Couple enjoying a honeymoon trip", 
      title: "Honeymoon Packages",
      description: "Create unforgettable memories with our Honeymoon Packages—romantic getaways, cozy stays, and personalized experiences for newlyweds.", 
    },
    {
      imgSrc: "/assets/boat.jpg",
      altText: "Houseboat on Kerala backwaters", 
      title: "Boating Packages",
      description: "Well, we operate our services on water too. How cool is that? Enjoy the beauty of Kerala on a boat ride and let this joy fill your heart.❤️",
    },
  ];

  return (
    <section className='section-services'>
      <div className='services-head'>
        <h1>Our Services</h1>
      </div>
      <div className='services-collection'>
        {servicesData.map((service, index) => (
          <div className='card' key={index}> 
            <div className='card-img'>
              <img src={service.imgSrc} alt={service.altText} />
            </div>
            <div className='card-desc'>
              <h1>{service.title}</h1>
              <h4>{service.description}</h4>
            </div>
            <div className='card-more'>
              <button
                onClick={() => window.open('https://api.whatsapp.com/send?phone=+917736433575&text=Enquiring%20for%20available%20services%20-%20Allu%20Cabs%20Cochin', "_blank")}        
              
              >Know More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;