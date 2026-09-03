import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import { useTranslation } from 'react-i18next'
import Imagens from '../assets/Components/Imagens.jsx'

function ImagensPage() {
    const { t } = useTranslation()
    const base = "/Portfolio_3D_Designer"

    return (
        <DefaultScreen >

            <div className='-mt-20 lg:-mt-30'>
                <Imagens />
            </div>

        </DefaultScreen>
    )
}

export default ImagensPage
