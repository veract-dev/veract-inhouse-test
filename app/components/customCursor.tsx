// 'use client';
// import React, { useEffect } from 'react';
// import '../styles/cursor.css';

// export default function CustomCursor(){
//     useEffect(() => {
//         const cursor = document.querySelector('.cursor ');
//         // const cursor1= document.querySelector('.cursor1 ')
//         if (cursor ) {
//             const handleMouseMove = (e: { pageY: number; pageX: number; }) => {
//               cursor.setAttribute("style", `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`);
//             };
        
    
//         const handleClick = () => {
//           cursor.classList.add("expand");
//           // cursor1.classList.add("expand");
    
//           setTimeout(() => {
//             cursor.classList.remove("expand");
//             // cursor1.classList.remove("expand");
//           }, 500);
//         };
    
//         document.addEventListener('mousemove', handleMouseMove);
//         document.addEventListener('click', handleClick);
//         return () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//             document.removeEventListener('click', handleClick);
//           };
//  }; }, []);
//         return(
//             <div>
//               <div className='cursor '></div>
//               {/* <div className='cursor1 '></div> */}
//             </div>
//             )
// }