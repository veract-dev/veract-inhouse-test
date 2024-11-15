'use client';
import React, { useState, useEffect } from 'react';


import DashboardDetails from './dashboardPortfolio';

import '../styles/styles.css';
import '../styles/mediaQuery.css'
import '../styles/testimonials.css';

export default function Manufacturing(){
    const scrollToSection = (sectionId:string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      const handleMenuClick = (sectionId:string) => {
        scrollToSection(sectionId);
      };
        
    return(
        <div>

            <div className="mobileCaseStudy">
            <div id="portfolioDetails" className='fontFamily'>
                    <div className='caseDetails_mobile'>
                        <div className='caseHeader_mobile'>                                
                                <div className='caseHeaderTitle_mobile flex flex-wrap pl-5'>Quality Documentation for Metal Foundry   </div>
                                <div className='caseHeaderIcon_mobile pt-5 pb-5 pl-5'>An automated quality report generation system for Grey Iron and Ductile Iron Foundry.</div>

                        </div>
                        <div className='ChallengeSolutionContainer_mobile'>
                            <div className='ChallengeContainer_mobile'>    
                                <div className="challenges_mobile">Challenges</div>
                                <div className='challengesContent_mobile'>Submission of parts necessitates the submission of high-quality documentation on spectrometer readings, pouring properties, mould properties and sand properties.</div>
                                {/* <div className='flex flex-col pt-6'>
                                        <div className='challengePoints_mobile'></div>
                                        <div className='challengePoints_mobile'></div>
                                        <div className='challengePoints_mobile'></div>
                                </div> */}
                            </div>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Solution</div>
                                <div className='challengesContent_mobile'>A one-stop shop that combines machine maintenance, defect prediction, CAPA follow-up, test certificate and other quality documents.</div>
                                {/* <div className='flex flex-col pt-6'>
                                        <div className='solutionPoints_mobile'></div>
                                        <div className='solutionPoints_mobile'></div>
                                        <div className='solutionPoints_mobile'></div>
                                </div> */}
                            </div>
                        </div>
                        <div className='BottomContainer_mobile '>
                            <div className='mainContainer'>
                                <div className='serviceContainer_mobile'>
                                    <div className='ServiceImage'><img src="/caseStudies/vehicle.png" className='w-16'/></div>
                                    <div className='serviceHeader_mobile pt-2'>Services</div>
                                    <div className='serviceText_mobile pt-2 '>Software architecture</div>
                                    <div className='serviceText_mobile pt-2'>Technology consulting</div>
                                    <div className='serviceText_mobile pt-2'>Software development</div>
                                    <div className='serviceText_mobile pt-2'>Deployment</div>   
                                </div>
                                <div className='platformContainer_mobile'>
                                    <div className='ServiceImage'><img src="/caseStudies/web.png" className='w-16'/></div>
                                    <div className='serviceHeader_mobile pt-2'>Platform</div>
                                    <div className='PlatformText_mobile pt-2'>Web</div>
                                </div>
                            </div>
                        </div> 
                        <div className="pl-5 pr-5 pb-8">
                            <div className="techstackContainer_mobile">
                                    <div className='techImageTitle_mobile pl-20 pr-20'>
                                        <div className='ServiceImage'><img src="/caseStudies/tech-service.png" className='w-16 pt-1'/></div>
                                        <div className='serviceHeader_mobile pt-2'>Techstack</div>
                                    </div>
                                <div className='techContent_mobile'>
                                    <div className="flex flex-row justify-around pt-6">
                                        <div className="flex flex-col md:gap-6">
                                            <div className='techText_mobile pb-3'>Bootstrap</div>
                                            <div className='techText_mobile pb-3'>Express.js</div>
                                            <div className='techText_mobile pb-3'>jQuery</div>
                                            <div className='techText_mobile pb-3'>MongoDB</div>
                                        </div>
                                        <div className="flex flex-col md:gap-6">
                                            <div className='techText_mobile pb-3'>Redis</div>
                                            <div className='techText_mobile pb-3'>IndexedDB</div>
                                            <div className='techText_mobile pb-3'>Google APIs</div>
                                        </div>     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                </div>  
           </div>
        </div>
    )
}