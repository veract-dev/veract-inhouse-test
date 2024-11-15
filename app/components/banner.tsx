'use client';
import '../styles/styles.css';
import '../styles/mediaQuery.css';
import '../styles/cube.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { count } from 'console';
import { motion } from 'framer-motion';


export default function Banner() {

    // const words = ['architecture', 'framework', 'ux research', 'development'];
    // const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {

    //   const interval = setInterval(() => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    //   }, 2000); 
    //   return () => clearInterval(interval);
    // }, []);



    const words = ['Word 1', 'Word 2', 'Word 3', 'Word 4'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord(words[currentWordIndex]);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000); // Change word every 2 seconds (adjust as needed)

        return () => clearInterval(interval);
    }, [currentWordIndex]);


    return (
        <div className='bannerWidth flex flex-row  items-center justify-center'>
            <div className="flex flex-col items-center justify-center customTextLandingPage">
                {/* <div className="pl-8 flex flex-col customTextLandingPage md:gap-6 fontFamily"> */}
                {/* <div>Custom</div> */}
                {/* <div className=" whitespace-nowrap"  ><span className='WebAnimation'>Web</span> <span className='highlight-pipe'><span className='pipeMobile'>|</span></span><span className="MobileAnimation"> Mobile </span><span className='highlight-pipe'><span className="pipeAi">|</span></span><span className='aiAnimation'> AI Solutions</span></div> */}
                <div className=" whitespace-nowrap paddingWebContent"  >Web <span className='highlight-pipe'>| </span> Mobile <span className='highlight-pipe'>|</span> AI & ML </div>
                <div className='mobileContentBanner'>
                <div className="  flex flex-col pt-32">
                    <div className="mobileBannerText flex items-center justify-center"><span style={{color: "white"}}>Custom</span></div>
                    <div className="mobileBannerText flex items-center justify-center whitespace-nowrap"><span style={{color: "white"}}>software development</span></div>
                    <div className="mobileBannerText flex items-center justify-center">as a service</div>
                    {/* <div className="mobileBannerText whitespace-nowrap flex items-center justify-center">as a Service  </div> */}
                </div>
                </div>
                <div className='spacer' ></div>
                <div className=" pt-10 md:gap-2">
                 <div className='typed'>
                  <div className='happyPath'>Custom software development as a service</div>
                   {/* <div className='happyPathMobile'>Crafting your happy path from concept to code</div> */}
                </div>
                        
                    
                    {/* <span className='happy-path-highlight' style={{ fontStyle: 'italic' }}></span> */}
                    {/* <div className="wordAnimation">
                    <label className='word'>{words[currentIndex]}</label>
                </div> */}
                    {/* <div className="typing-effect">
                    <span>{words[currentWordIndex]}</span>
                 </div> */}

                </div>


                {/* </div> */}
                {/* <div className=" flex justify-end  customBannerText md:mb-12">
                <label className="happyPath" style={{ fontStyle: 'italic' }}>Your happy path from concept to code</label>
            </div> */}
                {/* <div className="servicesMobileView w-full">
                    <div className="flex flex-row md:gap-4 pt-28 pl-4 pr-4">
                        <div className="flex flex-col items-center justify-center flex-wrap pr-8" >
                            <a href="#service-1">
                                <div className="flex items-center justify-center"><img src="portfolio/manufacturingOrange.png" className='w-24 landingPageServices p-2' /></div>
                                <div className='flex items-center justify-center font-bold  pt-2' ><label>Web </label></div>
                            </a>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-wrap pr-8 ">
                            <a href="#service-2">
                                <div className="flex items-center justify-center"><img src="portfolio/manufacturingOrange.png" className='w-24 landingPageServices p-2' /></div>
                                <div className='flex items-center justify-center pt-2 font-bold ' ><label>Mobile</label></div>
                            </a>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-wrap pr-8">
                            <a href="#service-3">
                                <div className="flex items-center justify-center"><img src="portfolio/manufacturingOrange.png" className='w-24 landingPageServices p-2' /></div>
                                <div className='flex items-center justify-center pt-2 font-bold ' ><label>UX & UI </label></div>
                            </a>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-wrap  ">
                            <a href="#service-4">
                                <div className="flex items-center justify-center "><img src="portfolio/manufacturingOrange.png" className='w-24 landingPageServices p-2' /></div>
                                <div className='flex items-center justify-center pt-2 font-bold ' ><label>Al & Ml </label></div>
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <div className=" ">
                <div className='pt-32 ' ><img src="banner/bannerComponent.png"/></div>
            </div> */}
        </div>

    );
}
