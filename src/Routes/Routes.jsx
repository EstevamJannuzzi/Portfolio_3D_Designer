import React from 'react'
import { BrowserRouter as Router, Routes as ReactRoutes, Route } from 'react-router-dom'
import Home from '../Pages/home.jsx'
import Portfolio from '../Pages/portfolio.jsx'
import Video from '../Pages/video.jsx'
import Curriculo from '../Pages/curriculo.jsx'
import Contatos from '../Pages/contatos.jsx'
import Imagens from '../Pages/imagens.jsx'
import WebSites from '../Pages/websites.jsx'
import Canais from '../Pages/canais.jsx'

const Routes = () => {
  return (
    <Router>
        <ReactRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/video" element={<Video />} />
          <Route path="/imagens" element={<Imagens />} />
          <Route path="/websites" element={<WebSites />} />
          <Route path="/canais" element={<Canais />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/contatos" element={<Contatos />} />
        </ReactRoutes>
    </Router>
  )
}

export default Routes
