import React from 'react'
import Menu from './Menu.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'

const DefaultScreen = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[url(/bgLight.webp)] bg-center bg-cover dark:bg-[url(/bgDark.webp)] dark:bg-center dark:bg-cover transition-colors">
      <Menu />

      <main className="flex-grow pt-[72px] mb-30 sm:mb-24 lg:mb-24 xl:mb-20">
        <div className="container mx-auto pt-8 sm:pt-10 xl:pt-16">
          {children}
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default DefaultScreen
