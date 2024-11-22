import '../styles/styles.css';
import '../styles/mediaQuery.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import '../styles/mediaQuery.css';
// import '../styles/styles.css';
// import '../styles/mediaQuery.css';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter , FaWhatsapp} from 'react-icons/fa';


export default function VeractDetails() {
  return (
    <div className="flex flex-col fontFamily bg-black text-white" >
      
      {/* Contact Information Section */}
      <div className=" px-6 py-10 md:px-20">
        
        <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center">
        <div className="transitionEffect afterScroll"><span className="font-semibold">ver</span><span className ="textColorLogo">act</span></div>
                  <a href="mailto:info@veract.io" className="flex items-center gap-2 text-lg">
            <FaEnvelope size={18} color="#4285F4" /> <span>info@veract.io</span>
          </a>
        </div>
        <div className="flex flex-col mt-6 md:flex-row md:justify-between"> 
          <div className="flex flex-col space-y-3">
            <div className="flex  items-start gap-2  ">
              <div><FaLocationDot  size={18} color="#4285F4" /></div>
              <div><p className='text-wrap'>Regd. Office: 17, First Street, Tansi Nagar, Velachery, Chennai - 600 042</p></div>
            </div>
            {/* <div className="flex items-start gap-2  ">
              <div><FaLocationDot  size={18} color="#4285F4" /></div>
              <div><p className='text-wrap'>Office: 37, Brindavan Street, Velachery Main Rd, Srinivasa Nagar, Madipakkam, Chennai, Tamil Nadu 600091</p></div>
            </div> */}
          </div>
          <div className="flex flex-col mt-6 space-y-3 md:mt-0">
            <div className="flex flex-col items-start gap-3">
              <div className='flex items-center justify-center gap-2'>
                <FaPhoneAlt size={18}  color="#4285F4" />
                <a className='m-0 p-0' href="tel:+919789991565">+91 97899 91565</a>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <FaPhoneAlt size={18}  color="#4285F4" />
                <a href="tel:+919962837650">+91 99628 37650</a>
              </div>
            </div> 
            <div className='veractTags'> 
              <div className=" flex gap-4 mt-4 md:mt-0 w-[100%] justify-end ">
              {/* <a href="#" className="text-[#4285F4]"><FaFacebook size={20} /></a>
              <a href="#" className="text-[#4285F4]"><FaTwitter size={20} /></a> */}
              <a href="https://whatsapp.com/channel/0029VahNUEB90x31HeDatt2o" target='_blank' className="text-[#4285F4]"><FaWhatsapp size={20} /></a>
              <a href="https://www.linkedin.com/company/veract-consultancy-private-limited/" target='_blank' className="text-[#4285F4]"><FaLinkedin size={20} /></a>
              {/* <a href="#" className="text-[#4285F4]"><FaInstagram size={20} /></a> */}
              </div>
          </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      {/* <footer className="flex flex-col items-center bg-black py-8 text-white">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:w-full px-6 md:px-20">
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base">&copy; 2024 Veract Consultancy Pvt. Ltd. All Rights Reserved.</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-[#4285F4]"><FaFacebook size={20} /></a>
            <a href="#" className="text-[#4285F4]"><FaTwitter size={20} /></a>
            <a href="#" className="text-[#4285F4]"><FaLinkedin size={20} /></a>
            <a href="#" className="text-[#4285F4]"><FaInstagram size={20} /></a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
