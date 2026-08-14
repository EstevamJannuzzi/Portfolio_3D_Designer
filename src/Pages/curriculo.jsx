import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import Image from '../assets/Components/Image.jsx'
import BoxtextResume from '../assets/Components/BoxtextResume.jsx'
import { useTranslation } from 'react-i18next'

const Curriculo = () => {
  const { t } = useTranslation()

  // Caminho base para GitHub Pages
  const base = "/Portfolio_3D_Designer"

  return (
    <DefaultScreen className='z-30'>
      <div className='flex flex-col items-center justify-center gap-2 text-center'>

        <Title
          text={t("resume.title")}
          size="text-[32px] sm:text-[34px] lg:text-[38px] xl:text-[60px]"
        />

        <div className='flex items-center justify-center gap-4 mt-4 mb-4'>

          {/* Foto do Usuário */}
          <Image
            src={`${base}/User.webp`}
            alt="Estevam Jannuzzi"
            width='w-20 sm:w-28 lg:w-26 xl:w-40'
            special='rounded-full outline-2 outline-offset-6 outline-solid outline-sky-blue dark:outline-blue-iris'
          />
        </div>

        <div className="fixed -rotate-40 top-24 sm:top-26 lg:top-38 xl:top-30 -right-6 sm:-right-8 lg:-right-14 xl:-right-18">
          <Image
            src={`${base}/frog_smart.webp`}
            alt="Frog Smart"
            width='w-[130px] sm:w-[160px] lg:w-[180px] xl:w-[340px]'
            margin='m-0'
            special='block fill-white drop-shadow-xl/50 dark:fill-white dark:drop-shadow-xl/50'
          />
        </div>

        <div className='flex flex-col items-center justify-center gap-y-4 z-20'>
          {/* Seções de conteúdo */}
          <BoxtextResume
            title={t("resume.professionalSummaryTitle")}
            description={t("resume.professionalSummary")}
          />

          <BoxtextResume
            title={t("resume.educationTitle")}
            description={
              <>
                <p>{t("resume.education1")}</p>
                <p>{t("resume.education2")}</p>
              </>
            }
          />

          <BoxtextResume
            title={t("resume.languagesTitle")}
            description={
              <>
                <p>{t("resume.language1")}</p>
                <p>{t("resume.language2")}</p>
              </>
            }
          />

          <BoxtextResume
            title={t("resume.experienceTitle")}
            description={
              <>
                <p><strong>{t("resume.exp1.company")}</strong></p>
                <p><strong>{t("resume.exp1.role")}</strong></p>
                <p className="pl-4">{t("resume.exp1.period")}</p>
                <p className="pl-4">{t("resume.exp1.details1")}</p>
                <p className="pl-4 mb-4">{t("resume.exp1.details2")}</p>

                <p><strong>{t("resume.exp2.company")}</strong></p>
                <p><strong>{t("resume.exp2.role")}</strong></p>
                <p className="pl-4">{t("resume.exp2.period")}</p>
                <p className="pl-4">{t("resume.exp2.details1")}</p>
                <p className="pl-4 mb-4">{t("resume.exp2.details2")}</p>

                <p><strong>{t("resume.exp3.company")}</strong></p>
                <p><strong>{t("resume.exp3.role")}</strong></p>
                <p className="pl-4">{t("resume.exp3.period")}</p>
                <p className="pl-4">{t("resume.exp3.details1")}</p>
                <p className="pl-4">{t("resume.exp3.details2")}</p>
                <p className="pl-4">{t("resume.exp3.details3")}</p>
                <p className="pl-4">{t("resume.exp3.details4")}</p>
                <p className="pl-4">{t("resume.exp3.details5")}</p>
                <p className="pl-4">{t("resume.exp3.details6")}</p>
              </>
            }
          />

          <BoxtextResume
            title={t("resume.coursesTitle")}
            description={
              <>
                <p>{t("resume.courses1")}</p>
                <p>{t("resume.courses2")}</p>
                <p>{t("resume.courses3")}</p>
              </>
            }
          />

          <BoxtextResume
            title={t("resume.participationTitle")}
            description={<p>{t("resume.participation1")}</p>}
          />
        </div>

      </div>
    </DefaultScreen>
  )
}

export default Curriculo
