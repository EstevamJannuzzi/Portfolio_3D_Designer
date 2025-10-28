import React from 'react'
import { BrowserRouter as Router, Routes as ReactRoutes, Route } from 'react-router-dom'
import Home from '../Pages/home.jsx'
import Portfolio from '../Pages/portfolio.jsx'
import Curriculo from '../Pages/curriculo.jsx'
import Contatos from '../Pages/contatos.jsx'

const Routes = () => {
  return (
    <Router>
        <ReactRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/contatos" element={<Contatos />} />
        </ReactRoutes>
    </Router>
  )
}

export default Routes
