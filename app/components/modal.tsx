import React, { useEffect } from "react";
// import "./Modal.css";
import "../styles/styles.css"

type ModalProps={
    setOpenModal:(value:boolean)=>void;
}
function Modal({ setOpenModal}:ModalProps) {

  useEffect(() => {
    document.body.style.overflowY="hidden";
    return () => {
      document.body.style.overflowY="scroll";
    };
  },[]);
  return (
    <div className="fontFamily">
      <div className="modalBackground">
      <div className="modalContainer ">
      {/* <div className="flex items-center justify-center"> */}
        <div className="titleCloseBtn">
          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button> */}
        </div>
        <div className="modalTitle">
            Enquiry has been submitted successfully
        </div>
        <div className="body">
          <p>We will reach you soon!</p>
        </div>
        <div className="footer flex align-center">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Continue
          </button>
          {/* <button>Continue</button> */}
        </div>
      {/* </div> */}
     </div>


           
     </div>
      {/* <div className="modalContainer_mobile">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
            Enquiry Submitted Successfully...
        </div>
        <div className="body">
          <p>We will reach you soon</p>
        </div>
        <div className="footer flex align-center">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
     </div> */}
     </div>
  );
}

export default Modal;