'use client';
import '../styles/styles.css';
import '../styles/mediaQuery.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';


export default function FoundersDesk() {
    const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const triggerPoint = window.innerHeight * 0.5; // Adjust this value as needed
  //     setIsVisible(scrollTop > triggerPoint);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const  {ref:sectionRef,inView:SectionView}=useInView({
    threshold:0.2,
    triggerOnce:true
  })
  useEffect(()=>{
    setIsVisible(SectionView)
  },[SectionView])

    return (
        <div  >
            <div className="  foundersPage fontFamily mt-12 ">
                <div ref={sectionRef} className={`scroll-animationY ${isVisible ? 'visiblesectionName' : ''}`}>
                <div className="flex items-center justify-center whitespace-nowrap">
                    <hr className='separator'></hr>
                    <div className=" section-title mobilePaddingHeader flex flex-row gap-2"><span className="section-title-highlight pl-2 font-semibold">Founder's</span>desk</div>
                    <hr className='separator'></hr>
                </div>
                </div>
                <div className=" mt-12 mb-6 flex foundersAlignment  md:gap-12 ">
                <div className={`scroll-animationY ${isVisible ? 'visibleFounderProfile' : ''}`}>
                    <div className="left-column">
                   
                      <div className="founderProfileWidth pb-2"><img src="/founderProfileCircle.png" className='founderProfileChange' /></div>
                   
                    <div className='founderDetails whitespace-nowrap pt-2'><label className='title'>PREETHY SRIKANTHAN, <span className='title highlight'>Founder</span></label> </div>
                    </div>
                    </div>     
                    <div className="right-column flex flex-col md:gap-4 foundersContent">
                    <div className={`scroll-animationY ${isVisible ? 'visibleFounderContent' : ''}`}>
                      <div className="paragraph_padding ">
                        <div><label className=" firstPara" >Veract was founded on our passion for engineering and leveraging technology to drive efficiency. We recruit and develop individuals who share our enthusiasm for engineering.</label></div>
                      </div>
                      <div className="paragraph_padding">
                        <div className="secondPara"> At Veract, you will collaborate directly with passionate, UX-trained engineers eager to utilize their expertise to tackle your challenges.</div>
                      </div>
                      <div className="paragraph_padding">
                        <div className="thirdPara">Our dedication to harnessing AI's potential for businesses has refined our expertise in Machine Vision, Large Language Models, and context-trained Speech-to-Text conversions.</div>
                      </div>
                      <div className="paragraph_padding">
                        <div className="thirdPara">We look forward to working with you and showcasing our technical problem-solving and software capabilities.</div>
                      </div>
                    </div>
                    </div>
                   
                </div>
                <div id="Services" className='mb-16'></div>
            </div>

        </div>
    );
}