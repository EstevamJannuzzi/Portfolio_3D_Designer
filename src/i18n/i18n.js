import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en/translation.json'
import es from './locales/es/translation.json'
import pt from './locales/pt/translation.json'

// Carrega o idioma salvo ou usa pt como padrão
const savedLang = localStorage.getItem("language") || "pt"

i18n
  .use(initReactI18next)
  .init({
    resources: { 
      en: { translation: en }, 
      es: { translation: es }, 
      pt: { translation: pt } 
    },
    lng: savedLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  })

// Sempre que o idioma mudar, salva no localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem("language", lng)
})

export default i18n
