import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import Frog from '../assets/images/Frog.webp'
import BoxtextResume from '../assets/Components/BoxtextResume.jsx'

const Curriculo = () => {
  return (
    <DefaultScreen className='z-30'>
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <Title
          text="Currículo"
          size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
        />
        <img
          src={Frog}
          alt="Frog"
          className="flex justify-center items-center w-[260px] sm:w-[500px] lg:w-[600px] xl:w-[900px] mt-6 mb-6"
        />
        <BoxtextResume
          title="Resumo Profissional:"
          description="Sou designer gráfico formado pela Universidade Paulista (UNIP) em 2011, com sólida experiência em modelagem 3D, animação e design visual. Iniciei minha carreira na empresa de engenharia Lubrin, onde atuava na criação de projetos tridimensionais de motores, redutores e componentes técnicos. Além disso, desenvolvia materiais gráficos como flyers e folders, gerenciava o site institucional e realizava edição de vídeos e imagens.
Após essa experiência, segui como freelancer no estúdio de desenvolvimento de games IzotonicStudios, contribuindo com modelagem 3D, texturização e animações 2D e 3D para personagens e cenários. Paralelamente, atuo como designer na empresa MentalPlus, responsável pelo aplicativo homônimo voltado à área neuropsicológica. Lá, sou responsável pela modelagem e animação do mascote Dr. Brainy, além da manutenção do site da empresa.
Sou apaixonado por tecnologia e inovação, sempre em busca de atualização constante em novas ferramentas e técnicas. Tenho perfil colaborativo, sou proativo nas decisões, objetivo, determinado e extremamente detalhista em meus processos criativos.
"
        />
        <BoxtextResume
          title="Formação Acadêmica:"
          description={
            <>
              <p>Graduado em Design Gráfico - Faculdade UNIP – Concluído 12/2011</p>
              <p>Ensino Médio Técnico em Eletrônica – Colégio S.A.A. – Concluído 12/1997</p>
            </>
          }
        />
        <BoxtextResume
          title="Idiomas:"
          description={
            <>
              <p>Inglês - Intermediário</p>
              <p>Espanhol - Básico</p>
            </>
          }
        />
        <BoxtextResume
          title="Experiência Profissional:"
          description={
            <>
              <p><strong>MENTALPLUS&#174;</strong></p>
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
            </>
          }
        />
        <BoxtextResume
          title="Cursos Complementares:"
          description={
            <>
              <p><strong>Computação Gráfica:</strong> Autodesk Maya, Pixologic Zbrush, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe After Effects, Adobe Premiere, Adobe Media Encore, Adobe Substance 3D Painter, Luxion Keyshot, Figma.</p>
              <p><strong>Programação:</strong> Python, HTML5, CSS3, JavaScript (Intro), WordPress, ReactJS e Tailwind CSS.</p>
              <p><strong>Sistemas Operacionais:</strong> Windows 8.1, 10, 11, Linux Mint, Linux Ubuntu e Linux Fedora.</p>
            </>
          }
        />
        <BoxtextResume
          title="Participações:"
          description={
            <>
              <p><strong>Experiência em eventos e competições do setor:</strong> Big Festival, Campus Party, Game Jam (campeão em 2019) e mentor no Game Jam+.</p>
            </>
          }
        />
      </div>
    </DefaultScreen>
  )
}

export default Curriculo
