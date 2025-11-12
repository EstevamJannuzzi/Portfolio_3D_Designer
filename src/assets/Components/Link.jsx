import React from 'react'

const Link = ({ text, link, download = false }) => {
    return (
        <div className="flex flex-col items-center justify-center font-text text-orange dark:text-green hover:text-primary dark:hover:text-orange text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px] bg-white/65 dark:bg-dark-gray/85 rounded-lg p-2 border-b-8 border-orange hover:border-primary dark:border-green dark:hover:border-orange hover:scale-105 transition-transform duration-300 cursor-pointer">
            <a
                href={link}
                {...(download
                    ? { download: true }
                    : { target: '_blank', rel: 'noopener noreferrer' })}
                className='font-text text-[18px] sm:text-[26px] lg:text-[28px] xl:text-[32px]'
            >
                {text}
            </a>
        </div>
    )
}

export default Link
