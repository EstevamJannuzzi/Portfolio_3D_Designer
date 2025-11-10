import React from 'react'

const BoxContent = ({ text, icon, link, target='_blank' }) => {
    return (
        <div className="w-[100px] sm:w-[150px] lg:w-[200px] xl:w-[250px] flex flex-col items-center justify-center font-text text-dark-gray dark:text-light-gray bg-white/65 dark:bg-dark-gray/85 rounded-lg p-4 text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px] border-b-8 border-orange hover:border-green dark:border-green dark:hover:border-orange hover:scale-105 transition-transform duration-300">
            <a
                href={link}
                target={target}
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-orange hover:text-green dark:text-green dark:hover:text-orange text-[16px] sm:text-[18px] lg:text-[20px]"
            >
                {icon}
                <span className='font-text text-[18px] sm:text-[26px] lg:text-[28px] xl:text-[32px]'>{text}</span>
            </a>
        </div>
    )
}

export default BoxContent
