import React from 'react'

const TeamMember = ({ Image, Name, Title }) => {
   return (
      <div className="content">
         <img src={Image} alt="" />
         <h4>{Name}</h4>
         <p>{Title}</p>
      </div>
   )
}

export default TeamMember