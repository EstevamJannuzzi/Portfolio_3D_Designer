import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import { useTranslation } from 'react-i18next'
import Programacao from '../assets/Components/Programacao.jsx'

function ProgramacaoPage() {
    const { t } = useTranslation()
    const base = "/Portfolio_3D_Designer"

    return (
        <DefaultScreen >

            <div className='-mt-20 lg:-mt-30'>
                <Programacao />
            </div>

        </DefaultScreen>
    )
}

export default ProgramacaoPage
