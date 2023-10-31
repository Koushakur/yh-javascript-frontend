import React from 'react'

import WhyUsEntry from './WhyUsEntry'

import ImgThumbsUp from '@images/icons/thumbs-up.svg'
import ImgPentagon from '@images/icons/pentagonal-graph.svg'
import ImgPen from '@images/icons/pen-tool.svg'
import ImgThinking from '@images/icons/thinking.svg'
import ImgConversation from '@images/photos/amy-hirschi.jpg'

const WhyUs = () => {
   return (
      <section className="why-us">
         <div className="grey-box"></div>

         <div className="container">

            <div className="content-box">
               <h3>Why Choose Us</h3>
               <h2>Why We Are The Best Business Consulting Agency</h2>

               <WhyUsEntry
                  Image={ImgThumbsUp}
                  Title="Process Excellence"
                  Description="Lorem ipsum dolor sit amet consectetur."
               />
               <WhyUsEntry
                  Image={ImgPentagon}
                  Title="Strategic Planning"
                  Description="Lorem ipsum dolor sit amet consectetur."
               />
               <WhyUsEntry
                  Image={ImgPen}
                  Title="Experience Design"
                  Description="Lorem ipsum dolor sit amet consectetur."
               />
               <WhyUsEntry
                  Image={ImgThinking}
                  Title="Artificial Intelligence"
                  Description="Lorem ipsum dolor sit amet consectetur."
               />
            </div>

            <div className="image-box">
               <img src={ImgConversation} alt="Two women talking" />
            </div>
         </div>
      </section>
   )
}

export default WhyUs