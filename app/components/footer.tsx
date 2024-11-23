import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import '../styles/mediaQuery.css';
// import '../styles/styles.css';
// import '../styles/mediaQuery.css';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-black border-t border-[#f2f5f8] border-opacity-30 py-4 text-white">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:w-full px-6 md:px-20">
        <div className="text-center md:text-center w-full">
          <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Veract Consultancy Pvt. Ltd. All Rights Reserved.</p>
        </div>
        {/* <div className="footerTags flex gap-4 mt-4 md:mt-0">
            <a href="https://whatsapp.com/channel/0029VahNUEB90x31HeDatt2o" target='_blank' className="text-[#4285F4]"><FaWhatsapp size={20} /></a>
            <a href="https://www.linkedin.com/company/veract-consultancy-private-limited/" target='_blank' className="text-[#4285F4]"><FaLinkedin size={20} /></a>
          </div> */}
      </div>
    </footer>
  )
}