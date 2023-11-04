import React from 'react'

import '../styleContact.scss'

import ContactInfo from '@components/ContactInfo'
import ContactForm from '@components/ContactForm'
import Subheader from '@components/Subheader'

import ImgMap from '@images/CritoMap.png'

const contact = () => {
   return (
      <>
         <Subheader Title="Let's Connect" />

         <ContactInfo />
         <ContactForm />

         <section className="gmp-map">
            <img src={ImgMap} alt="Map showing where Crito headquarters are" />
         </section>
      </>
   )
}

export default contact