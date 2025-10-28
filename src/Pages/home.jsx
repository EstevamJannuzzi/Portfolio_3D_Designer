import React from 'react'
import Menu from '../assets/Components/Menu.jsx'

const home = () => {
    return (
        <>
            <Menu />
            <hr className='border-green' />
            <div className='flex justify-center align-center border-0 rounded-[12px] bg-white/25 p-4 m-4 w-[320px] sm:w-[410px] lg:w-[390px] xl:w-[475px]'>
                <h1 className='text-primary font-bold text-lg'>Home</h1>
            </div>
        </>
    )
}

export default home
