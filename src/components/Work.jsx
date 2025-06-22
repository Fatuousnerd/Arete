import { Call } from '@mui/icons-material'
import React from 'react'

const Work = () => {
    return (
        <>
            <div id='work' className='relative top-[70px] lg:h-screen w-screen bg-[--MainTextColor] text-[--MainBgColor] pr-[60px] pl-[60px] p-[40px] flex flex-col items-center justify-around gap-[50px]'>
                <h2 className='text-[4rem] font-semibold text-center '>Our Working Process</h2>
                <div className="flex flex-col lg:flex-row text-center gap-[50px]">
                    <div className="flex flex-col items-center gap-[20px]">
                        <Call style={{fontSize:"3rem"}}/>
                        <p className='text-3xl font-medium'>Discovery Call</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, aliquam libero voluptatibus numquam ad repudiandae obcaecati?</p>
                    </div>
                    <div className="flex flex-col items-center gap-[20px]">
                        <img src="./vite.svg" alt="" className='h-[50px]' />
                        <p className='text-3xl font-medium'>Discovery Call</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, aliquam libero voluptatibus numquam ad repudiandae obcaecati?</p>
                    </div>
                    <div className="flex flex-col items-center gap-[20px]">
                        <img src="./vite.svg" alt="" className='h-[50px]' />
                        <p className='text-3xl font-medium'>Discovery Call</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, aliquam libero voluptatibus numquam ad repudiandae obcaecati?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work