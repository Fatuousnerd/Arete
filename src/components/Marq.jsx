import React from 'react'

const Marq = () => {
    return (
        <>
            <marquee behavior="scroll" direction="left" className='relative top-[70px] bg-[--HTextColor] h-[70px] flex flex-row items-center text-2xl font-bold p-5'>
                <div className="flex items-center gap-[50px]">
                    <img src="./Logo.png" alt="" className='h-[50px]' />
                    <p className='text-4xl font-semibold'>UX/UI Design</p>
                    <img src="./Logo.png" alt="" className='h-[50px]' />
                    <p className='text-4xl font-semibold'>Website Design</p>
                    <img src="./Logo.png" alt="" className='h-[50px]' />
                    <p className='text-4xl font-semibold'>Graphic Design</p>
                    <img src="./Logo.png" alt="" className='h-[50px]' />
                    <p className='text-4xl font-semibold'>UX/UI Design</p>
                    <img src="./Logo.png" alt="" className='h-[50px]' />
                    <p className='text-4xl font-semibold'>Website Design</p>
                    <img src="./Logo.png" alt="" className='h-[50px]' />
                    <p className='text-4xl font-semibold'>Graphic Design</p>
                </div>
            </marquee>
        </>
    )
}

export default Marq