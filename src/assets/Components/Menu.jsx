import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Image from "./Image";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

// Caminho base GitHub Pages
const base = "/Portfolio_3D_Designer";

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
    { name: t("menu.home"), to: "/" },
    { name: t("menu.videos"), to: "/videos" },
    { name: t("menu.imagens"), to: "/imagens" },
    { name: t("menu.websites"), to: "/websites" },
    { name: t("menu.canais"), to: "/canais" },
    { name: t("menu.programacao"), to: "/programacao" },
    { name: t("menu.curriculo"), to: "/curriculo" },
    { name: t("menu.contatos"), to: "/contatos" },
  ];

  const flags = [
    { code: "pt", country: "BR" },
    { code: "en", country: "US" },
    { code: "es", country: "ES" },
  ];

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
    <header className="w-full flex items-center justify-between bg-primary sm:h-[60px] lg:h-[90px] gap-4 py-3 px-6 fixed top-0 left-0 z-50 shadow-sm">

      {/* LOGO */}
      <div className="flex items-center gap-x-4 xl:gap-x-6 ml-0 sm:ml-90 lg:ml-6 xl:ml-0">
        <Link to="/" className="transition-transform hover:scale-110 cursor-pointer">
          <Image
            src={`${base}/logo3D.webp`}
            alt="Logo"
            width="w-[44px] sm:w-[60px] lg:w-[90px] xl:w-[90px]"
          />
        </Link>
      </div>

      {/* MENU DESKTOP */}
      <div className="hidden xl:flex items-center space-x-6 relative">
        <nav className="flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center font-medium transition-all duration-300 ease-in-out cursor-pointer ${location.pathname === link.to
                ? "text-purple text-[18px] scale-110"
                : "text-white text-[14px] hover:text-purple hover:-translate-y-1 hover:scale-110"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 relative">
          
          {/* LANG BUTTON */}
          <div className="relative">
            <button
              onClick={toggleLangMenu}
              className="text-white hover:text-purple transition-transform duration-200 hover:scale-110 cursor-pointer"
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
                  className="absolute right-0 mt-2 bg-gray-900 rounded-xl shadow-lg border border-gray-700 py-2 px-3"
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
      <div className="xl:hidden flex items-center gap-4">
        
        {/* LANG MOBILE */}
        <div className="relative">
          <button
            onClick={toggleLangMenu}
            className="text-white hover:text-purple transition-transform duration-200 hover:scale-110 cursor-pointer"
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
                className="absolute right-0 mt-2 bg-gray-900 rounded-xl shadow-lg border border-gray-700 py-2 px-3"
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

        {/* TOGGLE MENU */}
        <button
          onClick={toggleMenu}
          className="text-white hover:text-purple transition-transform duration-200 hover:scale-110 cursor-pointer"
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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 xl:hidden"
              onClick={toggleMenu}
            />

            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute top-full left-0 w-full bg-gray-800/90 backdrop-blur-md border-t border-gray-700 xl:hidden shadow-lg"
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
                      className={`block text-lg font-medium text-center py-1 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center ${location.pathname === link.to
                        ? "text-purple text-[16px] scale-110"
                        : "text-white hover:text-purple hover:-translate-y-1 hover:scale-110 text-[14px]"
                        }`}
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
