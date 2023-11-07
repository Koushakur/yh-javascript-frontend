import React, { useEffect, useState } from 'react'

import NewsEntryPreview from './NewsEntryPreview'

import { Link } from 'react-router-dom'

const NewsSection = () => {
   const [articles, setArticles] = useState([])

   useEffect(() => {
      fetchArticles(15)
   }, [])

   async function fetchArticles(numArticles) {
      const fetchData = await fetch(`https://win23-assignment.azurewebsites.net/api/articles?take=${numArticles}`)

      if (fetchData.status === 200) { setArticles(await fetchData.json()) }
      else { alert(`Failed to fetch articles, status code ${fetchData.status}`) }
   }

   function createSlides() {
      let slides = [];

      for (let i = 0; i < Math.ceil(articles.length / 3); i++) {
         slides.push(
            <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
               <div className="content-box">
                  {articles.slice(3 * i, 3 * (i + 1)).map((article) => {
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
            </div>
         )
      }

      return slides
   }

   return (
      <section className="news">
         <div className="container">

            {/* Title and button */}
            <div className="title-box">
               <div>
                  <h3>Articles & News</h3>
                  <h2>Get Every Single Article & News</h2>
               </div>
               <Link to="/news">
                  <button className="btn-transparent">Browse Articles <span
                     className="fa-solid fa-arrow-up-right ms-2"></span></button>
               </Link>
            </div>

            {/* Carousel structure start */}
            <div id="carouselNews" className="carousel slide" data-bs-ride="carousel" data-ride="carousel">

               {/* Indicators */}
               <div className="carousel-indicators">
                  {Array.from({ length: Math.ceil(articles.length / 3) }).map((_, i) => {
                     return <button type="button" data-bs-target="#carouselNews" data-bs-slide-to={i} className={i === 0 ? 'active' : ''} aria-label={'Slide ' + (i + 1)} key={i} />
                  })}
               </div>

               {/* Carousel items */}
               <div className="carousel-inner">

                  {createSlides()}

               </div>
            </div>

         </div>
      </section >
   )
}

export default NewsSection