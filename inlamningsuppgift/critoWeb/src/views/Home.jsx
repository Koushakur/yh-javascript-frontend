import React from 'react'
import Header from '@components/header/Header'

import NewsletterSignup from '@components/shared/NewsletterSignup/NewsletterSignup'

const home = () => {
   return (
      <>
         <Header currNavID="home" />
         <p>THIS IS LE OHOME PAGE</p>
         <NewsletterSignup />
      </>
   )
}

export default home