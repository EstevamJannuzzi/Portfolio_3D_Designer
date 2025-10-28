import React from 'react'
import { BrowserRouter as Router, Routes as ReactRoutes, Route } from 'react-router-dom'
import Home from '../Pages/home.jsx'

const Routes = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
      </ReactRoutes>
    </Router>
  )
}

export default Routes
