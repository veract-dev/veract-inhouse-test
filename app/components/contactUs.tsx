import '../styles/styles.css'
import '../styles/mediaQuery.css';
import React from 'react';
import { useRouter } from 'next/router';

export default function ContactUs(){

    const router = useRouter();
    const handleSubmit = () => {
      router.push("/");
    }
    const triggerRecaptchaVerification = () => {
        const chkVerification = document.getElementById('chkVerification')as HTMLInputElement;
        if (chkVerification && chkVerification.checked) {
          chkVerification.disabled = true;
          // Perform the necessary logic for reCAPTCHA verification
        }
      };
    
    return(
        <div className="contactFormBackground">
        <div className=" flex flex-col pt-16 servicesMain  ">
            <div className="flex items-center justify-center">
            <hr></hr>
            <label className="text-3xl text-black font-semibold">Contact<span className="servicesHeading text-3xl font-semibold pl-4">Us</span></label>
            <hr></hr>
            </div>
    <div id="contacts" className="pb-5 anchor-scroll ">
        {/* <nav className="navbar navbar-dark bg-dark w-50 mb-5">
            <div className="container">
                <span className="me-yellow-color mx-auto fs-5 fw-bold">CONTACT US</span>
            </div>
        </nav> */}
        
        <div className="px-2 pt-10  flex items-center justify-center ">
            <div className="container p-3  flex items-center justify-center border rounded contact-form-area">
                <form onSubmit={handleSubmit} action="https://formsubmit.co/ccb4d5c859355807d3b5b2611551bcc9" method="POST">
                <div>
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_next" value="http://www.motoelectrix.in/" />
                        <input type="hidden" name="_subject" value="New Contact Message" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting us, we will get back to you soon!!"/>
    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="input-group mb-3">
                                <span className="input-group-text rounded-0 contact-input-icon-bg">
                                    <img loading="lazy" src="/name_icon.png" alt=" " />
                                </span>
                                <div className="form-floating">
                                    <input type="text" className="form-control rounded-0" id="txtName" required name="name" placeholder="NAME" value=""/>
                                    {/* <label htmlFor="txtName">NAME</label> */}
                                    <div className="invalid-feedback">Please provide a valid name.</div>
                                </div>

                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text rounded-0 contact-input-icon-bg">
                                    <img loading="lazy" src="/phone_icon.png" alt=" " />
                                </span>
                                <div className="form-floating">
                                    <input name="phone" type="tel" className="form-control rounded-0" id="txtPhone"
                                        placeholder="PHONE" value="" required/>
                                    {/* <label htmlFor="txtPhone">PHONE</label> */}
                                    <div className="invalid-feedback">Please provide a valid phone.</div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text rounded-0 contact-input-icon-bg">
                                    <img loading="lazy" src="/mail_icon.png" alt=" " />
                                </span>
                                <div className="form-floating">
                                    <input name="email" type="email" className="form-control rounded-0" id="txtEmail"
                                        placeholder="E-MAIL" value="" required/>
                                    {/* <label htmlFor="txtEmail">E-MAIL</label> */}
                                    <div className="invalid-feedback">Please provide a valid email.</div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text rounded-0 contact-input-icon-bg">
                                    <img loading="lazy" src="/org_icon.png" alt=" " />
                                </span>
                                <div className="form-floating">
                                    <input name="organisation" type="text" className="form-control rounded-0" id="txtOrg"
                                        placeholder="ORGANISATION " value="" required/>
                                    {/* <label htmlFor="txtOrg">ORGANISATION</label> */}
                                    <div className="invalid-feedback">Please provide a valid organisation.</div>
                                </div>
                            </div>
                            {/* <div className="input-group mb-3">
                                <span className="input-group-text rounded-0 contact-input-icon-bg">
                                    <img loading="lazy" src="/requirement_icon.png" alt=" " />
                                </span>
                                <div className="form-floating">
                                    <select name="requirement" id="txtRequirement" className="form-control rounded-0"
                                        required>
                                        <option value="OEM">OEM</option>
                                        <option value="Housing society">Housing society</option>
                                        <option value="Office space">Office space</option>
                                        <option value="Retail space">Retail space</option>
                                    </select>
                                    <label htmlFor="txtRequirement">REQUIREMENT</label>
                                    <div className="invalid-feedback">Please provide a valid requirement.</div>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* <div className="mb-3">
                                <div className="form-floating">
                                <textarea  name="message" className="form-control rounded-0" id="txtRemarks" placeholder=" " style={{ height: "206px" }} value=""></textarea>

                                    <label htmlFor="txtRemarks">REMARKS</label>
                                </div>
                            </div> */}
                            {/* <div className="input-group mb-3">
                                <span className="input-group-text rounded-0 contact-input-icon-bg pt-1">
                                    <img loading="lazy" src="assets/img/contact/secure_icon.png" alt=" " />
                                </span>
                                <div className="form-control rounded-0 py-1">
                                    VERIFICATION<br />
                                    <input className="form-check-input rounded-0" onClick={triggerRecaptchaVerification} type="checkbox"  value="" id="chkVerification" />
                                    <label className="form-check-label fw-bolder" htmlFor="flexCheckDefault">
                                        I am not a Robot
                                    </label>
                                </div>
                            </div> */}
                            <div className="d-grid" style={{height: "55px"}}>
                                <button id="contactFormSubmit" type="submit"
                                    className="btn rounded-0 contact-send-message-btn" disabled>SEND
                                    MESSAGE</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
        </div>

    );
}