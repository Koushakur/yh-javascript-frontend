import React from 'react'

const ServiceEntry = ({ URL, Title, Description }) => {
   return (
      <a href={URL}>
         <div className="content">
            <span className="fa-regular fa-horizontal-rule"></span>
            <h4>{Title}</h4>
            <p>{Description}</p>
            <div className="button-box">
               <button className="btn-black round"><span className="fa-solid fa-arrow-right"></span> </button>
            </div>
         </div>
      </a>
   )
}

export default ServiceEntry