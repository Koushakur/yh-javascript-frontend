import React, { useEffect, useState } from 'react'

import Subheader from '@components/Subheader'
import NewsSection from '@components/News/NewsSection'
import QuoteEyecatch from '@components/QuoteEyecatch'
import { Link, useParams } from 'react-router-dom'

import { useArticles } from '@contexts/ArticleContext'

const ArticleView = () => {
   const { id } = useParams()

   const { article, fetchArticle } = useArticles()

   useEffect(() => {
      fetchArticle(id)
   }, [id])

   function dateString() {
      return new Date(article.published).toLocaleString('default', { month: 'short', day: 'numeric', year: 'numeric' });
   }

   return (
      <>
         <Subheader Title="News & Articles" />
         <section className='article'>
            <div className='container'>
               {/*  */}
               {article ?
                  <div className='article-header'>
                     <h4>{article.title}</h4>
                     <div className='article-info'>
                        <p>{dateString()}</p>
                        <span />
                        <p>{article.category}</p>
                        <span />
                        <p>{article.author}</p>
                     </div>
                  </div>
                  :
                  <div className='article-header'>
                     <h4>Loading article...</h4>
                     <div className='article-info' />
                  </div>
               }

               {/*  */}
               <div className='content-box'>
                  <div className='article-content'>
                     {article &&
                        <>
                           <img src={`${article.imageUrl}`} />
                           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                           <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.</p>
                           <p>Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                           <QuoteEyecatch Text={article.content} />
                           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                           <div className='tags'>
                              {['Utbildning', 'IT', 'Företag', 'Digitalization', 'Design', 'Tech'].map((tag, i) => {
                                 return <Link to={`/news/${tag}`} key={i}><span className='tag' key={i}>{tag}</span></Link>
                              })}
                           </div>
                        </>
                     }
                  </div>

                  <div className='article-navigation'>

                     {/* Search */}
                     <div className='searchBox'>
                        <span className='fa-solid fa-magnifying-glass fa-flip-horizontal' />
                        <input placeholder='Type to search..' name='SearchBox' />
                     </div>

                     {/* Recent Posts */}
                     <div className='recent-posts border-box'>
                        <h5>Recent Posts</h5>
                        <div className='content'>
                           <h6>How To Blow Through Capital At An Incredible Rate</h6>
                           <p>Jan 14, 2020</p>
                        </div>
                        <span />
                        <div className='content'>
                           <h6>Design Studios That Everyone Should Know About?</h6>
                           <p>Jan 14, 2020</p>
                        </div>
                        <span />
                        <div className='content'>
                           <h6>How did we get 1M+ visitors in 30 days without anything!</h6>
                           <p>Jan 14, 2020</p>
                        </div>
                        <span />
                        <div className='content'>
                           <h6>Figma On Figma: How We Built Our Website Design System</h6>
                           <p>Jan 14, 2020</p>
                        </div>
                     </div>

                     {/* Categories */}
                     <div className='categories border-box'>
                        <h5>Categories</h5>
                        <div className='content'>
                           <h6>Technology -</h6>
                           <p>20 posts</p>
                        </div>
                        <div className='content'>
                           <h6>Freelancing -</h6>
                           <p>7 posts</p>
                        </div>
                        <div className='content'>
                           <h6>Writing -</h6>
                           <p>16 posts</p>
                        </div>
                        <div className='content'>
                           <h6>Marketing -</h6>
                           <p>11 posts</p>
                        </div>
                        <div className='content'>
                           <h6>Business -</h6>
                           <p>35 posts</p>
                        </div>
                        <div className='content'>
                           <h6>Education -</h6>
                           <p>14 posts</p>
                        </div>
                     </div>

                  </div>
               </div>

            </div>
         </section >
         <NewsSection />
      </>
   )
}

export default ArticleView