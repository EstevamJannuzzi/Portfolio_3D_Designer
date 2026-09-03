import React, { useState } from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import Image from '../assets/Components/Image.jsx'
import Accordion from '../assets/Components/Accordion.jsx'

const Curriculo = () => {
  const [openAccordion, setOpenAccordion] = useState(null)

  // Caminho base para GitHub Pages
  const base = "/Portfolio_3D_Designer"

  return (
    <DefaultScreen className='z-30'>
      <div className='flex flex-col items-center justify-center gap-2 text-center'>

        <Title
          text="Currículo"
          size="text-[32px] sm:text-[34px] lg:text-[38px] xl:text-[44px]"
        />

        <div className='flex items-center justify-center gap-4 mt-4 mb-4'>

          {/* Foto do Usuário */}
          <Image
            src={`${base}/User.webp`}
            alt="Estevam Jannuzzi"
            width='w-20 sm:w-28 lg:w-26 xl:w-40'
            special='rounded-full outline-2 outline-offset-6 outline-solid outline-purple'
          />
        </div>

        <div className="fixed top-24 sm:top-26 lg:top-38 xl:top-30 -right-6 sm:-right-8 lg:-right-14 xl:-right-18">
          <Image
            src={`${base}/frog_smart.webp`}
            alt="Frog Smart"
            width='w-[130px] sm:w-[200px] lg:w-[240px] xl:w-[380px]'
            margin='m-0'
            special='block fill-white drop-shadow-xl/50'
          />
        </div>

        <div className='flex flex-col items-center justify-center gap-y-4 z-20'>

          <Accordion
            title="Resumo Profissional:"
            description="Sou designer gráfico formado pela Universidade Paulista (UNIP) em 2011, com sólida experiência em modelagem 3D, animação e design visual. Iniciei minha carreira na empresa de engenharia Lubrin, onde atuava na criação de projetos tridimensionais de motores, redutores e componentes técnicos. Além disso, desenvolvia materiais gráficos como flyers e folders, gerenciava o site institucional e realizava edição de vídeos e imagens. Após essa experiência, segui como freelancer no estúdio de desenvolvimento de games IzotonicStudios, contribuindo com modelagem 3D, texturização e animações 2D e 3D para personagens e cenários. Paralelamente, atuo como designer na empresa MentalPlus®, responsável pelo aplicativo homônimo voltado à área neuropsicológica. Lá, sou responsável pela modelagem e animação do mascote Dr. Brainy, além da manutenção do site da empresa. Sou apaixonado por tecnologia e inovação, sempre em busca de atualização constante em novas ferramentas e técnicas. Tenho perfil colaborativo, sou proativo nas decisões, objetivo, determinado e extremamente detalhista em meus processos criativos."
            isOpen={openAccordion === 0}
            onToggle={() =>
              setOpenAccordion(openAccordion === 0 ? null : 0)
            }
          />

          <Accordion
            title="Formação Acadêmica:"
            description={
              <>
                <p>Graduado em Design Gráfico - Faculdade UNIP – Concluído 12/2011</p>
                <p>Ensino Médio Técnico em Eletrônica – Colégio S.A.A. – Concluído 12/1997</p>
              </>
            }
            isOpen={openAccordion === 1}
            onToggle={() =>
              setOpenAccordion(openAccordion === 1 ? null : 1)
            }
          />

          <Accordion
            title="Idiomas:"
            description={
              <>
                <p>Inglês - Intermediário</p>
                <p>Espanhol - Básico</p>
              </>
            }
            isOpen={openAccordion === 2}
            onToggle={() =>
              setOpenAccordion(openAccordion === 2 ? null : 2)
            }
          />

          <Accordion
            title="Experiência Profissional:"
            description={
              <>
                <p><strong>MENTALPLUS®</strong></p>
                <p><strong>DESENVOLVEDOR Front-End (Freelancer)</strong></p>
                <p className="pl-4">01/2022 - Atual</p>
                <p className="pl-4">Desenvolvimento de interfaces web utilizando ReactJS e Tailwind CSS</p>
                <p className="pl-4 mb-4">Criação e manutenção do site institucional e sistemas internos da empresa</p>

                <p><strong>IZOTONIC STUDIOS</strong></p>
                <p><strong>DESIGNER 3D (Freelancer)</strong></p>
                <p className="pl-4">01/2016 - Atual</p>
                <p className="pl-4">Modelagem, texturização, rigging e animação de personagens 3D</p>
                <p className="pl-4 mb-4">Edição e renderização de vídeos e imagens para projetos diversos</p>

                <p><strong>LUBRIN</strong></p>
                <p><strong>DESIGNER GRÁFICO</strong></p>
                <p className="pl-4">04/2011 - 12/2014</p>
                <p className="pl-4">Criação de folders, flyers e catálogos de produtos</p>
                <p className="pl-4">Produção de imagens 3D para projetos de engenharia</p>
                <p className="pl-4">Modelagem, texturização e animação 3D para materiais promocionais</p>
                <p className="pl-4">Edição de fotos e vídeos para mídias impressas e digitais</p>
                <p className="pl-4">Responsável pela manutenção do site da empresa</p>
                <p className="pl-4"></p>
              </>
            }
            isOpen={openAccordion === 3}
            onToggle={() =>
              setOpenAccordion(openAccordion === 3 ? null : 3)
            }
          />

          <Accordion
            title="Cursos Complementares:"
            description={
              <>
                <p>Computação Gráfica: Autodesk Maya, Pixologic Zbrush, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe After Effects, Adobe Premiere, Adobe Media Encore, Adobe Substance 3D Painter, Luxion Keyshot, Figma.</p>
                <p>Programação: Python, HTML5, CSS3, JavaScript (Intro), WordPress, ReactJS e Tailwind CSS.</p>
                <p>Sistemas Operacionais: Windows 8.1, 10, 11, Linux Mint, Linux Ubuntu e Linux Fedora.</p>
              </>
            }
            isOpen={openAccordion === 4}
            onToggle={() =>
              setOpenAccordion(openAccordion === 4 ? null : 4)
            }
          />

          <Accordion
            title="Participações:"
            description={
              <p>Experiência em eventos e competições do setor: Big Festival, Campus Party, Game Jam (campeão em 2019) e mentor no Game Jam+.</p>
            }
            isOpen={openAccordion === 5}
            onToggle={() =>
              setOpenAccordion(openAccordion === 5 ? null : 5)
            }
          />

        </div>

      </div>
    </DefaultScreen>
  )
}

export default Curriculo