import React from 'react'

import ImgCassandra from '@images/photos/testimonial-cassandra.png'
import ImgAmanda from '@images/photos/testimonial-amanda.png'
import ImgJack from '@images/photos/testimonial-jack.png'
import Testimonial from './Testimonial'

const Testimonials = () => {
   return (
      <section className="testimonials">
         <div className="container">
            <div>
               <h3>Testimonials</h3>
               <h2>What Our Clients Says</h2>
            </div>

            <div className="content-box">

               {/* Cassandra */}
               <Testimonial
                  NumStars={5}
                  Image={ImgCassandra}
                  Name="Cassandra Warren"
                  Title="Business Manager, Dorfus"
                  Text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
               />

               {/* Amanda */}
               <Testimonial
                  NumStars={4}
                  Image={ImgAmanda}
                  Name="Amanda Tulling"
                  Title="Key Account Manager, Gobona"
                  Text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
               />

               {/* Jack */}
               <Testimonial
                  NumStars={7}
                  Image={ImgJack}
                  Name="Jack McDogglas"
                  Title="Senior Developer, Square"
                  Text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
               />
            </div>

            <button className="btn-black">All Reviews <span className="fa-solid fa-arrow-up-right"></span></button>
         </div>
      </section>
   )
}

export default Testimonials