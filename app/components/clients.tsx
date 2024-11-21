'use client';

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/clients.css';
import '../styles/mediaQuery.css';
// import '../styles/styles.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function Clients() {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 600) {
        setSlidesToShow(2);
      }
    }
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding: '20px',  
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    adaptiveHeight: false

  };


  const [isVisible, setIsVisible] = useState(false);
  const [isLogo, setLogoVisible] = useState(false)

  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: logoRef, inView: logoInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsVisible(sectionInView);
  }, [sectionInView]);

  useEffect(() => {
    setLogoVisible(logoInView);
  }, [logoInView]);


  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const triggerPoint = window.innerHeight * 0.2;
  //     const triggerPointLogo = window.innerHeight * 0.2;
  //     // Adjust this value as needed
  //     setIsVisible(scrollTop > triggerPoint);
  //     setLogoVisible(scrollTop > triggerPointLogo);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  const clients = [
    //   { id: "1", image: "/resizedLogo/mako-logo.png", largeImage: false },

    //   {id: "2", image: "/resizedLogo/rajdeep-logo.png", largeImage: false },
    // {id: "3", image: "/resizedLogo/suyash-logo.png", largeImage: false }, { id: "4",image: "/resizedLogo/anyo-logo.png", largeImage: false },
    // {id: "5", image: "/resizedLogo/india-wasted-logo.png", largeImage: false }, {id: "6",image: "/resizedLogo/northern-arc-logo.png", largeImage: false },
    // {id: "7", image: "/resizedLogo/dhananjaya-logo.png", largeImage: false }, {id: "8", image: "/resizedLogo/ia-logo.png", largeImage: false },
    // {id: "9", image: "/resizedLogo/myTrackie-logo.png", largeImage: false }, {id: "10", image: "/resizedLogo/kivi-logo.png", largeImage: false },
    // {id: "11", image: "/resizedLogo/technoweld-logo.png", largeImage: false }

    { id: "1", image: "/clientsWebp/anyo-logo.webp" },

    { id: "2", image: "/clientsWebp/mako-logo.webp" },
    { id: "3", image: "/clientsWebp/vishnu-logo.webp" },

    { id: "4", image: "/clientsWebp/myTrackie-logo.webp" },
    { id: "5", image: "/clientsWebp/kivi-logo.webp" },

    { id: "6", image: "/clientsWebp/ia-logo.webp" },
    { id: "7", image: "/clientsWebp/india-wasted-logo.webp" },

    { id: "8", image: "/clientsWebp/northern-arc-logo.webp" },
    { id: "9", image: "/clientsWebp/rajdeep-logo.webp" },

    { id: "10", image: "/clientsWebp/suyash-logo.webp" },
    { id: "11", image: "/clientsWebp/technoweld-logo.webp" },
    { id: "12", image: "/clientsWebp/evo11ve_logo.webp" },
    { id: "13", image: "/clientsWebp/beanstalk_logo.webp" },
    { id: "13", image: "/clientsWebp/ibits_logo.webp" },

  ];
  // image:{"mako.svg", "rajdeep.svg", "suyash.svg", "anyoBg.png", "myTrackieBg.png","nothernArcBg.png"
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set the initial window width
      setWindowWidth(window.innerWidth);

      // Optional: Add a resize event listener
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  return (
    <div id="clients-section  " className="paddingClients">
      <div ref={sectionRef} className={`scroll-animationPortfolio ${isVisible ? 'visiblesectionName  mb-5' : ''}`}>
        <div className="flex items-center justify-center ">
          <hr className="separator"></hr>
          <div className='section-title clients-title-desktop mobilePaddingHeader'>
            OUR AMAZING <span className='section-title-highlight'>CLIENTS</span>
          </div>
          <div className='section-title clients-title-mobile mobilePaddingHeader'>
            OUR <span className='section-title-highlight'>CLIENTS</span>
          </div>
          <hr className="separator"></hr>
        </div>
      </div>
      <div ref={logoRef} className={`scroll-animationClients clients-logo-section flex justify-center ${isLogo ? 'visibleClients pl-3 pr-3' : 'pl-3 pr-3'}`}>

        {/* <div className={`scroll-animationClients ${isLogo ? 'client flex flex-row flex-wrap pr-10 pl-10' : ''}`}> */}
        {windowWidth < 1200 &&

          <Slider {...settings}>
            {clients.map((client, i) => (
              <React.Fragment key={i}>
                <div
                  className="flex justify-center mx-4 border-2 px-4 py-2 rounded-lg"
                >
                  <img
                    className="logo"
                    style={{
                      width: '180px',
                      height: '180px',
                      objectFit: 'contain',
                    }}
                    src={client.image}
                    alt={`Client ${i}`}
                  />
                </div>
              </React.Fragment>
            ))}
          </Slider>
        }
        {windowWidth > 1200 && <div className="flex flex-col align-center justify-wcenter  gap-4">
          {/* Row 1: 4 images */}
          <div className="flex justify-center gap-4">
            {clients.slice(0, 4).map((client, i) => (
              <div
                className="clientLogo border-2 px-2 py-4 rounded-lg"
                key={i}
                style={{ borderColor: '#D9D9D9' }}
              >
                <img
                  className="logo"
                  style={{ width: '250px', height: '250px', objectFit: 'contain' }}
                  src={client.image}
                  alt={`Client ${i}`}
                />
              </div>
            ))}
          </div>

          {/* Row 2: 3 images */}
          <div className="flex justify-center gap-4">
            {clients.slice(4, 7).map((client, i) => (
              <div
                className="clientLogo border-2 px-2 py-4 rounded-lg"
                key={i + 4}
                style={{ borderColor: '#D9D9D9' }}
              >
                <img
                  className="logo"
                  style={{ width: '250px', height: '250px', objectFit: 'contain' }}
                  src={client.image}
                  alt={`Client ${i + 4}`}
                />
              </div>
            ))}
          </div>

          {/* Row 3: 4 images */}
          <div className="flex justify-center gap-4">
            {clients.slice(7, 11).map((client, i) => (
              <div
                className="clientLogo border-2 px-2 py-4 rounded-lg"
                key={i + 7}
                style={{ borderColor: '#D9D9D9' }}
              >
                <img
                  className="logo"
                  style={{ width: '250px', height: '250px', objectFit: 'contain' }}
                  src={client.image}
                  alt={`Client ${i + 7}`}
                />
              </div>
            ))}
          </div>

          {/* Row 4: 3 images */}
          <div className="flex justify-center  gap-4">
            {clients.slice(11, 14).map((client, i) => (
              <div
                className="clientLogo border-2 px-2 py-4 rounded-lg"
                key={i + 11}
                style={{ borderColor: '#D9D9D9' }}
              >
                <img
                  className="logo"
                  style={{ width: '250px', height: '250px', objectFit: 'contain' }}
                  src={client.image}
                  alt={`Client ${i + 11}`}
                />
              </div>
            ))}
          </div>
        </div>}


      </div>
      <div id="Founder's"></div>
    </div>
  );
}