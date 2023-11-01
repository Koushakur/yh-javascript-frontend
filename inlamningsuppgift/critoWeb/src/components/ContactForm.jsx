import React from 'react'

const ContactForm = () => {
   return (
      <section className="message">
         <div className="container">
            <h2>Leave us a message for any information.</h2>

            <form method="post" id="sendMessage">
               <input required name="name" placeholder="Name*" autoComplete="name" title="Name" maxLength="70" />
               <input required name="email" placeholder="Email*" autoComplete="email" title="E-Mail" maxLength="70" type="email" />
               <textarea required name="message" placeholder="Your Message*" title="Your message"></textarea>
               <button title="Send message" className="btn-orange">
                  Send Message<span className="fa-solid fa-arrow-up-right ms-2"></span>
               </button>
            </form>
         </div>
      </section>
   )
}

export default ContactForm