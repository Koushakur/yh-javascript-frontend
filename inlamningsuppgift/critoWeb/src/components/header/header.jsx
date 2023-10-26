import React from 'react'
import './styleHeader.scss'
import ImgLogoCrito from '@images/logos/LogoCrito.svg'

const header = () => {
   return (
      <header>
         <div className="container">
            <a className="logo" href="index.html"><img src={ImgLogoCrito} alt="Crito logotype" /></a>

            {/* contact-social-navigation-account */}
            <div className="csna">
               {/* Contact info and social links */}
               <div className="contact-social ">

                  {/* Contact info // Logo at small sizes */}
                  <div className="contact">
                     <div><span className="fa-regular fa-phone me-2"></span>+46 (8) 121 470 50 </div><span
                        className="fa-thin fa-pipe"></span>
                     <div><span className="fa-regular fa-envelope me-2"></span>info@crito.com</div><span
                        className="fa-thin fa-pipe"></span>
                     <div><span className="fa-regular fa-location-dot me-2"></span>Sveavägen 31, 111 34 STOCKHOLM</div>
                  </div>

                  <div className="small-logo">
                     <a href="index.html"><img src={ImgLogoCrito} alt="Crito logotype" /></a>
                  </div>
                  {/*  */}

                  {/* Social Links */}
                  <div className="social">
                     <a href="facebook.html" target="_blank"><span className="fa-brands fa-facebook"></span></a>
                     <a href="twitter.html" target="_blank"><span className="fa-brands fa-twitter"></span></a>
                     <a href="instagram.html" target="_blank"><span className="fa-brands fa-instagram"></span></a>
                     <a href="linkedin.html" target="_blank"><span className="fa-brands fa-linkedin"></span></a>
                  </div>
               </div>

               {/* Nav and Login */}
               <div className="navigation-account">
                  {/* Navigation */}
                  <nav>
                     <a href="index.html" id="index">Home</a>
                     <a href="service.html" id="service">Service</a>
                     <a href="news.html" id="news">News</a>
                     <a href="contact.html" id="contact">Contact</a>
                  </nav>

                  {/* Login small */}
                  <div className="account-mobile">
                     <a href="login.html">
                        <button className="btn-orange round">
                           <span className="fa-solid fa-arrow-right-to-bracket"></span>
                        </button>
                     </a>
                  </div>
                  {/* Login large */}
                  <div className="account-large">
                     <a href="login.html">
                        <button className="btn-orange">
                           Login<span className="fa-solid fa-arrow-up-right ms-2"></span>
                        </button>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default header