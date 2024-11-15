"use client"
import Image from 'next/image'
import Modal from '../app/components/modal';
import TopnavBar from '../app/components/topnavbar';
import Banner from '../app/components/banner';
import Clients from '../app/components/clients';
import Services from '../app/components/services';
import Casestudies from '../app/components/casestudies';
import Testimonials from '../app/components/testimonials';
import Contacts from '../app/components/contacts';
import VeractDetails from '../app/components/veractDetails';
import Footer from '../app/components/footer';
import FoundersDesk from '../app/components/foundersDesk';
import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import { usePathname, useSearchParams,useRouter } from 'next/navigation'
import "../app/styles/styles.css"
// import "../app/globals.css"
import "../app/styles/mediaQuery.css"

const Index = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  console.log(searchParams?.get("sectionId"));
  const sectionId = searchParams?.get("sectionId");

  console.log("Inital section ID : "+sectionId)

  const scrollToElement=(sectionId:string)=>{
    const section = document.getElementById(sectionId);

    
    console.log("ROUTER");

  if (section) {
    section.scrollIntoView({behavior: 'smooth'});
    
    
    
  }
    
  }
  if(sectionId){
    console.log("ROUTER");

    scrollToElement(sectionId)
    window.history.replaceState(null, '', '/')
  }

  useEffect(() => {
    // if(router.query){
let scroll =   searchParams?.get("sectionId");
  console.log("scroll ID : "+scroll);
  if(scroll){
    scrollToElement(scroll);
    window.history.replaceState(null, '', '/')
  

  }

    //}
}, []);
    // const img = require("../public/images/backgroundImg.jpg")

    return (
        <>
            <div id="Home">
            <div className="mainPage fontFamily flex">
              <TopnavBar />
              <Banner />
            </div>
            <div>
            <Clients />
            </div>
            <div>
              <FoundersDesk />
            </div>
            <div >
            <Services />
            </div>
            <div  >
              <Casestudies />
            </div>
            <div >
              <Testimonials />
            </div>
            <div>
            <Contacts />
            </div>
            <div>
              < VeractDetails />
            </div>
            <div>
              < Footer/>
            </div>
        </div>
        </>
    )
}

export default Index;