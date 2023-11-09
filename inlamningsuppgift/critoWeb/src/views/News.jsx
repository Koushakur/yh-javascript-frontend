import React, { useEffect, useState } from 'react'

import NewsletterSignup from '@components/NewsletterSignup'
import NewsEntryPreview from '@components/News/NewsEntryPreview'
import Subheader from '@components/Subheader'
import { Link, useParams } from 'react-router-dom'

import { useArticles } from '@contexts/ArticleContext'

const News = () => {
   const { category } = useParams()

   const { articles, setArticlesByCategory, setArticlesToAll } = useArticles()

   useEffect(() => {
      if (category != null)
         setArticlesByCategory(category)
      else
         setArticlesToAll()

   }, [category])

   return (
      <>
         <Subheader Title="News & Articles" />

         <section className='news'>
            <div className='container'>
               <h2>Our News & Articles</h2>
               {/* If category is in url, show which category and button to show all */}
               {category &&
                  <div className='newsCategory'>
                     <h4>Category: {category}</h4>
                     <Link to='/news'><button className='btn-orange'>View all news</button></Link>
                  </div>
               }
               <div className='content-box'>
                  {articles.map((article) => {
                     const tDate = new Date(article.published)
                     return <NewsEntryPreview
                        URL={`/article/${article.id}`}
                        key={article.id}
                        Image={article.imageUrl}
                        Title={article.title}
                        Description={article.content}
                        Category={article.category}
                        DateDay={tDate.getDate()}
                        DateMonth={tDate.toLocaleString('default', { month: 'short' })}
                     />
                  })}
               </div>

               <nav aria-label="Page navigation">
                  <ul className="pagination">
                     <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                           <span className="fa-solid fa-chevron-left" aria-hidden="true" />
                        </a>
                     </li>
                     <li className="page-item"><a className="page-link" href="#">1</a></li>
                     <li className="page-item"><a className="page-link" href="#">2</a></li>
                     <li className="page-item"><a className="page-link" href="#">3</a></li>
                     <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                           <span className="fa-solid fa-chevron-right" aria-hidden="true" />
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </section>

         <NewsletterSignup />
      </>
   )
}

export default News