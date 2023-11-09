import { createContext, useContext, useState, useEffect } from "react";

const ArticleContext = createContext()

export const useArticles = () => useContext(ArticleContext)

export const ArticleProvider = ({ children }) => {
   const [allArticles, setAllArticles] = useState([])
   const [articles, setArticles] = useState([])
   const [article, setArticle] = useState(null)

   useEffect(() => {
      fetchArticles()
   }, [])

   // If argument is given try to fetch specified number of articles, otherwise fetch all articles
   async function fetchArticles(numArticles = null) {
      let fetchData
      if (numArticles == null) {
         fetchData = await fetch(`https://win23-assignment.azurewebsites.net/api/articles`)
         // setAllArticles(await fetchData.json())
         // console.log("API fetch, all");
      } else {
         // console.log(typeof (numArticles));
         fetchData = await fetch(`https://win23-assignment.azurewebsites.net/api/articles?take=${numArticles}`)
         // setArticles(await fetchData.json())
         // console.log("API fetch, numArticles");
      }

      if (fetchData.status === 200) {
         numArticles == null ?
            setAllArticles(await fetchData.json())
            : setArticles(await fetchData.json())

      } else {
         alert(`Failed to fetch articles, status code ${fetchData.status}`)
      }
   }

   // Fetch specific article by ID
   async function fetchArticle(ID) {
      const fetchData = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${ID}`)
      // console.log("API fetch, ID");

      if (fetchData.status === 200) {
         setArticle(await fetchData.json())

      } else {
         alert(`Failed to fetch article with ID ${ID}, status code ${fetchData.status}`)
      }
   }

   function setArticlesByCategory(category) {
      if (allArticles.length === 0)
         fetchArticles()

      let tArticleList = []

      allArticles.forEach(article => {
         // Case-insensitive category name comparison
         if (category.localeCompare(article.category, 'en', { sensitivity: 'base' }) === 0) {
            tArticleList.push(article)
         }
      })

      setArticles(tArticleList)
   }

   function setArticlesToAll() {
      // console.log("Set articles to all");
      setArticles(allArticles)
   }

   return (
      <ArticleContext.Provider value={{ articles, fetchArticles, article, fetchArticle, setArticlesByCategory, setArticlesToAll }}>
         {children}
      </ArticleContext.Provider>
   )
}