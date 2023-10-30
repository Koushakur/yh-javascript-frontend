import React from 'react'
import './styleNewsletterSignup.scss'

const newsletterSignup = () => {
   return (
      <section className="newsletter">
         <div className="container">
            <h2>Get News & Updates By Signup</h2>
            <form method="post" id="newsletterRegistry">
               <input required name="email" type="email" title="E-Mail" autocomplete="email"
                  placeholder="username@domain.com" />
               <button title="Subscribe" className="btn-orange">
                  Subscribe <span className="fa-solid fa-arrow-up-right ms-2"></span>
               </button>
            </form>
         </div>
      </section>
   )
}

export default newsletterSignup