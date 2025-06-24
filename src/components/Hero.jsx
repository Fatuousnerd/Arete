import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='lg:h-[calc(100vh-70px)] w-screen relative top-[70px] flex flex-col lg:pl-[60px] lg:pr-[60px] p-[20px]'>

                <h1 className=' flex-[1] text-[3rem] lg:text-[5rem] font-extrabold capitalize pl-[15px] lg:p-0 lg:text-center'>Built for <span>coaches</span>. <br /> paid by <span>results</span>.</h1>

                <div className="flex flex-col lg:flex-row flex-[2] gap-[25px] p-3">
                    <img src="./pic3.jpg" alt="" className='flex-[4] object-cover rounded-lg h-[40vh]' />
                    <div className="flex flex-[1] flex-col gap-[10px] justify-around bg-[--HTextColor] rounded-lg p-3 capitalize">
                        <div className="flex flex-col">
                            <p className='text-4xl font-bold'>100%</p>
                            <p className='text-xl'>Commission based</p>
                        </div>
                        <div className="flex flex-col">
                            <p className='text-4xl font-bold'>3x</p>
                            <p className='text-xl'>Lead conversion Boost</p>
                        </div>
                        <div className="flex flex-col">
                            <p className='text-4xl font-bold'>3-5 Days</p>
                            <p className='text-xl'>Average Turnaround</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero