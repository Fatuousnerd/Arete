import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, LinkedIn, Reddit, X } from '@mui/icons-material'

const Contact = () => {
    return (
        <>
            <div id='contact' className='relative top-[70px] w-screen lg:h-screen flex flex-col lg:flex-row items-center p-[20px] lg:pr-[60px] lg:pl-[60px] lg:p-[40px] gap-[50px]'>
                <div className="flex flex-col flex-[2]">
                    <h2 className='font-bold text-[3.5rem]'>Contact Us</h2>
                    <form action="" className='flex flex-col gap-[25px] items-start h-full'>
                        <input type="text" name="" id="" placeholder='Name' className='w-full bg-[--SecBgColor] rounded-md p-[5px] outline-none border-[2px] border-solid border-[--SecBgColor] focus:border-[--HTextColor]' />
                        <input type="email" name="" id="" placeholder='Email' className='w-full bg-[--SecBgColor] rounded-md p-[5px] outline-none border-[2px] border-solid border-[--SecBgColor] focus:border-[--HTextColor]' />
                        <textarea name="" id="" placeholder='Message' rows="10" className='w-full bg-[--SecBgColor] rounded-md p-[5px] outline-none border-[2px] border-solid border-[--SecBgColor] focus:border-[--HTextColor]'></textarea>
                        <button type="submit" className='p-[10px] bg-[--HTextColor] rounded-md font-bold uppercase hover:scale-[1.02]'>Submit</button>
                    </form>
                </div>
                <div className="flex flex-col items-start justify-center gap-[50px] flex-1 bg-[--HTextColor] rounded-lg text-[--MainBgColor] p-[25px] h-[400px]">
                        <Link className="flex items-center gap-[25px] font-normal text-xl"><Instagram style={{fontSize:"2.5rem"}}/> @areteco</Link>
                        <Link className="flex items-center gap-[25px] font-normal text-xl"><Reddit style={{fontSize:"2.5rem"}}/> @areteco</Link>
                        <Link className="flex items-center gap-[25px] font-normal text-xl"><LinkedIn style={{fontSize:"2.5rem"}}/> @areteco</Link>
                </div>
            </div>
        </>
    )
}

export default Contact