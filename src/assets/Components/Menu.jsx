import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../images/Logo3D.webp";
import DarkMode from "./darkmode";
import { IoHomeOutline, IoDocumentAttachOutline } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { PiBriefcaseLight } from "react-icons/pi";

export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const location = useLocation();

  const links = [
    { name: "Home", to: "/" },
    { name: "Portfólio", to: "/portfolio" },
    { name: "Currículo", to: "/curriculo" },
    { name: "Contatos", to: "/contatos" },
  ];

  return (
    <header className="w-full flex items-center justify-between bg-dark-gray/75 dark:bg-primary/20 backdrop-blur-md gap-4 py-3 px-6 fixed top-0 left-0 z-50 shadow-sm">
      {/* LOGOS */}
      <div className="flex items-center gap-x-4 xl:gap-x-6 ml-0 sm:ml-90 lg:ml-6 xl:ml-0">
        <img
          src={Logo}
          alt="Logo"
          className="w-[60px] sm:w-[86px] lg:w-[100px] xl:w-[120px]"
        />
      </div>

      {/* MENU DESKTOP */}
      <div className="hidden lg:flex items-center space-x-8">
        <nav className="flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`flex items-center text-orange dark:text-green font-medium hover:text-green dark:hover:text-orange transition-colors ${location.pathname === link.to ? 'text-green dark:text-orange text-[24px] dark:!text-orange !text-green' : 'text-[20px]'}`}
              style={{ minHeight: '32px', display: 'flex', alignItems: 'center' }}
            >
              {link.name === 'Home' && <IoHomeOutline className="mr-2" size={22} />}
              {link.name === 'Portfólio' && <PiBriefcaseLight className="mr-2" size={22} />}
              {link.name === 'Currículo' && <IoDocumentAttachOutline className="mr-2" size={22} />}
              {link.name === 'Contatos' && <LuContact className="mr-2" size={22} />}
              {link.name}
            </Link>
          ))}
        </nav>
        <DarkMode />
      </div>

      {/* BOTÃO HAMBÚRGUER E DARKMODE (MOBILE E TABLET) */}
      <div className="lg:hidden flex items-center gap-4">
        <DarkMode />
        <button
          onClick={toggleMenu}
          className="text-orange dark:text-green hover:text-green dark:hover:text-orange focus:outline-none transition-colors cursor-pointer"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* MENU MOBILE E TABLET COM ANIMAÇÃO */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 lg:hidden"
              onClick={toggleMenu}
            />
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              onClick={e => e.stopPropagation()}
              className="absolute top-full left-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 lg:hidden shadow-lg"
            >
              <ul className="flex flex-col items-center py-4">
                {links.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="w-full flex items-center justify-center"
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className={`block text-orange dark:text-green text-lg font-medium hover:text-green dark:hover:text-orange transition-colors text-center py-4 ${location.pathname === link.to ? 'text-green dark:text-orange text-[24px] dark:!text-orange !text-green' : 'text-[20px]'}`}
                      style={{ minHeight: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      {link.name === 'Home' && <IoHomeOutline className="mr-2" size={22} />}
                      {link.name === 'Portfólio' && <PiBriefcaseLight className="mr-2" size={22} />}
                      {link.name === 'Currículo' && <IoDocumentAttachOutline className="mr-2" size={22} />}
                      {link.name === 'Contatos' && <LuContact className="mr-2" size={22} />}
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
