import React from 'react'
import { PiWindowsLogoBold } from "react-icons/pi"

const Button = ({
    text,
    icon,
    onClick,
    width = 'w-[100px] sm:w-[150px] lg:w-[200px] xl:w-[250px]',
    download = false
}) => {
    return (
        <button
            onClick={onClick}
            className={`${width} flex flex-col items-center justify-center font-text text-dark-gray dark:text-light-gray bg-white/65 dark:bg-dark-gray/85 rounded-lg p-2 text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px] border-b-8 border-sky-blue hover:border-blue-iris dark:border-blue-iris dark:hover:border-sky-blue hover:scale-105 transition-transform duration-300 cursor-pointer`}
        >
            <div className="flex flex-col items-center gap-2 text-sky-blue hover:text-blue-iris dark:text-blue-iris dark:hover:text-sky-blue text-[16px] sm:text-[18px] lg:text-[20px]">
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
        </button>
    )
}

export default Button
