import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import PostsPage from './pages/PostsPage'
import DefaultLayout from './layouts/DefaultLayout'
import PostCard from './pages/PostCard'
import { ListProvider } from './context/PostsListContext'

function App() {

  return (
    <>
      <ListProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/posts' element={<PostsPage />} />
              <Route path='/posts/:id' element={<PostCard />} />
            </Route>
            <Route path='*' element={<div>Pagina non trovata</div>} />
          </Routes>
        </BrowserRouter>
      </ListProvider>
    </>
  )
}

export default App
