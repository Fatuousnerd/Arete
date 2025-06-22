import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div id='about' className='relative top-[70px] h-screen w-screen flex pr-[60px] pl-[60px] p-[40px] gap-[50px] items-center justify-between'>
                <div className="flex flex-[1]">
                    <img src="./Logo.png" alt="" className='w-full object-cover rounded-lg'/>
                </div>
                <div className="flex flex-col gap-[25px] items-start justify-between h-full flex-[1]">
                    <h2 className='font-semibold text-[3rem] capitalize'>We're <span>awards winning</span> digital agency</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste iure odit quae magni ut! Quaerat, facere dolor, at impedit atque, eaque iusto.</p>
                    <div className="flex items-center gap-[20px]">
                        <img src="./vite.svg" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <img src="./vite.svg" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <img src="./vite.svg" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex bg-[--MainTextColor] rounded-[50px] gap-[20px]">
                        <Link className='bg-[--HTextColor] p-[10px] rounded-[50px] flex items-center justify-center'>Learn More</Link>
                        <Link className='bg-[--MainBgColor] p-[10px] rounded-[50%] flex items-center justify-center'><img src="./vite.svg" alt="" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About