import React from 'react'

const NewsEntryPreview = ({ URL, Image, Genre, Title, Description, DateMonth, DateDay }) => {
   function monthNumToName(mNum) {
      switch (mNum) {
         case 1:
            return "Jan"
         case 2:
            return "Feb"
         case 3:
            return "Mar"
         case 4:
            return "Apr"
         case 5:
            return "May"
         case 6:
            return "Jun"
         case 7:
            return "Jul"
         case 8:
            return "Aug"
         case 9:
            return "Sep"
         case 10:
            return "Okt"
         case 11:
            return "Nov"
         case 12:
            return "Dec"

         default: // Undefined month
            return "Und"
      }
   }
   return (
      <>
         <a href={URL}>
            <div className="content">
               <div className="date-box">
                  <strong>{DateDay}</strong><br />
                  <p>{monthNumToName(DateMonth)}</p>
               </div>
               <img src={Image} alt="" />
               <p>{Genre}</p>
               <h4>{Title}</h4>
               <p>{Description}</p>
            </div>
         </a>
      </>
   )
}

export default NewsEntryPreview