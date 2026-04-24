import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import { useTranslation } from 'react-i18next'
import Websites from '../assets/Components/Websites.jsx'

function WebsitesPage() {
    const { t } = useTranslation()
    const base = "/Portfolio_3D_Designer"

    return (
        <DefaultScreen >

            <div className='-mt-20 lg:-mt-30'>
                <Websites />
            </div>

        </DefaultScreen>
    )
}

export default WebsitesPage
