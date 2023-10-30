import React from 'react'
import Header from '@components/header/Header'

import '../styleShared.scss'

import ImgUnderConstruction from '@images/icons/under-construction_geek_man_01.svg'

const Error404 = () => {
   return (
      <>
         <Header />

         <div className='error404'>
            <h1><span className="fa-solid fa-notdef"></span> Error 404 <span className="fa-solid fa-notdef"></span></h1>
            <img src={ImgUnderConstruction} alt="Humorous 'Under Construction' sign" width="300px" />
         </div>
      </>
   )
}

export default Error404