"use client"
import React, { useState } from 'react';
import styles from './Accordion.module.css'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

const Accordion = ({accordionTitle, accordionContent}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <button
        className={styles['accordion-button']}
        onClick={toggleAccordion}
      >
        {accordionTitle}
        {isOpen === false ? <span class="material-symbols-outlined arrow">arrow_drop_down</span> : <span class="material-symbols-outlined arrow">arrow_drop_up</span>}
        
      </button>
      <div
        className={`${styles['accordion-content']} ${
          isOpen ? styles.open : ''
        }`}
      >
        {accordionContent}
      </div>
    </div>
  );
};

export default Accordion;
