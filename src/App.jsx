import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center align-center w-full h-screen bg-gradient-to-b from-black via-gray-800 to-gray-900'>
      <h1 className='flex justify-center align-center font-black text-[18px] sm:text-[28px] lg:text-[36px] xl:text-[40px] text-white mt-18'>Estevam 3D Designer</h1>
    </div>
  </>
  )
}

export default App
