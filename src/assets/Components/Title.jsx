import React from 'react'

const Title = ({ text, size, color='text-orange', darkcolor='dark:text-green' }) => {
    return (
        <div>
            <h1 className={`text-4xl font-bold ${color} ${darkcolor} ${size}`}>
                {text}
            </h1>
        </div>
    )
}

export default Title
