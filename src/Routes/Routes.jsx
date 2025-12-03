import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// Páginas
import Home from '../Pages/home.jsx'
import Portfolio from '../Pages/portfolio.jsx'
import Curriculo from '../Pages/curriculo.jsx'
import Contatos from '../Pages/contatos.jsx'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
