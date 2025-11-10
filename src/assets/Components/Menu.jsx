import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Image from "./Image";
import DarkMode from "./darkmode";
import { IoHomeOutline, IoDocumentAttachOutline } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { PiBriefcaseLight } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLangMenu = () => setLangOpen(!langOpen);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const links = [
    { name: t("menu.home"), to: "/", icon: <IoHomeOutline className="mr-2" size={22} /> },
    { name: t("menu.portfolio"), to: "/portfolio", icon: <PiBriefcaseLight className="mr-2" size={22} /> },
    { name: t("menu.curriculo"), to: "/curriculo", icon: <IoDocumentAttachOutline className="mr-2" size={22} /> },
    { name: t("menu.contatos"), to: "/contatos", icon: <LuContact className="mr-2" size={22} /> },
  ];

  // Mapeia idiomas -> bandeiras
  const flags = [
    { code: "pt", country: "BR" },
    { code: "en", country: "US" },
    { code: "es", country: "ES" },
  ];

  // Componente do botão de bandeira
  const FlagButton = ({ countryCode, onClick, title }) => (
    <button
      onClick={onClick}
      className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
      style={{ width: '2em', height: '2em' }}
      title={title}
    >
      <ReactCountryFlag
        countryCode={countryCode}
        svg
        style={{
          width: '100%',
          height: '100%',
          display: 'inline-block',
        }}
      />
    </button>
  );

  return (
    <header className="w-full flex items-center justify-between bg-dark-gray/75 dark:bg-primary/20 backdrop-blur-md gap-4 py-3 px-6 fixed top-0 left-0 z-50 shadow-sm">
      {/* LOGO */}
      <div className="flex items-center gap-x-4 xl:gap-x-6 ml-0 sm:ml-90 lg:ml-6 xl:ml-0">
        <Link to="/" className="transition-transform hover:scale-110 cursor-pointer">
          <Image
            src="/logo3D.webp"
            alt="Logo"
            width="w-[60px] sm:w-[86px] lg:w-[100px] xl:w-[120px]"
          />
        </Link>
      </div>


      {/* MENU DESKTOP */}
      <div className="hidden lg:flex items-center space-x-8 relative">
        <nav className="flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center font-medium transition-all duration-300 ease-in-out cursor-pointer ${location.pathname === link.to
                ? "text-green dark:text-orange text-[24px] scale-110"
                : "text-orange dark:text-green text-[20px] hover:text-green dark:hover:text-orange hover:-translate-y-1 hover:scale-110"
                }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 🌗 DarkMode + Idioma */}
        <div className="flex items-center gap-4 relative">
          <DarkMode />

          {/* 🌍 Botão de idioma */}
          <div className="relative">
            <button
              onClick={toggleLangMenu}
              className="text-orange dark:text-green hover:text-green dark:hover:text-orange transition-transform duration-200 hover:scale-110 cursor-pointer"
            >
              <Globe size={24} />
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 bg-white/95 dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 px-3"
                >
                  <div className="flex flex-col items-center gap-2">
                    {flags.map((f) => (
                      <FlagButton
                        key={f.code}
                        countryCode={f.country}
                        onClick={() => changeLanguage(f.code)}
                        title={f.code.toUpperCase()}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="lg:hidden flex items-center gap-4">
        <DarkMode />

        {/* 🌍 Botão idioma (mobile) */}
        <div className="relative">
          <button
            onClick={toggleLangMenu}
            className="text-orange dark:text-green hover:text-green dark:hover:text-orange transition-transform duration-200 hover:scale-110 cursor-pointer"
          >
            <Globe size={24} />
          </button>

          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 bg-white/95 dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 px-3"
              >
                <div className="flex flex-col items-center gap-2">
                  {flags.map((f) => (
                    <FlagButton
                      key={f.code}
                      countryCode={f.country}
                      onClick={() => changeLanguage(f.code)}
                      title={f.code.toUpperCase()}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Botão menu mobile */}
        <button
          onClick={toggleMenu}
          className="text-orange dark:text-green hover:text-green dark:hover:text-orange transition-transform duration-200 hover:scale-110 cursor-pointer"
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

      {/* MENU MOBILE */}
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
              className="absolute top-full left-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 lg:hidden shadow-lg"
            >
              <ul className="flex flex-col items-center py-4">
                {links.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="w-full flex items-center justify-center"
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className={`block text-lg font-medium text-center py-4 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center ${location.pathname === link.to
                        ? "text-green dark:text-orange text-[24px] scale-110"
                        : "text-orange dark:text-green hover:text-green dark:hover:text-orange hover:-translate-y-1 hover:scale-110 text-[20px]"
                        }`}
                    >
                      {link.icon}
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
