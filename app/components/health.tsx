'use client';
import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import '../styles/mediaQuery.css'
import '../styles/testimonials.css';

export default function Health(){
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
                   
                        <div className=''>                                
                                <div className='caseHeaderTitle_mobile flex flex-wrap pl-5'>Health and Wellness Tech </div>
                                <div className='caseHeaderIcon_mobile pt-5 pb-5 '>
                                    <p className='px-2'> <span className='para_Color'> Anyo </span> is a health and wellness app  that addresses the significant issue of mental health.
                                    </p></div>

                        </div>
                        <div className="px-5">
                            <div className='flex flex-col gap-[0.25rem] items-center justify-center'>
                                <img src="/caseStudies/mobile_wellness.svg" className=''/>
                            </div>
                        </div>
                        <div className='ChallengeSolutionContainer_mobile'>
                            <div className='ChallengeContainer_mobile'>    
                                <div className="challenges_mobile">Challenges</div>
                                <div className='challengesContent_mobile'>The founders of Anyo were looking for a one-stop shop for technical advice and development for their live chat-enabled platform with streaming audio, video along with chatbots.</div>
                                {/* <div className='flex flex-col pt-6'>
                                        <div className='challengePoints_mobile'>Live chat.</div>
                                        <div className='challengePoints_mobile'>Video audio streaming.</div>
                                        <div className='challengePoints_mobile'>Chat bot integration. </div>
                                </div> */}
                            </div>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Solution</div>
                                <div className='challengesContent_mobile'>Within five months, Veract's team of architects and developers created their four online portals and the Anyo mobile app making crucial choices on architecture, framework etc.</div>
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
                        <div className="pl-5 pr-5 pb-8">
                            <div className="techstackContainer_mobile">
                                    <div className='techImageTitle_mobile pl-20 pr-20'>
                                        <div className='ServiceImage'><img src="/caseStudies/tech-service.png" className='w-16 pt-1'/></div>
                                        <div className='serviceHeader_mobile pt-2'>Techstack</div>
                                    </div>
                                    
                                <div className='techContent_mobile'>
                                    
                                <div className="flex flex-row justify-around pt-6">
                                    <div className="flex flex-col md:gap-6">
                                        <div className='techText_mobile pb-3'>Flutter</div>
                                        <div className='techText_mobile pb-3'>Angular</div>
                                        <div className='techText_mobile pb-3'>LoopBack</div>

                                    </div> 
                                    <div className="flex flex-col md:gap-6">
                                        <div className='techText_mobile pb-3'>MongoDB</div>
                                        <div className='techText_mobile pb-3'>Elasticsearch</div>
                                    </div> 
                                    {/* <div className="flex flex-col">
                                        <div className='techText_mobile pb-3'>Elastic search</div>
                                        <div className='techText_mobile pb-3'>Google APIs</div>
                                        <div className='techText_mobile pb-3'>CI/CD</div>
                                        <div className='techText_mobile pb-3'>Angular</div>
                                        <div className='techText_mobile pb-3'>Kibana</div>
                                    </div>      */}
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
                                <div className='caseHeaderTitle_mobile pl-5 pt-20'>Health and wellness web  and mobile app</div>
                                </div>
                                <div className='caseHeaderIcon_mobile pt-11 pb-11 pl-2'>Anyo is a health and wellness app tackling the important challenge of mental well being .</div>

                        </div>
                        <div className='ChallengeSolutionContainer_mobile'>
                            <div className='ChallengeContainer_mobile'>    
                                <div className="challenges_mobile">Challenges</div>
                                <div className='challengesContent_mobile'>Anyo founding team were in search of one stop solution - technical consulting and development for their product that had</div>
                                <div className='flex flex-col pt-6'>
                                        <div className='challengePoints_mobile'>Live chat.</div>
                                        <div className='challengePoints_mobile'>Video audio Streaming.</div>
                                        <div className='challengePoints_mobile'>Chat bot integration.</div>
                                </div>
                            </div>
                            <div className='ChallengeContainer_mobile'>
                                <div className="challenges_mobile">Solution</div>
                                <div className='challengesContent_mobile'>Veract's team of architects and developers built the anyo mobile app, their four web portals within 5 months. </div>
                                <div className='solutionPoints_mobile pt-5'>Architecture.</div>
                                <div className='solutionPoints_mobile'>Framework.</div>
                                <div className='solutionPoints_mobile'>Choice of Tools.</div>
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
                                        <div className='techText_mobile'>Java</div>
                                        <div className='techText_mobile'>Springboot</div>
                                        <div className='techText_mobile'>Postgres</div>
                                        <div className='techText_mobile'>nginx</div>
                                        <div className='techText_mobile '>Kafka</div>
                                        <div className='techText_mobile'>Elastic search</div>
                                        <div className='techText_mobile'>Google APIs</div>
                                        <div className='techText_mobile'>CI/CD</div>
                                        <div className='techText_mobile '>Angular</div>
                                        <div className='techText_mobile'>Kibana</div>
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
                                <img src="/output/anyoFinalOutput.png" className=''/>
                            </div>
                        
                        
                        <hr className='separatorPortfolio'></hr> 
                    </div>  
                    
                </div> */}
            
        </div>
    )
}