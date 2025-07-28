import React, { useEffect, useState, useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousal.scss';

const carouselItems = [
    {
        image: "/assets/bannerinnova.jpg",
        title: "Cab Services In Cochin",
        subtitle: "Experience comfortable and reliable transportation"
    },
    {
        image: "/assets/greenery.png",
        title: "Kerala Holiday Packages",
        subtitle: "Discover the beauty of God's own country"
    },
    {
        image: "/assets/airportpackage.jpg",
        title: "Airport Pickup",
        subtitle: "Hassle-free airport transfers at your convenience"
    },
    {
        image: "/assets/weddingpackage.jpg",
        title: "Wedding Packages",
        subtitle: "Make your special day even more memorable"
    },
    {
        image: "/assets/boat.jpg",
        title: "Boating Packages",
        subtitle: "Explore the serene backwaters of Kerala"
    }
];

function Carousal() {
    
    const [isMobileView, setIsMobileView] = useState(false);
    const isMounted = useRef(true); 

    useEffect(() => {
        // Function to check and set mobile view status
        const checkMobileView = () => {
            if (isMounted.current) {
                setIsMobileView(window.innerWidth <= 768); 
            }
        };

        
        checkMobileView();

        window.addEventListener('resize', checkMobileView);

        return () => {
            isMounted.current = false; // Set ref to false on unmount
            window.removeEventListener('resize', checkMobileView);
        };
    }, []);

    return (
        <section className='section-carousel'>
            <Carousel
                className={`carousel ${isMobileView ? 'mobile-view' : ''}`} 
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                swipeable={true}
                showStatus={false}
                showArrows={true}
                // autoFocus={true} 
                stopOnHover={true}
                transitionTime={500}
                showIndicators={true}
                renderIndicator={(clickHandler, isSelected, index) => (
                    <div
                        className={`custom-indicator ${isSelected ? 'active' : ''}`}
                        onClick={clickHandler}
                        onKeyDown={clickHandler} 
                        role="button" 
                        tabIndex={0} 
                        aria-label={`Slide ${index + 1}`} 
                        key={index}
                    />
                )}
            >
                {carouselItems.map((item, index) => (
                    <div className='carousel-item' key={index}>
                        <div className='carousel-img'>
                            <img src={item.image} alt={item.title} /> 
                            <div className="content-overlay">
                                
                                {isMobileView ? (
                                    <div className="mobile-content">
                                        <h1 className="title">{item.title}</h1>
                                        <p className="subtitle">{item.subtitle}</p>
                                        <div className="swipe-indicator">
                                            <span className="swipe-text">Swipe</span>
                                            <svg className="swipe-arrow" viewBox="0 0 24 24">
                                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                            </svg>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <h1 className="title">{item.title}</h1>
                                        <p className="subtitle">{item.subtitle}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
}

export default Carousal;