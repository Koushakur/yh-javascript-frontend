import React from 'react'

const QuoteEyecatch = ({ Text }) => {
   return (
      <div className='quote-eyecatch'>
         <span className='fa-solid fa-quote-right'></span>
         <div>{Text}</div>
      </div>
   )
}

export default QuoteEyecatch