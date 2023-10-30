import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'

import './styleShared.scss'

import Footer from '@components/footer/footer.jsx'
import Home from '@views/Home'
import Contact from '@views/Contact'
import Error404 from './views/Error404'

function routing() {
   let element = useRoutes([
      {
         path: "/",
         element: <Home />
      },
      {
         path: "/contact",
         element: <Contact />
      }]
   )

   return element
}

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               {/* Front page synonyms */}
               {['/', '/home', '/index'].map((pathName, index) => {
                  return (<Route element={<Home />} path={pathName} key={index} />)
               })}
               <Route path="/contact" element={<Contact />} />
               <Route path="*" element={<Error404 />} />
            </Routes>
         </BrowserRouter>

         <Footer />
      </>
   )
}

export default App
