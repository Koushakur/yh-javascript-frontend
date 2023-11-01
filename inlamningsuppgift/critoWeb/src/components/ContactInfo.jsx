import React from 'react'

import ImgVisitUs from '@images/icons/visit-us.svg'
import ImgCallUs from '@images/icons/call-us.svg'
import ImgEmailUs from '@images/icons/email-us.svg'

const ContactInfo = () => {
   return (
      <section className="contact-info">
         <div className="container">

            <div className="content">
               <img src={ImgVisitUs} alt="" />
               <div>
                  <h4>Visit us</h4>
                  <p>Sveavägen 31<br />
                     111 34 STOCKHOLM</p>
               </div>
            </div>

            <div className="content">
               <img src={ImgCallUs} alt="" />
               <div>
                  <h4>Call us</h4>
                  <p>+46 (8) 121 470 50<br />
                     +46 (8) 121 470 51</p>
               </div>
            </div>

            <div className="content">
               <img src={ImgEmailUs} alt="" />
               <div className="email-box">
                  <h4>Email us</h4>
                  <a href="mailto:info@crito.com">
                     <p>info@crito.com</p>
                  </a>
                  <a href="mailto:support@crito.com">
                     <p>support@crito.com</p>
                  </a>
               </div>
            </div>
         </div>
      </section >
   )
}

export default ContactInfo