import React from 'react'
import './styleFooter.scss'
import ImgLogoCritoWhite from '@images/logos/LogoCritoWhite.svg'

const footer = () => {
   return (
      <footer>
         <section className="footer-upper">
            <div className="container">
               <div className="company-info">
                  <img src={ImgLogoCritoWhite} alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates
                     laborum nam ratione minus necessitatibus, iure praesentium.</p>
               </div>
               <div className="content-box">

                  <div className="content">
                     <h4>Company</h4>
                     <ul>
                        <li><a href="#" target="_blank">About</a></li>
                        <li><a href="#" target="_blank">Features</a></li>
                        <li><a href="#" target="_blank">Works</a></li>
                        <li><a href="#" target="_blank">Career</a></li>
                     </ul>
                  </div>

                  <div className="content">
                     <h4>Help</h4>
                     <ul>
                        <li><a href="#" target="_blank">Customer Support</a></li>
                        <li><a href="#" target="_blank">Delivery Details</a></li>
                        <li><a href="#" target="_blank">Term & Conditions</a></li>
                        <li><a href="#" target="_blank">Privacy Policy</a></li>
                     </ul>
                  </div>

                  <div className="content">
                     <h4>Resources</h4>
                     <ul>
                        <li><a href="#" target="_blank">Free eBooks</a></li>
                        <li><a href="#" target="_blank">Development Tutorial</a></li>
                        <li><a href="#" target="_blank">How To - Blog</a></li>
                        <li><a href="#" target="_blank">Youtube Playlist</a></li>
                     </ul>
                  </div>

                  <div className="content">
                     <h4>Link</h4>
                     <ul>
                        <li><a href="#" target="_blank">Free eBooks</a></li>
                        <li><a href="#" target="_blank">Development Tutorial</a></li>
                        <li><a href="#" target="_blank">How To - Blog</a></li>
                        <li><a href="#" target="_blank">Youtube Playlist</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>

         <section className="footer-lower">
            <div className="container">
               <div className="copyright-social">
                  <p> &copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                  <div className="social">
                     <a href="https://www.facebook.com" target="_blank"><span className="fa-brands fa-facebook"></span></a>
                     <a href="https://www.twitter.com" target="_blank"><span className="fa-brands fa-twitter"></span></a>
                     <a href="https://www.instagram.com" target="_blank"><span className="fa-brands fa-instagram"></span></a>
                     <a href="https://www.linkedin.com" target="_blank"><span className="fa-brands fa-linkedin"></span></a>
                  </div>
               </div>
            </div>
         </section>
      </footer>
   )
}

export default footer
