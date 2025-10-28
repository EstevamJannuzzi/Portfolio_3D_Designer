import React from 'react'
import Menu from './Menu.jsx'
import Footer from './Footer.jsx'

const DefaultScreen = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black transition-colors">
      <Menu />
      <main className="flex-grow pt-[72px]">
        <div className="container mx-auto pt-14 sm:pt-20 lg:pt-28 xl:pt-32 flex items-center justify-center h-full">
          <div className="text-center text-gray-900 dark:text-white">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default DefaultScreen
