import React from 'react'

import ImgPaperz from "@images/logos/LogoPaperz.svg"
import ImgDorfus from "@images/logos/LogoDorfus.svg"
import ImgMartino from "@images/logos/LogoMartino.svg"
import ImgSquare from "@images/logos/LogoSquare.svg"
import ImgGobona from "@images/logos/LogoGobona.svg"

const Partners = () => {
   return (
      <section className="partners">
         <div className="container">
            <img src={ImgPaperz} alt="Paperz company logo" />
            <img src={ImgDorfus} alt="Dorfus company logo" />
            <img src={ImgMartino} alt="Martino company logo" />
            <img src={ImgSquare} alt="Square company logo" />
            <img src={ImgGobona} alt="Gobona company logo" />
         </div>
      </section>
   )
}

export default Partners