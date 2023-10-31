import React from 'react'

import ServiceEntry from './ServiceEntry'

const Services = () => {
   return (
      <section className="services">
         <div className="container">
            {/* Title */}
            <div className="title">
               <h3>Our Services</h3>
               <h2>We Provide The Best<br /> Service For Consulting</h2>
            </div>

            {/* Main content */}
            <div className="gridbox">

               <ServiceEntry
                  URL="/service"
                  Title="Business Advice"
                  Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."
               />
               <ServiceEntry
                  URL="/service"
                  Title="Startup Busines"
                  Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."
               />
               <ServiceEntry
                  URL="/service"
                  Title="Financial Advice"
                  Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."
               />
               <ServiceEntry
                  URL="/service"
                  Title="Risk Management"
                  Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."
               />
            </div>

            {/* Browse services button */}
            <div className="browse">
               <a href="#">
                  <button className="btn-transparent">
                     Browse Services <span className="fa-solid fa-arrow-up-right ms-2"></span>
                  </button>
               </a>
            </div>
         </div>
      </section>
   )
}

export default Services