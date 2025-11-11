import React from 'react'

const Link = ({ text, link }) => {
    return (
        <div className="flex flex-col items-center justify-center font-text text-dark-gray dark:text-light-gray text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px] cursor-pointer">
            <a
                href={link}
                target='_blank'
                rel="noopener noreferrer"
                className='font-text text-[18px] sm:text-[26px] lg:text-[28px] xl:text-[32px]'
            >
                {text}
            </a>
        </div>
    )
}

export default Link
