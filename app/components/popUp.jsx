// components/Popup.js
import React from 'react';
// import styles from './Popup.module.css';

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <p>This is the pop-up content.</p>
      </div>
    </div>
  );
};

export default Popup;
