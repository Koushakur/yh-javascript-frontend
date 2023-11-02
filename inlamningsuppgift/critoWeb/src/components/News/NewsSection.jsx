import React from 'react'

import NewsEntryPreview from './NewsEntryPreview'

import ImgNews1 from '@images/photos/linkedin-sales-solutions-01.jpg'
import ImgNews2 from '@images/photos/emiliano-vittoriosi.jpg'
import ImgNews3 from '@images/photos/kobu-agency.jpg'

const NewsSection = () => {
   return (
      <section className="news">
         <div className="container">

            {/* Title and button */}
            <div className="title-box">
               <div>
                  <h3>Articles & News</h3>
                  <h2>Get Every Single Article & News</h2>
               </div>
               <a href="#">
                  <button className="btn-transparent">Browse Articles <span
                     className="fa-solid fa-arrow-up-right ms-2"></span></button>
               </a>
            </div>

            {/* Carousel structure start */}
            <div id="carouselNews" className="carousel slide" data-bs-ride="carousel" data-ride="carousel">

               {/* Indicators */}
               <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselNews" data-bs-slide-to="0" className="active"
                     aria-label="Slide 1" aria-current="true"></button>
                  <button type="button" data-bs-target="#carouselNews" data-bs-slide-to="1"
                     aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselNews" data-bs-slide-to="2"
                     aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselNews" data-bs-slide-to="3"
                     aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselNews" data-bs-slide-to="4"
                     aria-label="Slide 5"></button>
               </div>

               {/* Carousel items */}
               <div className="carousel-inner">

                  {/* Slide 1 */}
                  <div className="carousel-item active">
                     <div className="content-box">

                        <NewsEntryPreview
                           URL="/news"
                           Image={ImgNews1}
                           Category="Business"
                           Title="How To Use Digitalization In The Classroom"
                           Description="Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed hic libero."
                           DateMonth={3}
                           DateDay={25}
                        />
                        <NewsEntryPreview
                           URL="/news"
                           Image={ImgNews2}
                           Category="Business"
                           Title="How To Implement Chat GPT In Your Projects"
                           Description="Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed hic libero."
                           DateMonth={3}
                           DateDay={17}
                        />

                        <NewsEntryPreview
                           URL="/news"
                           Image={ImgNews3}
                           Category="Business"
                           Title="The Guide To Support Modern CSS Design"
                           Description="Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed hic libero."
                           DateMonth={3}
                           DateDay={13}
                        />
                     </div>
                  </div>
                  {/*  */}

                  {/* Slide 2 */}
                  <div className="carousel-item">
                     <div className="content-box">

                        <NewsEntryPreview
                           URL="/news"
                           Image={ImgNews1}
                           Category={"Business"}
                           Title={"How To Use Digitalization In The Classroom"}
                           Description={"Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed hic libero."}
                           DateMonth={3}
                           DateDay={25}
                        />
                        <NewsEntryPreview
                           URL="/news"
                           Image={ImgNews2}
                           Category={"Business"}
                           Title={"How To Implement Chat GPT In Your Projects"}
                           Description={"Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed hic libero."}
                           DateMonth={3}
                           DateDay={17}
                        />

                        <NewsEntryPreview
                           URL="/news"
                           Image={ImgNews3}
                           Category={"Business"}
                           Title={"The Guide To Support Modern CSS Design"}
                           Description={"Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed hic libero."}
                           DateMonth={3}
                           DateDay={13}
                        />

                     </div>
                  </div>
                  {/*  */}

                  {/* Slide 3 */}
                  <div className="carousel-item">
                     <div className="content-box">

                        <NewsEntryPreview
                           URL="/news"
                           Image={ImgNews1}
                           Category={"Business"}
                           Title={"How To Use Digitalization In The Classroom"}
                           Description={"Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed hic libero."}
                           DateMonth={3}
                           DateDay={25}
                        />
                        <NewsEntryPreview
                           URL="/news"
                           Image={ImgNews2}
                           Category={"Business"}
                           Title={"How To Implement Chat GPT In Your Projects"}
                           Description={"Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed hic libero."}
                           DateMonth={3}
                           DateDay={17}
                        />

                        <NewsEntryPreview
                           URL="/news"
                           Image={ImgNews3}
                           Category={"Business"}
                           Title={"The Guide To Support Modern CSS Design"}
                           Description={"Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed hic libero."}
                           DateMonth={3}
                           DateDay={13}
                        />

                     </div>
                  </div>
                  {/*  */}

                  {/* Slide 4 */}
                  <div className="carousel-item">
                     <div className="content-box">

                        <NewsEntryPreview
                           URL="/news"
                           Image={ImgNews1}
                           Category={"Business"}
                           Title={"How To Use Digitalization In The Classroom"}
                           Description={"Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed hic libero."}
                           DateMonth={3}
                           DateDay={25}
                        />
                        <NewsEntryPreview
                           URL="/news"
                           Image={ImgNews2}
                           Category={"Business"}
                           Title={"How To Implement Chat GPT In Your Projects"}
                           Description={"Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed hic libero."}
                           DateMonth={3}
                           DateDay={17}
                        />

                        <NewsEntryPreview
                           URL="/news"
                           Image={ImgNews3}
                           Category={"Business"}
                           Title={"The Guide To Support Modern CSS Design"}
                           Description={"Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed hic libero."}
                           DateMonth={3}
                           DateDay={13}
                        />

                     </div>
                  </div>
                  {/*  */}

                  {/* Slide 5 */}
                  <div className="carousel-item">
                     <div className="content-box">

                        <NewsEntryPreview
                           URL="/news"
                           Image={ImgNews1}
                           Category={"Business"}
                           Title={"How To Use Easter Eggs In The Classroom"}
                           Description={"Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed hic libero."}
                           DateMonth={3}
                           DateDay={25}
                        />
                        <NewsEntryPreview
                           URL="/news"
                           Image={ImgNews2}
                           Category={"Business"}
                           Title={"How To Implement Chat GPT In Your Projects"}
                           Description={"Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed hic libero."}
                           DateMonth={3}
                           DateDay={17}
                        />

                        <NewsEntryPreview
                           URL="/news"
                           Image={ImgNews3}
                           Category={"Business"}
                           Title={"The Guide To Support Modern CSS Design"}
                           Description={"Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Architecto sed hic libero."}
                           DateMonth={3}
                           DateDay={13}
                        />

                     </div>
                  </div>
                  {/*  */}

               </div>
            </div>

         </div>
      </section>
   )
}

export default NewsSection