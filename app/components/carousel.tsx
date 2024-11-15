// 'use client';
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../styles/clients.css';
// import '../styles/mediaQuery.css';
// import { useEffect, useState } from 'react';

// export default function Carousel() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay:true,
//     autoplaySpeed:200

//   };
//   const [isVisible, setIsVisible] = useState(false);
//   const [isLogo,setLogoVisible] =useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const triggerPoint = window.innerHeight * 0.2;
//       const triggerPointLogo=window.innerHeight*0.2;
//       // Adjust this value as needed
//       setIsVisible(scrollTop > triggerPoint);
//       setLogoVisible(scrollTop > triggerPointLogo);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);


//   const clients = [{image: "images/mako-logo.png", largeImage: false},{image: "images/rajdeep.svg", largeImage: false},
//   {image: "images/suyash-logo.png", largeImage: false},{image: "images/anyo-logo.png", largeImage: false},
//   {image: "myTrackieBg.png", largeImage: false},{image: "images/nothernArc-logo.png", largeImage: true}

// ];


//   return (
//     // <div>
//     //   {/* <h2>Simple Slick Carousel</h2> */}
//     //   <Slider {...settings}>
//     //     <div>
//     //       <img src="images/mako-logo.png"/>
//     //     </div>
//     //     <div>
//     //     <img src="images/mako-logo.png"/>
//     //     </div>
//     //     <div>
//     //     <img src="images/mako-logo.png"/>
//     //     </div>
//     //     <div>
//     //     <img src="images/mako-logo.png"/>
//     //     </div>
//     //     <div>
//     //     <img src="images/mako-logo.png"/>
//     //     </div>
//     //   </Slider>
//     // </div>
//     <div id="clients-section  ">
//     <div  className={`scroll-animationPortfolio ${isVisible ? 'visiblesectionName mt-16' : ''}`}>
//     <div className="flex items-center justify-center ">
//       <hr className="separator"></hr>
//       <div className='section-title'>
//         OUR <span className='section-title-highlight'>CLIENTS</span>
//       </div>
//       <hr className="separator"></hr>
//     </div>
//     </div>
//     <div className={`scroll-animationClients ${isLogo ? 'visibleClients' : ''}`}>
    
   
//     <Slider {...settings} >

//       <div><h1>dskjcksd</h1></div>
//       <div><h1>dskjcksd</h1></div>
//       <div><h1>dskjcksd</h1></div>
//       <div><h1>dskjcksd</h1></div>
//       <div><h1>dskjcksd</h1></div>
//       <div><h1>dskjcksd</h1></div>
//        </Slider>
              
    
   
//     </div>
//   </div>
//   );
// };


'use client';
import { useState } from 'react';

const HorizontalCarousel = () => {
  const images = [
    "/resizedLogo/anyo-logo.png",
    "/resizedLogo/dhananjaya-logo.png",
    "/resizedLogo/ia-logo.png",
    "/resizedLogo/india-wasted-logo.png"
    // Add more image URLs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={prevImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default HorizontalCarousel;

