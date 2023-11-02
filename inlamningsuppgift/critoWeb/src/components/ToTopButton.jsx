import React from 'react'
import { useState, useEffect } from 'react';

const ToTopButton = () => {
   const [isVisible, setVisibility] = useState(false)

   useEffect(() => {
      const scrollEvent = () => {
         if (window.scrollY > 400)
            setVisibility(true);
         else
            setVisibility(false);
      }

      window.addEventListener("scroll", scrollEvent);

      return () => { window.removeEventListener("scroll", scrollEvent) }
   }, []);

   function toTop() {
      window.scrollTo({ top: 0 });
   }

   return (
      <>
         {isVisible && <button onClick={toTop} className="btn-orange round" id="to-top"><span className="fa-solid fa-arrow-up"></span></button >}
      </>
   )
}

export default ToTopButton