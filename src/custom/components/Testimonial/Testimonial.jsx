// import React from 'react';
import TestimonialCard from './TestimonialCard'; 
import './Testimonial.scss'; 
import React, { useEffect, useRef,useCallback } from 'react';

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "pavan goda",
      image: "/assets/pavan goda.png",
      review: "We had a great experience with Unais. We had our journey throughout kerala for 7days with him. He is excellent and more friendly guy. I definitely recommend his services to every traveller who are coming to Kerala. He is supportive. Thanks and looking forward for more.",
      rating: 5,
    },
    {
      id: 2,
      name: "Hemant Choudhary",
      image: "/assets/Hemant Choudhary.png",
      review: "Great services provided by Unais. We are very thankful for his car driving skills and it made our kerla trip very successful.",
      rating: 5,
    },
    {
      id: 3,
      name: "Muhsin Kochu",
      image: "/assets/Muhsin Kochu.png",
      review: "Nice service. Innocent and genuine persons ..I like..",
      rating: 5,
    },
    {     
      id: 4,   
      name: "Ketan Naik",
      image: "/assets/Ketan Naik.png",
      review: "Had a great time in kerela for 5 days. Mallu cabs provided a great service. Our driver Mr.  Yonus helped us a lot.He was very friendly, helpfull and knew all the places very well. Will recommend Allu Cabs to my friends for a safe travel in Kerala.",
      rating: 5,
    },    
    {
      id: 5,
      name: "Dr. Ratul Maji",
      image: "/assets/Dr. Ratul Maji.png",
      review: "Amazing service by Mr. Sakeer. Highly recommended.",
      rating: 5,
    },
    {
      id: 6,
      name: "Jinsi Zakkaria",
      image: "/assets/Jinsi Zakkaria.png",
      review: "Good service nd nice atmosphere for traveling... Cleaned car",
      rating: 5,
    },
    {
      id: 7,
      name: "Monish Kumar",
      image: null,
      review: "A very professional service group. I recently hired car for my trip from Kochi to Munnar and back for 4 days. Operator gave personal touch and ensured that i get all comfort in the entire trip. Car quality superb. A very safe driving. Driver very polite and prompt.",
      rating: 5,
    },
    {
      id: 8,
      name: "Kotni Patro",
      image: "/assets/Kotni Patro.png",
      review: "It was a nice experience. Thank you yusuf",
      rating: 5,
    },
    {
      id: 9,
      name: "srujan kumar",
      image: null,
      review: "It was an amazing experience with all cab service, especially the driver (Mr Yunus) helped us to cover almost all places in munnar,Alleppey and kochi for a 4 days trip and very polite, friendly. Thank you once again to Allu cabs.",
      rating: 5,
    },
  {
    id: 10,
    name: "mubashir Hussain",
    image: null,
    review: "Shahab my driver is a professional fellow, highly mannered and expert driver. Calm and composed and at the same time very much focused upon his job.Made my trip to Cochin and munnar worth remembering. Highly recommend",
    rating: 5,
  },

  {
    id: 11,
    name: "Rasif Rasi",
    image: "/assets/Rasif Rasi.png",
    review: "Excellent Services provided. Booking experience was smooth and easy with Mr. Alhan. Our Chauffer was Mr. Junaid who was always polite, soft spoken and respectful. His driving skills were impeccable and we had a very good holiday in Munnar and Thekkady",
    rating: 5,
  },

  {
    id: 12,
    name: "jyotiranjan satapathy",
    image: "/assets/jyotiranjan satapathy.png",
    review: "Excellent cab services. Vehicles are well maintained and clean. My chauffeur Mr Sunil parekattu was polite enough for me to consider him as my chauffeur for my future tour",
    rating: 5,
  },

  {
    id: 13,
    name: "Vinil Simson",
    image: null,
    review: "We hired the taxi services for a week during our Kerala trip. The vehicle provided was a good one and our driver yonus was very helpful and a reliable person.highly recommended…👌🏻 …",
    rating: 5, 
  },
  {
    id: 14,
    name: "ASIL KHAN",
    image: "/assets/ASIL KHAN.png",
    review: "100% happy with their service. Specially mentioning abt friendly approach towards customers and affordable pricing too!",
    rating: 5,
  },


    {
    id: 15,
    name: "ANAGHA m",
    image: "/assets/ANAGHA m.png",
    review: "Moindeen gave a great experience for our kerala trip..very professional and has knowledge of all places",
    rating: 5,
  },
  {
    id: 16,
    name: "Anvesha Tummala",
    image: "/assets/Anvesha Tummala.png",
    review: "Our's was completely unplanned last minute trip n 3 of us were girls. So we were lil worried abt safety issues. Then v got to knw abt allu cabs from one of our friends. The car was in good condition and the driver was so friendly n made us feel like we were in safe hands. He made our 5 days of journey so cool n comfortable... trip with great memories n v r very thankful to u..🤗",
    rating: 5,
  },

  {
    id: 17,
    name: "Junaijc Junu",
    image: "/assets/Junaijc Junu.png",
    review: "Wonderful and comfortable experience the car was also well maintained and specially mr ansu was an amazing gentleman he was always there for us according to our requirements made our kerela trip more memorable I must recommend this cab services and specially mr ansu thank you 😊 …",
    rating: 5,
  },
    {
    id: 18,
    name: "Adwaith KS",
    image: null,
    review: "Finest Service. Best in Class!",
    rating: 5,
  },
  {
    id: 19,
    name: "Mamitha",
    image: "/assets/mamitha.jpeg",
    review: "Awesome service! Professional dealing. Highly Recommending!",
    rating: 5,
  },
  {
    id: 20,
    name: "Amrita",
    image: "/assets/amrita.jpeg",
    review: "Service has been excellent! The driver was very polite, professional as well as very accomodating. Also the fare was reasonable.",
    rating: 5,
  },
  {
    id: 21,
    name: "Libin K Varkey",
    image: "/assets/libin.jpeg",
    review: "It was a different experience altogether with Allu Cabs. Very friendly driver and neat driving. Strongly recommending Allu Cabs!",
    rating: 5,
  },
  {
    id: 22,
    name: "Unaise",
    image: "/assets/unaise.jpeg",
    review: "Roaming around in Kerala with Allu Cabs is not only a wonderful, but also an affordable experience. Just want to give a shoutout to my driver",
    rating: 5,
  },

  ];


  // const carouselRef = useRef(null);
  // const scrollIntervalRef = useRef(null);

  // useEffect(() => {
  //   const container = carouselRef.current;
  //   const isMobile = window.innerWidth <= 768;
  //   let currentIndex = 0;

  //   const scrollCards = () => {
  //     if (!container) return;

  //     const cardWidth = isMobile
  //       ? (window.innerWidth * 0.9) + 20 // 90vw + 20px margin
  //       : 300; // estimated width for desktop cards

  //     const maxIndex = Math.floor(container.scrollWidth / cardWidth) - 1;
  //     currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;

  //     let scrollLeft = currentIndex * cardWidth;

  //     if (isMobile) {
  //       const viewportWidth = window.innerWidth;
  //       const visibleCardWidth = viewportWidth * 0.9;
  //       scrollLeft = (cardWidth * currentIndex) - ((viewportWidth - visibleCardWidth) / 2);
  //     }

  //     container.scrollTo({
  //       left: scrollLeft,
  //       behavior: 'smooth',
  //     });
  //   };

  // scrollIntervalRef.current = setInterval(scrollCards, 5000);

  // return () => clearInterval(scrollIntervalRef.current);
  // }, []);
  
  const carouselRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const currentIndexRef = useRef(0); 

  // useCallback to memoize the scrollCards function
    const scrollCards = useCallback(() => {
    const container = carouselRef.current;
    if (!container || container.children.length === 0) {
      // Clear interval if no container or no cards to prevent errors
      clearInterval(scrollIntervalRef.current);
      return;
    }

    const isMobile = window.innerWidth <= 768;
    const firstCard = container.children[0];

    // Get actual card width including margins using getComputedStyle
    const cardStyle = window.getComputedStyle(firstCard);
    const cardMarginRight = parseFloat(cardStyle.marginRight);
    const cardWidth = firstCard.offsetWidth + cardMarginRight;

    const maxIndex = container.children.length - 1;

    
    currentIndexRef.current = currentIndexRef.current < maxIndex ? currentIndexRef.current + 1 : 0;

    let scrollLeft = currentIndexRef.current * cardWidth;

    
    if (isMobile) {
      const viewportWidth = window.innerWidth;
      const visibleCardWidth = viewportWidth * 0.9;
      // Calculate the offset needed to center the card
      scrollLeft = (currentIndexRef.current * cardWidth) - ((viewportWidth - visibleCardWidth) / 2);

      // Ensure we don't scroll beyond the actual scrollWidth bounds
      scrollLeft = Math.max(0, Math.min(scrollLeft, container.scrollWidth - container.clientWidth));
    }

    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    });
  }, []); // Empty dependency array means this function is created once

  useEffect(() => {
    // Initial scroll and interval setup
    scrollIntervalRef.current = setInterval(scrollCards, 5000);

    // Function to handle window resize
    const handleResize = () => {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = setInterval(scrollCards, 5000);
  
      currentIndexRef.current = 0;
      // Immediately scroll to the first card to reflect new sizing
      if (carouselRef.current) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    };

    // Add resize listener
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(scrollIntervalRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollCards]);

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">
          What Our Guests Say
        </h2>
               
        <div className="testimonials-carousel" ref={carouselRef}>
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
                
        <div className="scroll-indicator">
          ← Swipe to see more testimonials →
        </div>
        
        {/* Review Button */}
        <div className="add-review-button-wrapper">
          <button
            onClick={() => {        
              window.open('https://www.google.com/maps/place/Allu+cabs+cochin/@9.9552796,76.3172433,17z/data=!3m1!4b1!4m6!3m5!1s0x3b08732cf0d947cf:0xbcbad566f6388da8!8m2!3d9.9552796!4d76.3198182!16s%2Fg%2F11rvhb7pkv?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D', '_blank');
            }}
            className="add-review-button"
          >
            
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="white"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="white"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="white"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="white"/>
            </svg>
            Write a Review on Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;