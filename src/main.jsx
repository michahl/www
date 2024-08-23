import React from 'react'
import ReactDOM from 'react-dom/client'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import BlogList from './blog/BlogList.jsx'
import Blog from './blog/Blog.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/blog' element={<BlogList />}/>
        <Route path='/blog/:url' element={<Blog />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
