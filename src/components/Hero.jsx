import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='h-[calc(100vh-70px)] w-screen relative top-[70px] flex flex-col pl-[60px] pr-[60px] p-[20px]'>
                
                    <h1 className=' flex-[1] text-[5rem] font-bold capitalize text-center'>Where innovation meets <br/> <span>digital excellence</span></h1>

                <div className="flex flex-[2] gap-[25px] p-3">
                    <img src="./Logo.png" alt="" className='flex-[4] object-cover rounded-lg h-[40vh]'/>
                    <div className="flex flex-[1] flex-col gap-[10px] justify-around bg-[--HTextColor] rounded-lg p-3">
                        <div className="flex flex-col">
                            <p className='text-4xl font-bold'>850+</p>
                            <p className='text-xl'>Projects Completed</p>
                        </div>
                        <div className="flex flex-col">
                            <p className='text-4xl font-bold'>850+</p>
                            <p className='text-xl'>Projects Completed</p>
                        </div>
                        <div className="flex flex-col">
                            <p className='text-4xl font-bold'>850+</p>
                            <p className='text-xl'>Projects Completed</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero