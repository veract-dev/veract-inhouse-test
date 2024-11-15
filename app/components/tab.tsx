'use client';
import { Black_And_White_Picture, Cormorant_Garamond } from 'next/font/google';
import Link from 'next/link';
import React, { useState,useEffect } from 'react'
import { useRef } from 'react';
import { ColorScale } from 'rippleui/dist/js/types/theme.types';
import { TRUE } from 'sass';


// const Navbar = () => {

//   const [bg,setbg] = useState(false);

//   const click1 = () => {
//     setbg(!bg);
//   }

//   // const [clicked, setClicked] = useState(false);
//    let clicked =false;
//    let clicked2 =false;

//   const handleClick = (value :number) => {
//     if(value ===1 ){
//       clicked=true
//         clicked2=false
//     }
//     if(value === 2){
//       clicked2=true
//       clicked=false
//     }
//   };

//   // const [clicked2, setClicked2] = useState(false);

//   const handleClick2 = () => {
     
//   };

//   const [color,setcolor] = useState("#808080");

//   const click = (color: ColorScale) => {
//     setcolor(color);
//   }

//   useEffect(()=>{
//     document.body.style.backgroundColor = color;
//   }, [color]);


//   return (
//     <div className="horizontal-scrollable-container n pb-5 md:gap-6">
//       <div className="buttons ">
//         {/* <div className="button" onClick={toggleButton} style={{backgroundColor: isClicked ? "#000000" : ""}}><Link href="/health">Wellness</Link></div> */}
//         {/* <div className={ clicked ? "buttonActive" : "button" } onClick={()=> handleClick(1)}><Link href="/health">Wellness</Link></div> */}
//         {/* <div className="button" onClick={()=> {click("yellow")}}><Link href="/health">Wellness</Link></div>      */}
//         {/* <div className= { clicked2 ? "buttonActive" : "button" } onClick={()=> handleClick(2)}><Link href="/sales">Sales</Link></div> */}
//         {/* <div onClick={click1} className={`button ${(bg == true) ? 'bg-orange' : 'bg-grey'}`}><Link href="/machinevision">Machine Vision</Link></div> */}
//         <div className="button"><Link href="/health">Wellness</Link></div>
//         <div className="button"><Link href="/sales">Sales</Link></div>
//         <div className="button"><Link href="/machinevision">Machine Vision</Link></div>
//         <div className="button"><Link href="/manufacturing">Manufacturing</Link></div>
//         <div className="button"><Link href="/agritech">Agri Tech</Link></div>
//         <div className="button"><Link href="/fintech">Fin Tech</Link></div>
//         {/* <div className={`${clicked} ?  button: buttonActive `} onClick={()=>handleClick(1)}><Link href="/health">Wellness</Link></div>     
//         <div className={`${clicked} ? buttonActive : button `} onClick={()=>handleClick(1)}><Link href="/sales">Sales</Link></div>
//         <div className={`${clicked} ? buttonActive : button `} onClick={()=>handleClick(1)}><Link href="/machinevision">Machine Vision</Link></div>
//         <div className={`${clicked} ? buttonActive : button `} onClick={()=>handleClick(1)}><Link href="/manufacturing">Manufacturing</Link></div>
//   <div className={`${clicked} ? buttonActive : button `} onClick={()=>handleClick(1)}><Link href="/agritech">Agri Tech</Link></div> */}
//         {/* <div className={ clicked ? "buttonActive" : "button" } onClick={()=>handleClick(1)}><Link href="/fintech">Fin Tech</Link></div> */}
//         </div>
//       </div>
//     // </div>

//     // <div className="MobileTab">
//     //     <div className="temp ">
//     //         <div className="flex flex-row flex-wrap justify-around">
//     //         <Link href="/health">
//     //         <div className="TabFont">
//     //             Health
//     //         </div>            
//     //       </Link>
//     //       <Link href="/sales">
//     //         <div className="pl-5 TabFont">
//     //             Sales
//     //         </div>            
//     //       </Link>
//     //       <Link href="/machinevision">
//     //         <div className="TabFont">
//     //             Machine Vision
//     //         </div>            
//     //       </Link>
          
//     //         </div>
//     //       <div className="flex flex-row flex-wrap justify-around pr-10">
//     //       <Link href="/manufacturing">
//     //         <div className="pt-5 TabFont">
//     //             Manufacturing
//     //         </div>            
//     //       </Link>
//     //       <Link href="/agritech">
//     //         <div className="pt-5 pr-12 TabFont">
//     //             Agri Tech
//     //         </div>            
//     //       </Link>
//     //       <Link href="/fintech">
//     //         <div className="pt-5 TabFont">
//     //             Fin Tech
//     //         </div>            
//     //       </Link>
//     //       </div>
          
