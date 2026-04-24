import React from 'react'

const Title = ({ text, size, color='text-sky-blue', darkcolor='dark:text-blue-iris' }) => {
    return (
        <div>
            <h1 className={`text-4xl font-bold ${color} ${darkcolor} ${size}`}>
                {text}
            </h1>
        </div>
    )
}

export default Title
