import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import { useTranslation } from 'react-i18next'
import BackButton from '../assets/Components/BackButton.jsx'
import Image from '../assets/Components/Image.jsx'

const Imagens = () => {
    const { t } = useTranslation()

    return (
        <DefaultScreen className='z-30'>
            <div className="mb-8 flex justify-center relative z-20">
                <BackButton to="/portfolio" />
            </div>

            <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Title
                    text={t("image.title")}
                    size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[60px]"
                />
            </div>

            <div className="relative flex justify-center items-center mt-8">
                <div className="grid grid-cols-3 gap-6">
                    <Image
                        src='/imagespage/Atari2600_01.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Atari2600_02.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/BBB10.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/BBB12.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/BBB14.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/BBB16.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/BBB18.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/BBB19.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Brainy Self 1.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Brainy Self 2.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/carnivor_1.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/carnivor_2.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/cartuchoMegaDrive03.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/cartuchoMegaDrive04.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Cartuchos_Atari2600_01.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Cartuchos_Atari2600_03.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Chamaleon_Ladybug.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/control01.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/control03.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/ding-bo_Instagram.0.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Ding-Bo.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/DingBo_OtherAmbient.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/dragonFly01.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Frog01.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Frog06.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Genius01.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Genius02.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/glass01_Final.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/glass03_Final.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Gremlin1080_3_Final.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Gremlin1080_4_Final.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Gremlin1080_Final.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Imagem01.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/JetBike_Yellow.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/JetBike01.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/JetBike03.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/lamp.1.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Lamparina.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Natal2023.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Nature.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Origami2.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/refriRender_Other.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/renderFinalRefri.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Shark02.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                    <Image
                        src='/imagespage/Shark03.webp'
                        width="w-[100px] sm:w-[180px] lg:w-[300px] xl:w-[600px]"
                    />
                </div>
            </div>

            <div className="mt-8 flex justify-center relative z-20">
                <BackButton to="/portfolio" />
            </div>
        </DefaultScreen>
    )
}

export default Imagens
