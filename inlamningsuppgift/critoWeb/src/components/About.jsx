import React from 'react'

import ImgFounder from '@images/photos/daria-pimkina-02.jpg'

const About = () => {
   return (
      <section className="about">
         <div className="container">

            <div className="image-box">
               <img src={ImgFounder} alt="Founder walking in the office" />
               <div className="image-info">
                  <h4>Samantha Brown, </h4>
                  <h3>Founder</h3>
                  <p>"Lorem ipsum dolor sit amet consecteur adiplisicing elit.</p>
               </div>
            </div>

            <div className="content-box">
               <h3>About Company</h3>
               <h2>We Are Business Consulting & Credit Repair Experts</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse
                  obcaecati? Ex esse error voluptates iure vel totam eos.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci
                  accusantium libero provident voluptate amet.</p>
               <div className="buttons">
                  <a href="#">
                     <button className="btn-black">Learn More <span
                        className="fa-solid fa-arrow-up-right ms-2"></span></button>
                  </a>
                  <div className="video-button">
                     <a href="#">
                        <button className="btn-transparent round"><span
                           className="fa-sharp fa-solid fa-play"></span></button>
                        <b>Intro Video</b>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About