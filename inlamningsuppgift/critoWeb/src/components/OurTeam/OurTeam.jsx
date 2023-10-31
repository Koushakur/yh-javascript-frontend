import React from 'react'

import TeamMember from './TeamMember'
import ImgTeamMember1 from '@images/photos/christina-wocintechchat-com-01.jpg'
import ImgTeamMember2 from '@images/photos/itay-verchik.jpg'
import ImgTeamMember3 from '@images/photos/christina-wocintechchat-com-03.jpg'
import ImgTeamMember4 from '@images/photos/the-connected-narrative.jpg'


const OurTeam = () => {
   return (
      <section className="our-team">
         <div className="container">
            {/* Title and button */}
            <div className="title-box">
               <div>
                  <h3>Meet Our Team</h3>
                  <h2>Experienced Team Members</h2>
               </div>
               <a href="#">
                  <button className="btn-orange">Browse Team <span
                     className="fa-solid fa-arrow-up-right ms-2"></span></button>
               </a>
            </div>

            {/* Carousel structure start */}
            <div id="carouselTeam" className="carousel slide" data-bs-ride="carousel" data-ride="carousel">

               {/* Indicators */}
               <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselTeam" data-bs-slide-to="0" className="active"
                     aria-label="Slide 1" aria-current="true"></button>
                  <button type="button" data-bs-target="#carouselTeam" data-bs-slide-to="1"
                     aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselTeam" data-bs-slide-to="2"
                     aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselTeam" data-bs-slide-to="3"
                     aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselTeam" data-bs-slide-to="4"
                     aria-label="Slide 5"></button>
               </div>

               {/* Carousel items */}
               <div className="carousel-inner">

                  {/* Slide 1 */}
                  <div className="carousel-item active">
                     <div className="content-box">

                        <TeamMember
                           Image={ImgTeamMember1}
                           Name="Kristine Palmer"
                           Title="Chief Operations Officer"
                        />
                        <TeamMember
                           Image={ImgTeamMember2}
                           Name="Mark Aubri"
                           Title="Senior Consultant"
                        />
                        <TeamMember
                           Image={ImgTeamMember3}
                           Name="Kimberly Hansen"
                           Title="Senior Consultant"
                        />
                        <TeamMember
                           Image={ImgTeamMember4}
                           Name="Justin Willoman"
                           Title="Senior Tech Consultant"
                        />
                     </div>
                  </div>
                  {/* */}

                  {/* Slide 2 */}
                  <div className="carousel-item">
                     <div className="content-box">
                        <TeamMember
                           Image={ImgTeamMember2}
                           Name="Mark Aubri"
                           Title="Senior Consultant"
                        />
                        <TeamMember
                           Image={ImgTeamMember1}
                           Name="Kristine Palmer"
                           Title="Chief Operations Officer"
                        />
                        <TeamMember
                           Image={ImgTeamMember3}
                           Name="Kimberly Hansen"
                           Title="Senior Consultant"
                        />
                        <TeamMember
                           Image={ImgTeamMember4}
                           Name="Justin Willoman"
                           Title="Senior Tech Consultant"
                        />
                     </div>
                  </div>
                  {/* */}

                  {/* Slide 3 */}
                  <div className="carousel-item">
                     <div className="content-box">
                        <TeamMember
                           Image={ImgTeamMember1}
                           Name="Kristine Palmer"
                           Title="Chief Operations Officer"
                        />
                        <TeamMember
                           Image={ImgTeamMember2}
                           Name="Mark Aubri"
                           Title="Senior Consultant"
                        />
                        <TeamMember
                           Image={ImgTeamMember4}
                           Name="Justin Willoman"
                           Title="Senior Tech Consultant"
                        />
                        <TeamMember
                           Image={ImgTeamMember3}
                           Name="Kimberly Hansen"
                           Title="Senior Consultant"
                        />
                     </div>
                  </div>
                  {/* */}

                  {/* Slide 4 */}
                  <div className="carousel-item">
                     <div className="content-box">
                        <TeamMember
                           Image={ImgTeamMember3}
                           Name="Kimberly Hansen"
                           Title="Senior Consultant"
                        />
                        <TeamMember
                           Image={ImgTeamMember2}
                           Name="Mark Aubri"
                           Title="Senior Consultant"
                        />
                        <TeamMember
                           Image={ImgTeamMember4}
                           Name="Justin Willoman"
                           Title="Senior Tech Consultant"
                        />
                        <TeamMember
                           Image={ImgTeamMember1}
                           Name="Kristine Palmer"
                           Title="Chief Operations Officer"
                        />
                     </div>
                  </div>
                  {/* */}

                  {/* Slide 5 */}
                  <div className="carousel-item">
                     <div className="content-box">
                        <TeamMember
                           Image={ImgTeamMember2}
                           Name="Mark Aubri"
                           Title="Senior Consultant"
                        />
                        <TeamMember
                           Image={ImgTeamMember1}
                           Name="Kristine Palmer"
                           Title="Chief Operations Officer"
                        />
                        <TeamMember
                           Image={ImgTeamMember4}
                           Name="Justin Willoman"
                           Title="Senior Tech Consultant"
                        />
                        <TeamMember
                           Image={ImgTeamMember3}
                           Name="Kimberly Hansen"
                           Title="Senior Consultant"
                        />
                     </div>
                  </div>
                  {/* */}

               </div>

            </div>

         </div>

      </section>
   )
}

export default OurTeam