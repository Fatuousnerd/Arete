import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='w-full h-[70px] bg-[--SecBgColor] flex items-center justify-between p-[20px] pr-[30px] pl-[30px] fixed z-[99]'>
                <Link to="/" className="text-3xl font-extrabold text-[--SecTextColor] hover:text-[--MainTextColor]">Arete Co</Link>
                <div className="flex gap-[25px]">
                    <Link className='hover:text-[--HTextColor]'>About</Link>
                    <Link className='hover:text-[--HTextColor]'>Services</Link>
                    <Link className='hover:text-[--HTextColor]'>Portfolio</Link>
                    <Link className='hover:text-[--HTextColor]'>Testimonials</Link>
                    <Link className='hover:text-[--HTextColor]'>Contact</Link>
                </div>
                <Link className='p-[10px] bg-[--HTextColor] rounded-md font-bold uppercase hover:scale-[1.02]'>Join Now</Link>
            </div>
        </>
    )
}

export default Navbar