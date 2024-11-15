'use client';
import React, { useState, useEffect } from 'react';


import DashboardDetails from './dashboardPortfolio';

import '../styles/styles.css';
import '../styles/mediaQuery.css'
import '../styles/testimonials.css';

export default function MachineVision(){
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
                                <div className='caseHeaderTitle_mobile flex flex-wrap pl-5'>Automated Machine 
                                Vision Inspection</div>
                                <div className='caseHeaderIcon_mobile pt-5 pb-5 pl-5'>A sheet metal pressings manufacturing company.</div>

                        </div>
                        <div className='ChallengeSolutionContainer_mobile'>
                            <div className='ChallengeContainer_mobile'>    
                                <div className="challenges_mobile">Challenges</div>
                                <div className='challengesContent_mobile'>Over 5 million pieces of parts must go through a comprehensive visual inspection each month. Hand inspection was tedious and, as inspector fatigue set in, accuracy levels dropped</div>
                                {/* <div className='flex flex-col pt-6'>
                                        <div className='challengePoints_mobile'> 5 Million pcs/month.</div>
                                        <div className='challengePoints_mobile'>Manual inspection was tedious.</div>
                                        <div className='challengePoints_mobile'>Dropping accuracy levels on fatigue. </div>
                                </div> */}
                            </div>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Solution</div>
                                <div className='challengesContent_mobile'>Veract created a proprietary AI-powered visual inspection tool to increase productivity and stop problems with part rejections and recalls later on. For the manufacturer, the solution was a complete success due to its cost-effectiveness.</div>
                                {/* <div className='flex flex-col pt-6'>
                                        <div className='solutionPoints_mobile'>Architecture.</div>
                                        <div className='solutionPoints_mobile'>Framework.</div>
                                        <div className='solutionPoints_mobile'>Choice of tools.</div>
                                </div> */}
                            </div>
                        </div>
                        <div className='BottomContainer_mobile'>
                            <div className='mainContainer'>
                                <div className='serviceContainer_mobile'>
                                    <div className='ServiceImage'><img src="/caseStudies/vehicle.png" className='w-16'/></div>
                                    <div className='serviceHeader_mobile pt-2'>Services</div>
                                    <div className='serviceText_mobile pt-2 '>Software architecture</div>
                                    <div className='serviceText_mobile pt-2 '>Technology consulting</div>
                                    <div className='serviceText_mobile pt-2'>Software development</div>
                                    <div className='serviceText_mobile pt-2'>Deployment</div>
                                    <div className='serviceText_mobile pt-2'>End to end vision systems</div>
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
                                    <div className='techText_mobile pb-3'>Python</div>
                                    <div className='techText_mobile pb-3'>Keras</div>

                                        
                                    </div> 
                                    <div className="flex flex-col md:gap-6">
                                    <div className='techText_mobile pb-3'>TensorFlow</div>
                                        <div className='techText_mobile pb-3'>PyTorch</div>
                                    </div>     
                                </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                </div>   
            {/* <div id="portfolioDetails" className='fontFamily'>
                    <div className='caseDetails_mobile'>
                        <div className='caseHeader_mobile'>
                                <div className="pt-15">
                                <div className='caseHeaderTitle_mobile pl-5 pt-20'>Machine vision for manufacturing quality control</div>
                                </div>
                                <div className='caseHeaderIcon_mobile pt-11 pb-11 pl-2'>A sheet metal pressings manufacturing company.</div>

                        </div>
                        <div className='ChallengeSolutionContainer_mobile'>
                            <div className='ChallengeContainer_mobile'>    
                                <div className="challenges_mobile">Challenges</div>
                                <div className='challengesContent_mobile'>The components require intricate visual inspection  on parts with throughput over</div>
                                <div className='flex flex-col pt-6'>
                                        <div className='challengePoints_mobile'>5 Million pcs/month.</div>
                                        <div className='challengePoints_mobile'>Manual inspection was tedious.</div>
                                        <div className='challengePoints_mobile'>Dropping accuracy levels on fatigue.</div>
                                </div>
                            </div>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Solution</div>
                                <div className='challengesContent_mobile'>Veract developed a homegrown AI based visual inspection application to improve efficiency and prevent downstream issues of part rejections and recalls. The cost effective nature of the solution made it a winner all the way for the manufacturer!</div>
                                <div className='solutionPoints_mobile pt-5'></div>
                                <div className='solutionPoints_mobile'></div>
                                <div className='solutionPoints_mobile'></div>
                            </div>
                        </div>
                        <div className='BottomContainer_mobile pt-10'>
                            <div className='mainContainer'>
                                <div className='serviceContainer_mobile'>
                                    <div className='ServiceImage'><img src="caseStudies/vehicle.png" className='w-16'/></div>
                                    <div className='serviceHeader_mobile pt-2'>Services</div>
                                    <div className='serviceText_mobile pt-2'>Software architecture consulting </div>
                                    <div className='serviceText_mobile pt-2'>Software development</div>
                                    <div className='serviceText_mobile pt-2'>Deployment</div>
                                </div>
                                <div className='platformContainer_mobile'>
                                    <div className='ServiceImage'><img src="caseStudies/web.png" className='w-16'/></div>
                                    <div className='serviceHeader_mobile pt-2'>Platform</div>
                                    <div className='PlatformText_mobile pt-2'>Mobile and Web application</div>
                                    
                                </div>
                            </div>
                        </div> 
                        <div className="pt-10">
                            <div className="techstackContainer_mobile pt-5">
                                    <div className='techImageTitle '>
                                        <div className='ServiceImage'><img src="caseStudies/tech-service.png" className='w-16 pt-1'/></div>
                                        <div className='serviceHeader_mobile pt-2'>Techstack</div>
                                    </div>
                                    <div  className='techContent_mobile'>    
                                        <div className='techText_mobile'>Python</div>
                                        <div className='techText_mobile'>Keras</div>
                                        <div className='techText_mobile'>Tensor flow</div>
                                        <div className='techText_mobile'>Pytorch</div>
                                </div>
                            </div>
                        </div>
                        <div className='testimonialContainer'>
                            <div className='clientContainer md:gap-4'>
                            <div className='flex pt-2 flex-row md:gap-3'>
                            </div>
                            </div>
                        </div>
                        
                        <hr className='separatorPortfolio'></hr> 
                    </div>  
                    
                </div> */}
            </div>
        </div>
    )
}