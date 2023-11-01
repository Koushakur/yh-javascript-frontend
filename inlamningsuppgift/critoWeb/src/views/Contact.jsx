import React from 'react'

import '../styleContact.scss'

import Header from '@components/header/Header'
import ContactInfo from '@components/ContactInfo'
import ContactForm from '@components/ContactForm'
import ToTopButton from '@components/ToTopButton'

import ImgMap from '@images/CritoMap.png'

const contact = () => {
   return (
      <>
         <Header currNavID="contact" />
         <main>
            <section className="sub-header">
               <h1>Let's Connect</h1>
            </section>

            <ContactInfo />
            <ContactForm />

            <section className="gmp-map">
               <img src={ImgMap} alt="Map showing where Crito headquarters are" />
            </section>
         </main>
         <ToTopButton />
      </>
   )
}

export default contact