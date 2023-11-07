import React from 'react'

import { Link } from 'react-router-dom'

const NewsEntryPreview = ({ URL, Image, Category, Title, Description, DateMonth, DateDay }) => {
   function onClickFunc() {
      window.scrollTo({ top: 401, behavior: "instant" })
   }

   return (
      <>
         <div className="content">
            <Link to={URL} onClick={onClickFunc}>
               <div className="date-box">
                  <strong>{DateDay}</strong><br />
                  <p>{DateMonth}</p>
               </div>
               <img src={Image} alt="" />
            </Link>
            <Link to={`/news/${Category}`}><p>{Category}</p></Link>
            <Link to={URL} onClick={onClickFunc}>
               <h4>{Title}</h4>
               <p>{Description}</p>
            </Link >
         </div>
      </>
   )
}

export default NewsEntryPreview