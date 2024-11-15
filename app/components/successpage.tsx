'use client';

import Link from "next/link";
import '../styles/styles.css';
import '../styles/mediaQuery.css'

export default function SuccessPage(){
    
    return(
        <div>
            <div className="desktop_form items-center justify-center " style={{height: "100vh"}}>
                <div className="flex flex-col  items-center justify-center md:gap-6">
                    <div className="flex flex-col">
                        <img src="/checked.png" width={120}  />
                    
                    </div>
                    <div className="flex flex-col text-4xl" style={{color:"#5EAC24"}}>
                        <div>Enquiry Submitted Successfully...</div>
                    </div>
                    <div className="flex flex-col text-xl md:gap-2" style={{color: "#808080"}}> 
                        <div>Thank you! Feel Free to Contact at</div>
                        <div className="flex items-center justify-center text-lg">+91 97899 91565</div>
                        <div className="flex items-center justify-center text-lg">+91 99628 37650</div>
                    </div>
                    
                    <div className="flex flex-col" style={{color: "#4285f4"}}>
                    <button className="underline text-lg"><Link href="/">Go back</Link></button>    
                    </div>
                </div>
            </div>
            <div className="mobile_form items-center justify-center md:gap-6 " style={{height: "100vh"}}>
                        <div className="flex flex-col  items-center justify-center ">
                            <div className="flex flex-col pb-6">
                                <img src="/checked.png" width={80}  />
                            
                            </div>
                            <div className="flex flex-col text-xl items-center justify-center pb-6" style={{color:"#5EAC24"}}>
                                <div >Enquiry Submitted Successfully...</div>
                            </div>
                            <div className="flex flex-col text-base md:gap-2 pb-6" style={{color: "#808080"}}>
                                <div className='pb-2'>Thank you! Feel Free to Contact at</div>
                                <div className="flex items-center justify-center">+91 97899 91565</div>
                                <div className="flex items-center justify-center">+91 99628 37650</div>
                            </div>
                            
                            <div className="flex flex-col pb-6" style={{color: "#4285f4"}}>
                            <button className="underline"><Link href="/">Go back</Link></button>    
                            </div>
                        </div>
                    </div>        
        </div>
    );
}