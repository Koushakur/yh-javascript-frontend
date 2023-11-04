import React from 'react'

const QuoteEyecatch = ({ Quote }) => {
   return (
      <div className='quote-eyecatch'>
         <span className='fa-solid fa-quote-right'></span>
         <div>{Quote}</div>
      </div>
   )
}

export default QuoteEyecatch