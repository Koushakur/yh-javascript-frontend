import React from 'react'

import StudyEntryPreview from './StudyEntryPreview'

import Img1 from '@images/photos/adeolu-eletu.jpg'
import Img2 from '@images/photos/marek-levak.jpg'
import Img3 from '@images/photos/oli-dale.jpg'
import Img4 from '@images/photos/carlos-muza.jpg'

const Studies = () => {
   return (
      <section className="studies">
         <div className="container">
            <div>
               <h3>Project & Case Studies</h3>
               <h2>Let's Look At Our Global Projects</h2>
            </div>


            <div className="content-box">
               <StudyEntryPreview
                  Image={Img1}
                  Title="Grow your business"
                  URL="/studies"
               />
               <StudyEntryPreview
                  Image={Img2}
                  Title="Why your client needs a responsive website"
                  URL="/studies"
               />
               <StudyEntryPreview
                  Image={Img3}
                  Title="Educate your employees to get better results"
                  URL="/studies"
               />
               <StudyEntryPreview
                  Image={Img4}
                  Title="Business insights is a important piece of your business"
                  URL="/studies"
               />
            </div>

            <a href="#">
               <button className="btn-black">
                  All Recent Projects <span className="fa-solid fa-arrow-up-right ms-2"></span>
               </button>
            </a>

         </div>
      </section>
   )
}

export default Studies