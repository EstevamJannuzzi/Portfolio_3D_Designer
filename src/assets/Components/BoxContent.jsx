import React from 'react'
import { PiWindowsLogoBold } from "react-icons/pi"

const BoxContent = ({
    text,
    icon,
    link,
    width = 'w-[100px] sm:w-[150px] lg:w-[200px] xl:w-[250px]',
    target = '_blank',
    download = false
}) => {
    return (
        <a
            href={link}
            {...(download
                ? { download: true }
                : { target: target, rel: 'noopener noreferrer' })}
            className={`${width} flex flex-col items-center justify-center font-text text-dark-gray dark:text-light-gray bg-white/65 dark:bg-dark-gray/85 rounded-lg p-2 text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px] border-b-8 border-orange hover:border-green dark:border-green dark:hover:border-orange hover:scale-105 transition-transform duration-300 cursor-pointer`}
        >
            <div className="flex flex-col items-center gap-2 text-orange hover:text-green dark:text-green dark:hover:text-orange text-[16px] sm:text-[18px] lg:text-[20px]">
                {/* Se for download, mostra o ícone do Windows */}
                {download ? (
                    <span>
                        <PiWindowsLogoBold className="text-[24px] sm:text-[28px] lg:text-[32px]" />
                    </span>
                ) : (
                    icon && <span>{icon}</span>
                )}
                <span className="font-text text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[18px]">
                    {text}
                </span>
            </div>
        </a>
    )
}

export default BoxContent
