import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'
import DefaultLayout from './layouts/DefaultLayout'
import PostDetails from './pages/PostDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:id' element={<PostDetails />} />
          </Route>
          <Route path='*' element={<div>Pagina non trovata</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
