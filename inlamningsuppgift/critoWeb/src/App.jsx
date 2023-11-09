import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'

import './styleShared.scss'

import { ArticleProvider } from '@contexts/ArticleContext'

// Views
import Home from '@views/Home'
import News from '@views/News'
import ArticleView from '@views/ArticleView'
import Contact from '@views/Contact'
import Error404 from '@views/Error404'

// Components
import Footer from '@components/footer/footer.jsx'
import ToTopButton from '@components/ToTopButton'
import Header from '@components/Header/Header'

function App() {
   return (
      <>
         <BrowserRouter>
            <ArticleProvider>
               <Header />
               <main>
                  <Routes>
                     {/* Front page synonyms */}
                     {['/', '/home', '/index'].map((pathName, index) => {
                        return (<Route element={<Home />} path={pathName} key={index} />)
                     })}

                     <Route path="/contact" element={<Contact />} />

                     {/* Service synonyms */}
                     {['/service', '/services'].map((pathName, index) => {
                        return (<Route element={<Error404 />} path={pathName} key={index} />)
                     })}

                     {/* News synonyms */}
                     {['/news', '/news/:category', '/updates'].map((pathName, index) => {
                        return (<Route element={<News />} path={pathName} key={index} />)
                     })}

                     <Route path="/article/:id" element={<ArticleView />} />

                     <Route path="*" element={<Error404 />} />
                  </Routes>
               </main>
               <Footer />
            </ArticleProvider>
         </BrowserRouter>

         <ToTopButton />
      </>
   )
}

export default App