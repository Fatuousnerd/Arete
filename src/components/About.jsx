import { ArrowForward, CheckCircleOutline } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div id='about' className='relative top-[70px] lg:h-screen w-screen flex flex-col lg:flex-row p-[20px] lg:pr-[60px] lg:pl-[60px] lg:p-[40px] gap-[50px] items-center justify-between'>
                <div className="flex flex-[1]">
                    <img src="./pic6.jpg" alt="" className='w-full object-cover rounded-lg' />
                </div>
                <div className="flex flex-col gap-[25px] items-start justify-between h-full flex-[1]">
                    <h2 className='font-semibold text-[3rem] capitalize'>We're <span>awards winning</span> digital agency</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste iure odit quae magni ut! Quaerat, facere dolor, at impedit atque, eaque iusto.</p>
                    <div className="flex items-center gap-[20px]">
                        <CheckCircleOutline />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <CheckCircleOutline />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <CheckCircleOutline />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex bg-[--MainTextColor] rounded-[50px] gap-[20px]">
                        <Link to="/form" className='bg-[--HTextColor] p-[10px] rounded-[50px] flex items-center justify-center'>Get Started</Link>
                        <Link to="/form" className='bg-[--MainBgColor] p-[10px] rounded-[50%] flex items-center justify-center'><ArrowForward/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About