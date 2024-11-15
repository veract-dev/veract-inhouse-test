'use client';
import React, { useState, useEffect } from 'react';


import DashboardDetails from './dashboardPortfolio';

import '../styles/styles.css';
import '../styles/mediaQuery.css'
import '../styles/testimonials.css';

export default function FinTech(){
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
                                <div className='caseHeaderTitle_mobile flex flex-wrap pl-5'> Credit Risk Assessment and Risk Profiling </div>
                                <div className='caseHeaderIcon_mobile pt-5 pb-5 '>
                                <p className='px-2'> <span className='para_Color'>Northern Arc Capital </span> is a financial services platform that was established primarily to meet various credit needs of businesses and households that are underserved.</p></div>

                        </div>
                        <div className='ChallengeSolutionContainer_mobile'>
                            <div className='ChallengeContainer_mobile'>    
                                <div className="challenges_mobile">Challenges</div>
                                <div className='challengesContent_mobile'>For the construction of their investor portal, Northern Arc Capital required a team with technical and financial domain experience. They needed to reduce risk by using risk analytics, risk profiles, etc.</div>
                                {/* <div className='flex flex-col pt-6'>
                                        <div className='challengePoints_mobile'>Live chat.</div>
                                        <div className='challengePoints_mobile'>Video audio streaming.</div>
                                        <div className='challengePoints_mobile'>Chat bot integration. </div>
                                </div> */}
                            </div>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Solution</div>
                                <div className='challengesContent_mobile'>Veract implemented risk profiling in their investor tracking portal by fusing their core development skills with their expertise in financial domain.</div>
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
                                            <div className='techText_mobile pb-3'>Angular</div>
                                            <div className='techText_mobile pb-3'>Spring Boot</div>
                                            <div className='techText_mobile pb-3'>PostgreSQL</div>

                                        </div>
                                        <div className="flex flex-col md:gap-6">
                                            <div className='techText_mobile pb-3'>Elasticsearch</div>
                                            <div className='techText_mobile pb-3'>Node.js</div>
                                            <div className='techText_mobile pb-3'>Kibana</div>

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