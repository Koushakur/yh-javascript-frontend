import React, { useEffect, useState } from 'react'

import NewsletterSignup from '@components/NewsletterSignup'
import NewsEntryPreview from '../components/News/NewsEntryPreview'


const News = () => {
   const [articles, setArticles] = useState([])

   useEffect(() => { fetchArticles() }, [])

   useEffect(() => {
      // console.log(articles)

   }, [articles])

   async function fetchArticles() {
      const fetchData = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
      setArticles(await fetchData.json())
      // setArticles([{ id: '98267e89-b18a-4356-b95a-d2c4b0ddc224', imageUrl: 'https://win23assignimg.blob.core.windows.net/images/the-climate-reality-project-Hb6uWq0i4MI-unsplash-min.jpg', title: 'Säkerhetsrisker med molntjänster  blekinge', content: 'Molntjänster har revolutionerat sättet företag han…n med det kommer också nya säkerhetsutmaningar...', author: 'Per Johansson', published: '2023-10-16T00:00:00', category: 'Business' }])
   }

   return (
      <>

         <section className="sub-header">
            <h1>News & Articles</h1>
         </section>
         <section className='news'>
            <div className='container'>
               <h2>Our News & Articles</h2>
               <div className='content-box'>
                  {articles.map((article) => {
                     const tDate = new Date(article.published)
                     return <NewsEntryPreview
                        key={article.id}
                        Image={article.imageUrl}
                        Title={article.title}
                        Description={article.content}
                        Category={article.category}
                        DateDay={tDate.getDate()}
                        DateMonth={tDate.getMonth() + 1}
                     />
                  })}
               </div>
            </div>
         </section>
         <NewsletterSignup />
      </>
   )
}

export default News