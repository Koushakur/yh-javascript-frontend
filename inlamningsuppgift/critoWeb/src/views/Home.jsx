import React from 'react'

import NewsletterSignup from '@components/NewsletterSignup'
import Showcase from '@components/Showcase'
import Partners from '@components/Partners'
import Features from '@components/Features/Features'
import About from '@components/About'
import Services from '@components/Services/Services'
import WhyUs from '@components/WhyUs/WhyUs'
import Studies from '@components/Studies/Studies'
import OurTeam from '@components/OurTeam/OurTeam'
import Testimonials from '@components/Testimonials/Testimonials'
import NewsSection from '@components/News/NewsSection'

const home = () => {
   return (
      <>
         <Showcase />
         <Partners />
         <Features />
         <About />
         <Services />
         <WhyUs />
         <Studies />
         <OurTeam />
         <Testimonials />
         <NewsSection />
         <NewsletterSignup />
      </>
   )
}

export default home