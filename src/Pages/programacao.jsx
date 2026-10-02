import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import Pictures from '../assets/Components/Pictures.jsx'
import Button from '../assets/Components/Button.jsx'
import programacaos from '../assets/Data/programacaos.js'

function ProgramacaoPage() {
    const handleButtonClick = (link, isDownload) => {
        if (isDownload) {
            const anchor = document.createElement('a')
            anchor.href = link
            const fileName = link.split('/').pop()
            anchor.download = fileName
            document.body.appendChild(anchor)
            anchor.click()
            document.body.removeChild(anchor)
        } else {
            window.open(link, '_blank', 'noopener noreferrer')
        }
    }

    return (
        <DefaultScreen>
            <div className='-mt-20 lg:-mt-30'>
                <>
                    <div
                        id="programming"
                        className="flex flex-col items-center justify-center gap-2 text-center"
                    >
                        <Title
                            text="Programação"
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
                                    <Pictures
                                        src={programacao.src}
                                        alt={programacao.alt}
                                        width="w-[160px] sm:w-[140px] lg:w-[180px] xl:w-[200px]"
                                        margin="mb-4"
                                    />

                                    <Button
                                        text={programacao.text}
                                        onClick={() => handleButtonClick(programacao.link, true)}
                                        download={true}
                                        width="w-[160px] sm:w-[140px] lg:w-[170px] xl:w-[200px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            </div>
        </DefaultScreen>
    )
}

export default ProgramacaoPage
