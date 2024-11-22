import '../styles/styles.css';
import '../styles/mediaQuery.css';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import React from 'react';

export default function VeractDetails() {
  const officeDetails = [
    {
      id: 1,
      officeDetailsHeader: 'Registered office:',
      officeDetailsContent: ['17, First street, Tansi nagar,', 'Velacherry, Chennai - 600 042']
    },
    {
      id: 2,
      officeDetailsHeader: 'Office location:',
      officeDetailsContent: ['37, Aspace, Brindavan Street,', 'Srinivasa Nagar, Madipakkam,', 'Chennai - 600091'],
    },
    {
      id: 3,
      officeDetailsHeader: 'Contact us ',
      officeDetailsContent: [['+91 97899 91565', '+91 99628 37650'], 'info@veract.io'],
    }
  ]
  return (
    <div className="flex flex-row justify-evenly py-[2rem] fontFamily bg-black text-white" >
      <div className='flex flex-col gap-[1rem]'>
        <img src='/logo/footer_logo.svg' alt='veract logo' className='' />
        <div className='flex flex-row gap-[1rem]'>
          <a href="https://whatsapp.com/channel/0029VahNUEB90x31HeDatt2o" target='_blank' className="transform transition-transform duration-300 hover:scale-110 cursor-pointer">
            <img src="/logo/footer_whatsapp_logo.svg" alt="" />
          </a>
          <a href="https://www.linkedin.com/company/veract-consultancy-private-limited/" target='_blank' className="transform transition-transform duration-300 hover:scale-110 cursor-pointer">
            <img src="/logo/footer_linkedIn_logo.svg" alt="" />
          </a>
        </div>
      </div>
      {officeDetails.map((item: any, index: any) => (
        <div key={index} className='flex flex-col gap-[1rem]'>
          <div className='text-[14px] text-white font-semibold'>{item.officeDetailsHeader}</div>
          <div className='flex flex-col gap-[0.5rem]'>
            {item.officeDetailsContent.map((item_inner: any, index_inner: any) => (
              item.id == 3 ? (
                <div key={index_inner}>
                  {index_inner == 0 && (
                    <div className='flex flex-row gap-2'>
                      {item_inner.map((phone: string, phoneIndex: number) => (
                        <a className='text-[14px] text-white font-semibold' key={phoneIndex} href={`tel:${phone}`}>{phone}</a>
                      ))}
                    </div>
                  )}
                  {index_inner == 1 && (<a className='text-[14px] text-white font-semibold' href="mailto:info@veract.io"><span>{item_inner}</span></a>)}
                </div>
              ) : (
                <div key={index_inner} className='text-[14px] text-white font-semibold'>{item_inner}</div>
              )
            ))}
          </div>
        </div>
      ))}
      {/* <div className=" px-6 py-10 px-20">
        <div className="flex flex-col items-start flex-row justify-between items-center">
          <div className="transitionEffect afterScroll"><span className="font-semibold">ver</span><span className="textColorLogo">act</span></div>
          <a href="mailto:info@veract.io" className="flex items-center gap-2 text-lg">
            <FaEnvelope size={18} color="#4285F4" /> <span>info@veract.io</span>
          </a>
        </div>
        <div className="flex flex-col mt-6 flex-row justify-between">
          <div className="flex flex-col space-y-3">
            <div className="flex  items-start gap-2  ">
              <div><FaLocationDot size={18} color="#4285F4" /></div>
              <div><p className='text-wrap'>Regd. Office: 17, First Street, Tansi Nagar, Velachery, Chennai - 600 042</p></div>
            </div>
          </div>
          <div className="flex flex-col mt-6 space-y-3 mt-0">
            <div className="flex flex-col items-start gap-3">
              <div className='flex items-center justify-center gap-2'>
                <FaPhoneAlt size={18} color="#4285F4" />
                <a className='m-0 p-0' href="tel:+919789991565">+91 97899 91565</a>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <FaPhoneAlt size={18} color="#4285F4" />
                <a href="tel:+919962837650">+91 99628 37650</a>
              </div>
            </div>
            <div className='veractTags'>
              <div className=" flex gap-4 mt-4 mt-0 w-[100%] justify-end ">
                <a href="https://whatsapp.com/channel/0029VahNUEB90x31HeDatt2o" target='_blank' className="text-[#4285F4]"><FaWhatsapp size={20} /></a>
                <a href="https://www.linkedin.com/company/veract-consultancy-private-limited/" target='_blank' className="text-[#4285F4]"><FaLinkedin size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
}


{/* <div className='flex flex-row'> */ }
{/* {index_inner == 0 && (<>{item_inner}</>)}
                    {index_inner == 1 && (<>{item_inner}</>)} */}
{/* </div> */ }