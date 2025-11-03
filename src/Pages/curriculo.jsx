import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import Frog from '../assets/images/Frog.webp'
import User from '../assets/images/User.webp'
import BoxtextResume from '../assets/Components/BoxtextResume.jsx'
import { useTranslation } from 'react-i18next'

const Curriculo = () => {
  const { t } = useTranslation()

  return (
    <DefaultScreen className='z-30'>
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <Title
          text={t("resume.title")}
          size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
        />
        <img
          src={Frog}
          alt="Frog"
          className="flex justify-center items-center w-[260px] sm:w-[500px] lg:w-[600px] xl:w-[900px] mt-6 mb-6"
        />
        <img
          src={User}
          alt="Estevam Jannuzzi"
          className="rounded-full w-40 h-40 sm:w-60 sm:h-60 lg:w-70 lg:h-70 xl:w-90 xl:h-90 mb-8 outline-4 outline-offset-8 outline-solid outline-orange dark:outline-green"
        />
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
          description={
            <>
              <p>{t("resume.participation1")}</p>
            </>
          }
        />
      </div>
    </DefaultScreen>
  )
}

export default Curriculo
