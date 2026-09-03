import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Videos from '../assets/Components/Videos.jsx'

function VideosPage() {
    const base = "/Portfolio_3D_Designer"

    return (
        <DefaultScreen >

            <div className='-mt-20 lg:-mt-30'>
                <Videos />
            </div>

        </DefaultScreen>
    )
}

export default VideosPage
