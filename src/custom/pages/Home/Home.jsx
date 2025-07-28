import React from 'react';
import Services from '../../components/Services/Services';
import PickTaxi from '../../components/PickTaxi/PickTaxi';
import Carousal from '../../components/Carousal/Carousal';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Packages from '../../components/Packages/Packages';
import TestimonialsSection from '../../components/Testimonial/Testimonial';
import Float from '../../components/Float/Float';
import Quickcontact from '../../components/QuickContact/Quickcontact';

function Home() {
  return (
    <>
        <Navbar />
        <Carousal />
        <TestimonialsSection />
        <Services />
        <PickTaxi />
        <Packages />
        <Quickcontact />
        {/* <Testimonial /> */}
        <Float />
        <Footer />
    </>
  )
}

export default Home