import React from 'react'

const Testimonial = ({ Image, Name, Title, Text, NumStars }) => {

   return (
      <div className="content">
         <div>
            {Array.from({ length: NumStars }).map((_, i) => { return <span key={i} className='fa-solid fa-star'></span> })}
         </div>
         <p>"{Text}"</p>
         <div className="person-info">
            <img src={Image} alt="" />
            <h4>{Name}</h4>
            <h3>{Title}</h3>
         </div>
      </div>
   )
}

export default Testimonial