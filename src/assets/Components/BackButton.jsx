import React from 'react'
import { GoSignIn } from "react-icons/go"
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const BackButton = ({ to = -1, text }) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <button
      onClick={() => navigate(to)}
      className="
        flex items-center gap-2
        text-orange dark:text-green
        hover:text-green dark:hover:text-orange
        cursor-pointer transition-colors duration-200
      "
    >
      {/* Ícone de voltar */}
      <GoSignIn className="text-[40px]" />

      {/* Texto com tradução */}
      <span className="text-lg font-medium">
        {text || t("buttons.back")}
      </span>
    </button>
  )
}

export default BackButton
