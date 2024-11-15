'use client';
import React, { useState, useEffect } from 'react';


import DashboardDetails from './dashboardPortfolio';

import '../styles/styles.css';
import '../styles/mediaQuery.css'
import '../styles/testimonials.css';

export default function Audit() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleMenuClick = (sectionId: string) => {
        scrollToSection(sectionId);
    };

    return (
        <div>
            <div className="mobileCaseStudy">
                <div id="portfolioDetails" className='fontFamily'>
                    <div className='caseDetails_mobile'>
                        <div className='caseHeader_mobile'>
                            <div className='caseHeaderTitle_mobile flex flex-wrap pl-5'>Data extraction for the audit industry</div>
                            <div className='caseHeaderIcon_mobile pt-5 pb-5 pl-5'>
                            <p className='px-2'><span className='para_Color'>Financial audit </span>firm with over 100 associates</p></div>

                        </div>
                        <div className='ChallengeSolutionContainer_mobile'>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Challenges</div>
                                <div className='challengesContent_mobile'>
                               Audit firm  looking to reduce manual data entry processes required for compliance.
                                </div>
                                {/* <div className='flex flex-col pt-6'>
                                        <div className='challengePoints_mobile'>Live chat.</div>
                                        <div className='challengePoints_mobile'>Video audio streaming.</div>
                                        <div className='challengePoints_mobile'>Chat bot integration. </div>
                                </div> */}
                            </div>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Solution</div>
                                <div className='challengesContent_mobile'>Veract team developed and deployed a easy to use Large language model +OCR based custom trained data extraction capablity.</div>
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
                                    <div className='ServiceImage'><img src="/caseStudies/vehicle.png" className='w-16' /></div>
                                    <div className='serviceHeader_mobile pt-2'>Services</div>
                                    <div className='serviceText_mobile pt-2 '>Design Software architecture</div>
                                    <div className='serviceText_mobile pt-2'>Technology consulting</div>
                                    <div className='serviceText_mobile pt-2'>Front end development</div>
                                    <div className='serviceText_mobile pt-2'>Back end development</div>
                                    <div className='serviceText_mobile pt-2'>Deployment</div>
                                </div>
                                <div className='platformContainer_mobile'>
                                    <div className='ServiceImage'><img src="/caseStudies/web.png" className='w-16' /></div>
                                    <div className='serviceHeader_mobile pt-2'>Platform</div>
                                    <div className='PlatformText_mobile pt-2'>Web</div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-5 pr-5 pb-8">
                            <div className="techstackContainer_mobile">
                                <div className='techImageTitle_mobile pl-20 pr-20'>
                                    <div className='ServiceImage'><img src="/caseStudies/tech-service.png" className='w-16 pt-1' /></div>
                                    <div className='serviceHeader_mobile pt-2'>Techstack</div>
                                </div>
                                <div className='techContent_mobile'>
                                    <div className="flex flex-row justify-around pt-6">
                                        <div className="flex flex-col md:gap-6">
                                            <div className='techText_mobile pb-3'>Python</div>
                                            <div className='techText_mobile pb-3'>Fast API</div>
                                        </div>
                                        <div className="flex flex-col md:gap-6">
                                            <div className='techText_mobile pb-3'>Next JS</div>
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