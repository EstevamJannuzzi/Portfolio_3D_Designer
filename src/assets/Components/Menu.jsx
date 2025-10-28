import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Banners from "../images/Banners.png";
import Logo from "../images/Logo3D.png";
import DarkMode from "./darkmode";

export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { name: "Home", to: "/" },
    { name: "Portfólio", to: "/portfolio" },
    { name: "Currículo", to: "/curriculo" },
    { name: "Contatos", to: "/contatos" },
  ];

  return (
    <header className="w-full flex items-center justify-between bg-white/20 dark:bg-primary/20 backdrop-blur-md gap-4 py-3 px-6 fixed top-0 left-0 z-50 shadow-sm">
      {/* LOGOS */}
      <div className="flex items-center gap-x-4">
        <img
          src={Logo}
          alt="Logo"
          className="w-[60px] sm:w-[86px] lg:w-[100px] xl:w-[120px]"
        />
        <img
          src={Banners}
          alt="Banners"
          className="w-[120px] sm:w-[180px] lg:w-[280px] xl:w-[380px]"
        />
      </div>

      {/* MENU DESKTOP */}
      <div className="hidden lg:flex items-center space-x-8">
        <nav className="flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-orange font-medium hover:text-green-500 transition-colors"
            >
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
          className="text-orange hover:text-green-500 focus:outline-none transition-colors"
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
                    className="w-full"
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="block text-orange text-lg font-medium hover:text-green-500 transition-colors text-center py-4"
                    >
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
