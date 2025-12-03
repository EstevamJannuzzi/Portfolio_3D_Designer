import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// Páginas
import Home from '../Pages/home.jsx'
import Portfolio from '../Pages/portfolio.jsx'
import Video from '../Pages/video.jsx'
import Curriculo from '../Pages/curriculo.jsx'
import Contatos from '../Pages/contatos.jsx'
import Imagens from '../Pages/imagens.jsx'
import WebSites from '../Pages/websites.jsx'
import Canais from '../Pages/canais.jsx'
import Programacao from '../Pages/programacao.jsx'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Portfólio */}
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Subpáginas */}
        <Route path="/estevamjannuzzi.github.io/video" element={<Video />} />
        <Route path="/estevamjannuzzi.github.io/imagens" element={<Imagens />} />
        <Route path="/estevamjannuzzi.github.io/websites" element={<WebSites />} />
        <Route path="/estevamjannuzzi.github.io/canais" element={<Canais />} />
        <Route path="/estevamjannuzzi.github.io/programacao" element={<Programacao />} />
        {/* Outras */}
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
