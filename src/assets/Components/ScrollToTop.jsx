import React, { useState, useEffect } from 'react';
import { IoIosArrowDropup } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Não mostrar no mobile portrait
    const isMobilePortrait = window.innerWidth <= 640 && window.innerHeight > window.innerWidth;
    
    if (!isMobilePortrait && window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', toggleVisibility); // para quando mudar orientação
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-32 sm:bottom-20 lg:bottom-20 xl:bottom-20 right-2 sm:right-6 lg:right-12 xl:right-12 transition-opacity text-orange hover:text-green dark:text-green dark:hover:text-orange text-3xl 
              ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <IoIosArrowDropup size={50} />
    </button>
  );
};

export default ScrollToTop;
