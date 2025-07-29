import React, { useEffect, useState, useCallback, useMemo } from 'react'; 
import './PickTaxi.scss';
import { Carousel } from 'react-responsive-carousel';
import { FaCar, FaRupeeSign } from 'react-icons/fa'; 


const MOBILE_BREAKPOINT = 415;

function PickTaxi() {
    const [mobileSlider, setMobileSlider] = useState(false);
    const [sortBy, setSortBy] = useState('default');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const IMAGES = useMemo(() => [ 
        {
            id: 1,
            src: "/assets/car1.jpg",
            name: "Innova Crysta",
            basePrice: 3500,
            baseKm: 100,
            extraKmPrice: 23,
            category: 'premium',
            capacity: 7,
            altText: "Innova Crysta car" 
        },
        {
            id: 2,
            src: "/assets/car2.jpg",
            name: "Etios",
            basePrice: 2000,
            baseKm: 100,
            extraKmPrice: 16,
            category: 'sedan',
            capacity: 5,
            altText: "Etios sedan car" 
        },
        {
            id: 3,
            src: "/assets/car3.jpg",
            name: "Swift Dzire",
            basePrice: 2000,
            baseKm: 100,
            extraKmPrice: 16,
            category: 'sedan',
            capacity: 5,
            altText: "Swift Dzire sedan car" 
        },
        {
            id: 4,
            src: "/assets/car4.jpg",
            name: "Force Traveller",
            basePrice: 4000,
            baseKm: 100,
            extraKmPrice: 24,
            category: 'traveller',
            capacity: 12,
            altText: "Force Traveller van" 
        },
        {
            id: 5,
            src: "/assets/car6.jpg",
            name: "Ertiga",
            basePrice: 2500,
            baseKm: 100,
            extraKmPrice: 19,
            category: 'suv',
            capacity: 7,
            altText: "Ertiga SUV car" 
        },
        {
            id: 6,
            src: "/assets/car7.jpg",
            name: "Innova",
            basePrice: 2800,
            baseKm: 100,
            extraKmPrice: 21,
            category: 'premium',
            capacity: 7,
            altText: "Innova car" 
        },
        {
            id: 7,
            src: "/assets/car4.jpg",
            name: "Force Traveller",
            basePrice: 4500,
            baseKm: 100,
            extraKmPrice: 27,
            category: 'traveller',
            capacity: 14,
            altText: "Force Traveller van" 
        },
        {
            id: 8,
            src: "/assets/premiumcar.jpg",
            name: "Premium Cars",
            basePrice: 15000,
            baseKm: 80,
            extraKmPrice: 45,
            category: 'luxury',
            capacity: 4,
            duration: 8,
            altText: "Luxury car" 
        },
        {
            id: 9,
            src: "/assets/car4.jpg",
            name: "Force Traveller",
            basePrice: 6500,
            baseKm: 100,
            extraKmPrice: 32,
            category: 'traveller',
            capacity: 23,
            altText: "Force Traveller van" 
        },
        {
            id: 10,
            src: "/assets/car4.jpg",
            name: "Force Traveller",
            basePrice: 6500,
            baseKm: 100,
            extraKmPrice: 32,
            category: 'traveller',
            capacity: 26,
            altText: "Force Traveller van" 
        }
    ], []); 

    
    const filteredVehicles = useMemo(() => {
        let filtered = IMAGES; // Start with the original IMAGES array

        // Apply category filter
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(vehicle => vehicle.category === selectedCategory);
        }

        
        // Apply sorting
        const sorted = [...filtered]; 
        switch (sortBy) {
            case 'price-low':
                sorted.sort((a, b) => a.basePrice - b.basePrice);
                break;
            case 'price-high':
                sorted.sort((a, b) => b.basePrice - a.basePrice);
                break;
            case 'capacity':
                sorted.sort((a, b) => b.capacity - a.capacity);
                break;
            default:
                // No sorting needed for 'default', the order from filter is kept
                break;
        }
        return sorted;
    }, [IMAGES, selectedCategory, sortBy]); // Recalculate only when these dependencies change


    // Handle window resize for mobile slider
    const handleResize = useCallback(() => {
        setMobileSlider(window.innerWidth <= MOBILE_BREAKPOINT);
    }, []); 

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup on unmount
        };
    }, [handleResize]); 

    // Using React.memo to prevent re-rendering VehicleCard if its props haven't changed
    const VehicleCard = React.memo(({ vehicle }) => (
        <div className='vehicle-card'>
            <div className='vehicle-image-container'>
                {/* Use vehicle.altText for accessibility */}
                <img src={vehicle.src} loading="lazy" alt={vehicle.altText} /> 
                <div className='vehicle-category'>{vehicle.category}</div>
            </div>
            <div className='vehicle-details'>
                <h3>{vehicle.name}</h3>
                <div className='vehicle-specs'>
                    <span><FaCar aria-label="Car icon" /> {vehicle.capacity} Seater</span> 
                    <div className='price-details'>
                        <div className='base-price'>
                            <FaRupeeSign aria-label="Indian Rupee sign" />{vehicle.basePrice} 
                            <span>First {vehicle.baseKm}KM</span>
                        </div>
                        <div className='extra-price'>
                            +<FaRupeeSign aria-label="Indian Rupee sign" />{vehicle.extraKmPrice}/KM extra 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));


    return (
        <section className='section-picktaxi'>
            <div className='picktaxi-head'>
                <h1>Pick Your Taxi</h1>
                <p>Explore our modern fleet with a large number of options</p>
            </div>

            <div className='filters-section'>
                <div className='category-filters' role="group" aria-label="Vehicle categories"> 
                    {/* Render category buttons dynamically */}
                    {['all', 'sedan', 'suv', 'premium', 'luxury', 'traveller'].map(category => ( // Added 'traveller' category to buttons
                        <button
                            key={category} // Unique key for each button
                            className={selectedCategory === category ? 'active' : ''}
                            onClick={() => setSelectedCategory(category)}
                            aria-pressed={selectedCategory === category} 
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                <div className='sort-section'>
                    <label htmlFor="sort-select" className="visually-hidden">Sort by:</label> 
                    <select
                        id="sort-select" 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className='sort-select'
                        aria-label="Sort vehicles by" 
                    >
                        <option value="default">Sort By</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="capacity">Capacity (High to Low)</option> 
                    </select>
                </div>
            </div>

            <div className='additional-info'>
                {/* <p>Additional Charges: ₹500 Driver bata per day, Interstate Permit Charges.</p>  */}
                <></>
            </div>

            
            {filteredVehicles.length > 0 ? ( // Only render if there are vehicles
                !mobileSlider ? (
                    <div className='vehicles-grid' role="list"> 
                        {filteredVehicles.map(vehicle => (
                            <VehicleCard key={vehicle.id} vehicle={vehicle} />
                        ))}
                    </div>
                ) : (
                    <div className='vehicles-carousel' role="region" aria-label="Vehicle Carousel"> 
                        <Carousel
                            showThumbs={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            swipeable={true}
                            showStatus={false}
                            showArrows={true}
                            showIndicators={true}    
                            interval={3000}
                            
                        >
                            {filteredVehicles.map(vehicle => (
                                <div key={vehicle.id} className='carousel-slide' role="group" aria-roledescription="slide"> 
                                    <VehicleCard vehicle={vehicle} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                )
            ) : (
                <div className="no-vehicles-found">
                    <p>No vehicles found matching your criteria.</p>
                </div>
            )}
        </section>
    );
}

export default PickTaxi;