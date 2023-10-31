import React from 'react'

import ImgShowcase from "@images/showcase-image.svg"

const Showcase = () => {
   return (
      <section className="showcase">
         <div className="container">
            {/* <!-- Text side --> */}
            <div className="jumbo">
               <div className="content">
                  <h1>
                     We Provide The Best Business Solutions
                  </h1>
                  <p>
                     Establish your vision and value proposition and turn them into testable prototypes.
                  </p>
                  <div>
                     {/* <!-- Get Consulting --> */}
                     <a href="#">
                        <button className="btn-orange">
                           Get Consulting <span className="fa-solid fa-arrow-up-right ms-2"></span>
                        </button>
                     </a>
                     {/* <!-- Learn More --> */}
                     <a href="#">
                        <button id="learn-more" className="btn-transparent">
                           Learn More <span className="fa-solid fa-arrow-up-right ms-2"></span>
                        </button>
                     </a>
                  </div>
               </div>
            </div>

            {/* <!-- Image side --> */}
            <div>
               <img src={ImgShowcase} alt="Businessman looking at tablet" />
            </div>
         </div>
      </section>
   )
}

export default Showcase