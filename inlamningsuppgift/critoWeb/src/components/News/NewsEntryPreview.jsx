import React from 'react'

import { Link } from 'react-router-dom'

const NewsEntryPreview = ({ URL, Image, Category, Title, Description, DateMonth, DateDay }) => {
   return (
      <>
         <Link to={URL} onClick={() => { window.scrollTo({ top: 0, behavior: "instant" }) }}>
            <div className="content">
               <div className="date-box">
                  <strong>{DateDay}</strong><br />
                  <p>{DateMonth}</p>
               </div>
               <img src={Image} alt="" />
               <p>{Category}</p>
               <h4>{Title}</h4>
               <p>{Description}</p>
            </div>
         </Link>
      </>
   )
}

export default NewsEntryPreview