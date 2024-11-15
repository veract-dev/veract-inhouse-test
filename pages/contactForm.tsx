'use client';
import '../app/styles/styles.css';
import '../app/styles/contacts.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopnavBar from '../app/components/topnavbar';

import React,{useState} from 'react';
import { useInView } from 'react-intersection-observer';

export default function ContactForm() {
   
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange =() =>{
        setIsChecked(!isChecked);
    }

    return (
        
        <div className=" flex flex-col  contactsMain fontFamily ">
         <TopnavBar />
            {/* <div className="flex items-center justify-center">
                <hr className="separator"></hr>
                <div className='section-title'>
                <label className=" section-title-highlight">Contact<span className="servicesHeading  p-3">Us</span></label>
                </div>
                <hr className="separator"></hr>
            </div> */}
            {/* old One */}
            {/*  <div className="flex items-center justify-center pl-28 pr-28 pt-16 pb-16">
            <div className='flex outlineContactUs '>

                <div className="flex flex-row md:gap-4 ">
                    <div className='flex flex-col md:gap-2 '>
                        <div className='flex flex-row items-center formBorderBox' >
                            <div className="formImage "><img src="/userblue.png" className='p-4'></img></div>
                            <input type="text" placeholder='NAME' className="formInputBox p-6"></input>
                        </div>
                        <div className='flex flex-row items-center formBorderBox'>
                            <div className="formImage "><img src="/phoneBlue.png" className='p-4'></img></div>
                            <input type="text" placeholder='PHONE' className="formInputBox p-6 "></input>
                        </div>
                        <div className='flex flex-row items-center formBorderBox'>
                            <div className='formImage '><img src="/emailBlue.png" className='p-4'></img></div>
                            <input type="text" placeholder='E-MAIL' className="formInputBox p-6 "></input>
                        </div>
                        <div className='flex flex-row items-center formBorderBox'>
                            <div className='formImage '><img src="/organizationBlue.png" className="p-4" ></img></div>
                            <input type="text" placeholder='ORGANIZATION' className="formInputBox p-6"></input>
                        </div>
                    </div>
                    <div className='flex flex-col md:gap-3.5'>
                           
                                <textarea className="  textAreaBox " placeholder='Enter your remarks'></textarea>
                           
                            <div className='flex flex-row verifyBorderBox md:gap-2 '>

                                <div className='formImage '><img src="/verificationBlue.png" className="p-4"></img></div>
                                <div className="formInputBox flex flex-col "> 
                                <label className=' font-semibold verifyFont'>VERIFICATION</label>
                                <div className='flex flex-row md:gap-2'><input type="checkbox" onChange={handleCheckboxChange} checked={isChecked} ></input>
                                <label className='font-bold verifyFont'>I am not a robot</label></div>
                                </div>
                            </div>
                            <button className={!isChecked ? 'submitBoxUnverified':''}>
                            <div className='flex items-center justify-center w-46 h-14 submitBox '>
                                    Send Message
                            </div>
                            </button>
                        </div>

                </div>

            </div>
            </div> */}
            {/* new one */}
             {/* <section className="contact_us">
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="contact_inner">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="contact_form_inner">
                                    <div className="contact_field">
                                        <h3>Contact Us</h3>
                                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                        <div className='col-md-10'>
                                        <input type="text" className="form-control form-group" placeholder="Name" />
                                        <input type="text" className="form-control form-group" placeholder="Email" />
                                        <textarea className="form-control form-group textContact" placeholder="Message"></textarea>
                                        </div>
                                        <button className="contact_form_submit">Send</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="right_conatct_social_icon d-flex align-items-end">
                                   <div className="socil_item_inner d-flex">
                                      <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact_info_sec">
                            <h4>Contact Info</h4>
                            <div className="d-flex info_single align-items-center">
                                <i className="fas fa-headset"></i>
                                <span>+91 8009 054294</span>
                            </div>
                            <div className="d-flex info_single align-items-center">
                                <i className="fas fa-envelope-open-text"></i>
                                <span>info@flightmantra.com</span>
                            </div>
                            <div className="d-flex info_single align-items-center">
                                <i className="fas fa-map-marked-alt"></i>
                                <span>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE</span>
                            </div>
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    
    {/* <section className="map_sec">
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="map_inner">
                        <h4>Find Us on Google Map</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.</p>
                        <div className="map_bind">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin" width="100%" height="450"  frameBorder="0" style={{ border: '0' }}  aria-hidden="false" ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
      
            <div className="contact_us_2">
            
    <div className="responsive-container-block big-container">
    {/* <div className="blueBG">
    </div> */}
    <div className="responsive-container-block container">
      <form className="form-box">
        <div className="container-block form-wrapper">
          <p className="text-blk contactus-head">
            Get in Touch
          </p>
          <p className="text-blk contactus-subhead">
          Feel Free to contact us any time. We will get back to you as soon as we can!.
          </p>
          <div className="responsive-container-block">
            <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
              <p className="text-blk input-title">
                FIRST NAME
              </p>
              <input className="input" id="ijowk" name="FirstName" placeholder="Enter first name..."/>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p className="text-blk input-title">
                LAST NAME
              </p>
              <input className="input" id="indfi" name="Last Name" placeholder="Enter last name..."/>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p className="text-blk input-title">
                EMAIL
              </p>
              <input className="input" id="ipmgh" name="Email" placeholder="Enter email..."/>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p className="text-blk input-title">
                PHONE NUMBER
              </p>
              <input className="input" id="imgis" name="PhoneNumber" placeholder="Enter phone number..."/>
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
              <p className="text-blk input-title">
                WHAT DO YOU HAVE IN MIND
              </p>
              <textarea className="textinput" id="i5vyy" placeholder="Enter query..."></textarea>
            </div>
          </div>
          <button className="submit-btn">
            Submit
          </button>
        </div>
        <div className="social-media-links">
          <a href="#" id="ix94i-2">
            <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"/>
          </a>
          <a href="#">
            <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"/>
          </a>
          <a href="#">
            <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"/>
          </a>
          <a href="#" id="izldf-2">
            <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"/>
          </a>
        </div>
      </form>
    </div>
  </div>
</div>

  
        </div>
       
    );
}