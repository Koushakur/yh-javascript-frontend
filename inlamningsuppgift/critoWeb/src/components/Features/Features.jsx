import React from 'react'

import FeaturesEntry from './FeaturesEntry'

const Features = () => {
   return (
      <section className="features">
         <div className="container">

            <div className="info">
               <h3>Features</h3>
               <h2>Our Accounting is trusted by thousands of companies</h2>
               <button className="btn-orange">
                  Learn More <span className="fa-solid fa-arrow-up-right ms-2"></span>
               </button>
            </div>

            <div className="grid">
               <FeaturesEntry
                  FAIconClasses="fa-light fa-handshake"
                  Title="Business Advice"
                  Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
               />
               <FeaturesEntry
                  FAIconClasses="fa-regular fa-lightbulb-on"
                  Title="Startup Business"
                  Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
               />
               <FeaturesEntry
                  FAIconClasses="fa-sharp fa-light fa-chart-mixed-up-circle-dollar"
                  Title="Finacial Advice"
                  Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
               />
               <FeaturesEntry
                  FAIconClasses="fa-sharp fa-regular fa-cube"
                  Title="Risk Management"
                  Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
               />
            </div>

         </div>
      </section>
   )
}

export default Features