//     //   {/* <ul>
//     //     <div className="flex flex-row">
//     //     <li>
//     //       <Link href="/health">
//     //         <div className="TabFont">
//     //             Health
//     //         </div>            
//     //       </Link>
//     //     </li>
//     //     <li>
//     //       <Link href="/sales">
//     //         <div className="TabFont">
//     //             Sales
//     //         </div>
//     //       </Link>
//     //     </li>
//     //     <li>
//     //       <Link href="/machinevision">
//     //       <div className="TabFont">
//     //             Machine Vision
//     //         </div>
//     //       </Link>
//     //     </li>
//     //     <li>
//     //       <Link href="/manufacturing">
//     //       <div className="TabFont">
//     //             Manufacturing
//     //         </div>
//     //       </Link>
//     //     </li>
//     //     </div>
//     //     <div className="flex flex-row">
//     //         <li>
//     //         <Link href="/agritech">
//     //         <div className="TabFont">
//     //                 Agri Tech
//     //             </div>
//     //         </Link>
//     //         </li>
//     //         <li>
//     //         <Link href="/fintech">
//     //         <div className="TabFont">
//     //                 Fin Tech
//     //             </div>
//     //         </Link>
//     //         </li>
//     //     </div>
        
        
//     //   </ul> */}
//     // </div>
//     //  {/* <div className="scroll-container">
//     //   <div className="scroll-content">
//     //     <div className="scroll-item">Item 1</div>
//     //     <div className="scroll-item">Item 2</div>
//     //     <div className="scroll-item">Item 3</div>
//     //   </div>
//     // </div> */}
//     // </div>
    
//   );

// };

// export default Navbar;


// components/Tabs.js

import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'


const Tabs = () => {
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (sectionId:string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuClick = (sectionId:string) => {
    scrollToSection(sectionId);
  };

  const handleTabClick = (tab: string, sectionId: string) => {
    
    if (pathname !== tab) {
      router.push(tab);
      handleMenuClick(sectionId);
    }
  };

  return (
    <div className="fontFamily">
    <div className="horizontal-scrollable-container n pb-5 flex flex-col">
      <div className="buttons">
        <div className="flex space-x-2">
        <button id="1"
          onClick={() => handleTabClick('/health',"1")}
          className={`py-2 px-8 rounded-full ${
            pathname === '/health' ? 'bg-orange' : 'bg-gray-200'
          } ${
            pathname === '/health' ? 'text-white' : 'text-black'
          } cursor-pointer`}
        >
          Wellness  
        </button>
        <button id="2"
          onClick={() => handleTabClick('/sales',"2")}
          className={`py-2 px-8 rounded-full ${
            pathname === '/sales' ? 'bg-orange' : 'bg-gray-200'
          } ${
            pathname === '/sales' ? 'text-white' : 'text-black'
          } cursor-pointer`}
        >
          Sales
        </button>
        <button id="3"
          onClick={() => handleTabClick('/machinevision',"3")}
          className={`py-2 px-8 rounded-full ${
            pathname === '/machinevision' ? 'bg-orange' : 'bg-gray-200'
          } ${
            pathname === '/machinevision' ? 'text-white' : 'text-black'
          } cursor-pointer`}
        >
          Machine Vision
        </button>
        <div className="tab-to-scroll-to">
        <button id="4"
          onClick={() => handleTabClick('/manufacturing',"4")}
          className={` py-2 px-8 rounded-full ${
            pathname === '/manufacturing' ? 'bg-orange' : 'bg-gray-200'
          } ${
            pathname === '/manufacturing' ? 'text-white' : 'text-black'
          } cursor-pointer`}
        >
          Manufacturing
        </button>
        </div>
        
        <button id="5"
          onClick={() => handleTabClick('/agritech',"5")}
          className={`py-2 px-8 rounded-full ${
            pathname === '/agritech' ? 'bg-orange' : 'bg-gray-200'
          } ${
            pathname === '/agritech' ? 'text-white' : 'text-black'
          } cursor-pointer`}
        >
          Agri Tech
        </button>
        <button id="6"
          onClick={() => handleTabClick('/fintech',"6")}
          className={`py-2 px-8 rounded-full ${
            pathname === '/fintech' ? 'bg-orange' : 'bg-gray-200'
          } ${
            pathname === '/fintech' ? 'text-white' : 'text-black'
          } cursor-pointer`}
        >
          Fin Tech
        </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Tabs;