import React from 'react'

const NewsEntryPreview = ({ URL, Image, Category, Title, Description, DateMonth, DateDay }) => {
   return (
      <>
         <a href={URL}>
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
         </a>
      </>
   )
}

export default NewsEntryPreview