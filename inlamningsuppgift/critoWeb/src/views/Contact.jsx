import React from 'react'

import '../styleContact.scss'

import ContactInfo from '@components/ContactInfo'
import ContactForm from '@components/ContactForm'

import ImgMap from '@images/CritoMap.png'

const contact = () => {
   return (
      <>

         <section className="sub-header">
            <h1>Let's Connect</h1>
         </section>

         <ContactInfo />
         <ContactForm />

         <section className="gmp-map">
            <img src={ImgMap} alt="Map showing where Crito headquarters are" />
         </section>
      </>
   )
}

export default contact