'use client';
import '../styles/styles.css';
import '../styles/services.css';
import '../styles/mediaQuery.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const theme = "default";
const images = {
    default: {
        "webApp": "/images/webDevelopment.png",
        "mobileApp": "/images/development.png",
        "uiux": "/images/uxGBlue.png",
        "aiml": "/images/brain.png"
    },
    light: {
        "webApp": "webAppOrange.png",
        "mobileApp": "mobileAppOrange.png",
        "uiux": "uxOrange.png",
        "aiml": "finalai.png"
    },
    dark: {
        "webApp": "webAppOrange.png",
        "mobileApp": "mobileAppOrange.png",
        "uiux": "uxOrange.png",
        "aiml": "finalai.png"
    }
}
const services = [
    {
        id: 1,
        image: images[theme].webApp,
        title: 'Web Applications ',
        list: [ 'JavaScript', 'NodeJS', 'Angular', 'ReactJS',' Java SpringBoot'],
        mobileContent:" JavaScript, NodeJS, Angular, ReactJS, Java SpringBoot"
    },
    {
        id: 2,
        image: images[theme].mobileApp,
        title: 'Mobile Applications',
        list: ["Flutter"," React Native"],
        mobileContent:" Flutter, React native"
    },
    {
        id: 3,
        image: images[theme].uiux,
        title: 'UX & UI Research',
        list: ['Elevate user experiences with our expert UI/UX design and consulting.'],
        mobileContent:"Elevate user experiences with our expert UI/UX design and consulting."
    },
    {
        id: 4,
        image: images[theme].aiml,
        title: 'AI & ML Applications',
        list: ['Unleashing the Power of Data and Machine Learning in Computer Vision and Language Processing. '],
        mobileContent:"Unleashing the Power of Data and Machine Learning in Computer Vision and Language Processing. "
    },
]

export default function Services() {
    const [isVisible, setIsVisible] = useState(false);

// useEffect(() => {
//   const handleScroll = () => {
//     const scrollTop = window.scrollY;
//     const triggerPoint = window.innerHeight * 1; // Adjust this value as needed
//     setIsVisible(scrollTop > triggerPoint);
//   };

//   window.addEventListener('scroll', handleScroll);
//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, []);

    const {ref:sectionRef,inView:sectionInView}=useInView({
     threshold:0.2,
     triggerOnce:true   
    })
    useEffect(()=>{
        setIsVisible(sectionInView)
    },[sectionInView])

    return (
        <div className=" flex flex-col servicesMain fontFamily ">
            <div ref={sectionRef} className={`scroll-animationServices ${isVisible ? 'visiblesectionName' : ''}`}>
            <div className="flex items-center justify-center">
                <hr className='separator'></hr>
                <label className="section-title mobilePaddingHeader">Our <span className="section-title section-title-highlight">Services</span></label>
                <hr className='separator'></hr>
            </div>
            </div>
            <div className={`scroll-animationServices ${isVisible ? 'visibleCard' : ''}`}>
            <div className="flex items-center justify-center  servicesWrapMedia ">
                {services.map((service, j) => (
                    <div className="service-card flex items-center justify-center gap-4" key={j} id={`service-${service.id}`} >
                        <div className="service-card-image flex  flex-col items-center justify-center ">
                            <img className="serviceImageWidth" key={j} src={service.image} />
                        </div>
                        
                        <div className="service-card-content">
                            
                            <label className="servicesCardText" key={j}><b>{service.title}</b></label>
                            <ol className="pt-4 fontFamily">
                                {service.list.map((listItem, i) => (<li className="font-semibold" key={i}>{listItem}</li>))}
                            </ol>
                            {/* <label className="text-black font-semibold"><u>Know More !</u></label> */}
                        </div>
                        <div className="service-mobile-content">
                            <div><label className="servicesCardText " key={j}><b>{service.title}</b></label></div>
                            <div className='pt-2'><label className="flex items-center justify-center " key={j}>{service.mobileContent}</label></div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            <div id="Portfolio"></div>
        </div>
    );
}