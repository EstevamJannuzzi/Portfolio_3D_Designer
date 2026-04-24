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
        text-sky-blue dark:text-blue-iris
        hover:text-primary dark:hover:text-sky-blue
        cursor-pointer transition-colors duration-200
      "
    >
      {/* Ícone de voltar */}
      <GoSignIn className="text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[26px]" />

      {/* Texto com tradução */}
      <span className="text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[18px]">
        {text || t("buttons.back")}
      </span>
    </button>
  )
}

export default BackButton
