import React from 'react'

const FeaturesEntry = ({ FAIconClasses, Title, Description }) => {
   return (
      <div className="content">
         <span className={FAIconClasses}></span>
         <h4>{Title}</h4>
         <p>{Description}</p>
      </div>
   )
}

export default FeaturesEntry