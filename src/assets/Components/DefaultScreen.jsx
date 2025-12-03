import React from 'react'
import Menu from './Menu.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'

const DefaultScreen = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-light-gray dark:bg-black transition-colors">
      <Menu />
      <main className="flex-grow pt-[72px] mb-30 sm:mb-24 lg:mb-24 xl:mb-20">
        <div className="container mx-auto pt-8 sm:pt-10 lg:pt-28 xl:pt-32 flex items-center justify-center h-full">
          <div className="text-center">{children}</div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default DefaultScreen
