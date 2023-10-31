import React from 'react'

const StudyEntryPreview = ({ Image, Title, URL }) => {
   return (
      <div className="content">
         <img src={Image} alt="" />
         <h4>{Title}</h4>
         <a href={URL}>
            <div>Read More <span className="fa-solid fa-arrow-up-right"></span></div>
         </a>
      </div>
   )
}

export default StudyEntryPreview