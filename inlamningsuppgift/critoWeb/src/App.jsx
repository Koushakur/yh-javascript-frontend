import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'

import './styleShared.scss'

// Views
import Home from '@views/Home'
import News from '@views/News'
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
                  {['/news', '/updates'].map((pathName, index) => {
                     return (<Route element={<News />} path={pathName} key={index} />)
                  })}

                  <Route path="*" element={<Error404 />} />
               </Routes>
            </main>
         </BrowserRouter>

         <Footer />
         <ToTopButton />
      </>
   )
}

export default App