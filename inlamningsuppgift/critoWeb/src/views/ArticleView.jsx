import React, { useEffect, useState } from 'react'

import Subheader from '@components/Subheader'
import NewsSection from '@components/News/NewsSection'
import QuoteEyecatch from '@components/QuoteEyecatch'

const ArticleView = () => {
   const [article, setArticle] = useState({})

   useEffect(() => {
      fetchArticle()
   }, [])

   async function fetchArticle() {
      const tURL = new URL(window.location.toLocaleString()).searchParams;
      let tArticle
      try {
         tArticle = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${tURL.get('id')}`)
      } catch (error) {
         alert(error)
      }

      switch (tArticle.status) {
         case 200:
            setArticle(await tArticle.json())
            break;

         default:
            alert(`Failed to fetch article, status code ${tArticle.status}`)
            break;
      }
   }

   function returnDateString() {
      const tDate = new Date(article.published)

      return tDate.toLocaleString('default', { month: 'short', day: 'numeric', year: 'numeric' });
   }

   return (
      <>
         <Subheader Title="News & Articles" />
         <section className='article'>
            <div className='container'>
               {/*  */}
               <div className='article-header'>
                  <h4>{article.title}</h4>
                  <div className='article-info'>
                     <p>{returnDateString()}</p>
                     <span className='fa-solid fa-circle'></span>
                     <p>{article.category}</p>
                     <span className='fa-solid fa-circle'></span>
                     <p>{article.author}</p>
                  </div>
               </div>

               {/*  */}
               <div className='content-box'>
                  <div className='article-content'>
                     <img src={`${article.imageUrl}`} />

                     <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                     <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                     <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.</p>
                     <p>Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                     <QuoteEyecatch Quote="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna" />
                     <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                  </div>

                  <div className='article-navigation'>
                     <input placeholder='Type to search..' />
                     <div className='recent-posts box'>
                        <div>asd</div>
                     </div>
                     <div className='categories box'>By category</div>
                  </div>
               </div>
            </div>
         </section>
         <NewsSection />
      </>
   )
}

export default ArticleView