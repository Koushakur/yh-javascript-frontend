import React from 'react'
import { useState, useEffect } from 'react';

const ToTopButton = () => {
   const [isVisible, setIsVisible] = useState(false)

   window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
   });
   // useEffect(() => {
   // }, []);

   function toTop() {
      window.scrollTo(0, 0);
   }

   return (
      <>
         {isVisible && <button onClick={toTop} className="btn-orange round" id="to-top"><span className="fa-solid fa-arrow-up"></span></button>}
      </>
   )
}

export default ToTopButton