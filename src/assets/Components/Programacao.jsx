import React from 'react'
import Title from './Title.jsx'
import Image from './Image.jsx'
import Button from './Button.jsx'
import { useTranslation } from 'react-i18next'
import programacaos from '../Data/programacaos.js'

const Programacao = () => {
  const { t } = useTranslation()

  const handleButtonClick = (link, isDownload) => {
    if (isDownload) {
      const a = document.createElement('a')
      a.href = link
      // Extrai o nome do arquivo da URL
      const fileName = link.split('/').pop()
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    } else {
      window.open(link, '_blank', 'noopener noreferrer')
    }
  }

  return (
    <>
      <div
        id="programming"
        className="flex flex-col items-center justify-center gap-2 text-center"
      >
        <Title
          text={t("programming.title")}
          size="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px] mt-24 sm:mt-20 lg:mt-40 xl:mt-40"
        />
      </div>

      <div className="relative flex justify-center items-center mt-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {programacaos.map((programacao) => (
            <div
              key={programacao.id}
              className="flex flex-col justify-center items-center"
            >
              <Image
                src={programacao.src}
                alt={programacao.alt}
                width="w-[160px] sm:w-[140px] lg:w-[180px] xl:w-[200px]"
                margin="mb-4"
              />

              <Button
                text={t(programacao.textKey)}
                onClick={() => handleButtonClick(programacao.link, true)}
                download={true}
                width="w-[160px] sm:w-[140px] lg:w-[170px] xl:w-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Programacao
