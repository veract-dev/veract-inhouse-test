'use client';
import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import '../styles/mediaQuery.css'
import '../styles/testimonials.css';

export default function Sales(){
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
                                <div className='caseHeaderTitle_mobile flex flex-wrap pl-5'>Sales Enquiry and Quote Management  </div>
                                <div className='caseHeaderIcon_mobile pt-5 pb-5 pl-5'>
                                    <p><span className='para_Color'>Rajdeep </span> is a pune-based distributor of industrial products with multiple principals, multiple products, in multiple locations.</p></div>

                        </div>
                        <div className="pl-5">
                            <div className='flex items-center justify-center'>
                                <img src="/output/sales.png" className=''/>
                            </div>
                        </div>
                       
                        <div className='ChallengeSolutionContainer_mobile'>
                            <div className='ChallengeContainer_mobile'>    
                                <div className="challenges_mobile">Challenges</div>
                                <div className='challengesContent_mobile'>Salesman attrition, inconsistent data, quotation production and reporting were the client’s pain concerns. Customer was searching for a solution that would operate with SAP integration and fit into their usual routine.</div>
                                {/* <div className='flex flex-col pt-6'>
                                        <div className='challengePoints_mobile'>Live chat.</div>
                                        <div className='challengePoints_mobile'>Video audio streaming.</div>
                                        <div className='challengePoints_mobile'>Chat bot integration. </div>
                                </div> */}
                            </div>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Solution</div>
                                <div className='challengesContent_mobile'>Veract created a mobile and online application that seamlessly integrated with the customers existing software.</div>
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
                                    <div className='PlatformText_mobile pt-2'>Mobile</div>
                                    <div className='PlatformText_mobile pt-2'>Web</div>
                                </div>
                            </div>
                        </div> 
                        <div className="pl-5 pr-5">
                            <div className="techstackContainer_mobile">
                                    <div className='techImageTitle_mobile pl-20 pr-20'>
                                        <div className='ServiceImage'><img src="/caseStudies/tech-service.png" className='w-16 pt-1'/></div>
                                        <div className='serviceHeader_mobile pt-2'>Techstack</div>
                                    </div>
                                <div className='techContent_mobile'>
                                    <div className="flex flex-row justify-around pt-6">
                                        <div className="flex flex-col md:gap-6">
                                            <div className='techText_mobile pb-3'>Bootstrap</div>
                                            <div className='techText_mobile pb-3'>Redis</div>
                                            <div className='techText_mobile pb-3'>Express.js</div>
                                            <div className='techText_mobile pb-3'>IndexedDB</div>
                                        </div>  
                                        <div className="flex flex-col">
                                            <div className='techText_mobile pb-3'>JQuery</div>
                                            <div className='techText_mobile pb-3'>Google APIs</div>
                                            <div className='techText_mobile pb-3'>MongoDB</div>
                                        </div>     
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pb-8">
                            <div className='testimonialContainer_mobile'>
                                <div className='clientContainer_mobile md:gap-4'>
                                <div className='flex pt-2'>
                                    <div className="clientsspeak_mobile">Clients Speak</div>
                                </div>
                                <div className='flex pt-2 flex-col md:gap-3'>
                                    <div className="pb-5 pl-5"><i className="quotes"></i></div>
                                    <div className='flex flex-col items-center pb-2'>
                                        <div className='title_mobile whitespace-nowrap'>ANAND SHAH - DIRECTOR</div>
                                        <div className='title_mobile highlight'>RAJDEEP INDUSTRIAL PRODUCTS</div>
                                    </div>
                                </div>
                                <div className="clientscontent_mobile flex-wrap pb-2">Excellent prompt support in spite of remote location.</div>
                                <div className='w-[100%] flex justify-end'><img src="/caseStudies/right_quote.svg" className='m-3 w-70' alt="" /> </div>
                                </div>
                            </div>
                        </div>
                        
                    </div> 
                    
                </div>
                {/* <div id="portfolioDetails" className='fontFamily'>
                    <div className='caseDetails_mobile'>
                        <div className='caseHeader_mobile'>
                                <div className="pt-15">
                                <div className='caseHeaderTitle_mobile pl-5 pt-20'>Sales enquiry and quote management</div>
                                </div>
                                <div className='caseHeaderIcon_mobile pt-11 pb-11 pl-2'>Rajdeep is a multi principal,multi product,multi location industrial products distributor based out of pune.</div>

                        </div>
                        <div className='ChallengeSolutionContainer_mobile'>
                            <div className='ChallengeContainer_mobile'>    
                                <div className="challenges_mobile">Challenges</div>
                                <div className='challengesContent_mobile'>
                                    Client's pain points were salesmen attrition, lack of data continuity, quotation generation and reporting. They were looking for a solution to these with an ability to fit into their regular workflow including SAP integration. They also wanted the application to work offline.
                                    </div>
                                <div className='flex flex-col pt-6'>
                                        <div className='challengePoints_mobile'></div>
                                        <div className='challengePoints_mobile'></div>
                                        <div className='challengePoints_mobile'></div>
                                </div>
                            </div>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Solution</div>
                                <div className='challengesContent_mobile'>
                                    Veract developed a web and mobile applicabtion with seamless integration with other software applications customer has been using
                                </div>
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
                                        <div className='techText_mobile'>Bootstrap</div>
                                        <div className='techText_mobile'>Redis</div>
                                        <div className='techText_mobile'>Express.js</div>
                                        <div className='techText_mobile'>Indexdb</div>
                                        <div className='techText_mobile '>Jquery</div>
                                        <div className='techText_mobile'>Google API</div>
                                        <div className='techText_mobile'>MongoDB </div>
                                </div>
                            </div>
                        </div>
                        <div className='testimonialContainer'>
                            <div className='clientContainer md:gap-4'>
                            <div className='flex pt-2 flex-row md:gap-3'>
                            </div>
                            </div>
                        </div>
                            <div className='flex items-center justify-center'>
                                <img src="/output/sales.png" className=''/>
                            </div>
                        
                        
                        <hr className='separatorPortfolio'></hr> 
                    </div>  
                    
                </div> */}
            </div>
        </div>
    )
}