import React from 'react'

const WhyUsEntry = ({ Image, Title, Description }) => {
   return (
      <div className="content">
         <img src={Image} alt="" />
         <h4>{Title}</h4>
         <p>{Description}</p>
      </div>
   )
}

export default WhyUsEntry