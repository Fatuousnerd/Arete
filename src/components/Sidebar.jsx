import { CloseRounded, MenuRounded } from '@mui/icons-material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <button className='fixed flex flex-col lg:hidden z-[99] mt-[20px] ml-[20px] bg-[rgb(255, 255, 255)] bg-opacity-75 backdrop-blur-3xl p-[15px] rounded-full outline-none border-none ' onClick={() => setOpen((prev) => !prev)}>{!open ? <MenuRounded /> : <CloseRounded />}</button>
            {open &&
                <div className='flex flex-col lg:hidden h-screen w-[300px] fixed z-[98] bg-[#2c1f14] bg-opacity-75 backdrop-blur-lg p-[75px] pt-[100px] gap-[40px] text-4xl '>
                    <Link to="/" className='hover:text-[--HTextColor]'>Home</Link>
                    <Link to="#services" className='hover:text-[--HTextColor]'>Services</Link>
                    <Link to="#portfolio" className='hover:text-[--HTextColor]'>Portfolio</Link>
                    <Link to="#about" className='hover:text-[--HTextColor]'>About</Link>
                    {/* <Link to="#" className='hover:text-[--HTextColor]'>Work</Link> */}
                    <Link to="#contact" className='hover:text-[--HTextColor]'>Contact</Link>
                </div>
            }
        </>
    )
}

export default Sidebar