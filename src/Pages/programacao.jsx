import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Programacao from '../assets/Components/Programacao.jsx'

function ProgramacaoPage() {
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
