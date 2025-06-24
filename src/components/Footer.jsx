import { Instagram, LinkedIn, Mail, Phone, Reddit, Telegram, WhatsApp, X, YouTube } from '@mui/icons-material';
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className='bg-[--SecBgColor] lg:h-[250px] px-[30px] py-[20px] lg:px-[100px] relative top-[100px] text-center lg:justify-between lg:items-start items-center flex flex-col lg:flex-row flex-wrap '>

                <div className="flex justify-between flex-wrap gap-[50px] lg:gap-[100px] text-left ">

                    {/* <ul className='flex flex-col gap-[10px] '>
                        <p className='font-extrabold text-xl mb-[20px]'>Privacy</p>
                        <li><Link>Terms of Use</Link></li>
                        <li><Link>Privacy Policy</Link></li>
                        <li><Link>Cookies</Link></li>
                    </ul> */}

                    {/* <ul className='flex flex-col gap-[10px] '>
                        <p className='font-extrabold text-xl mb-[20px]'>Services</p>
                        <li><Link to="/themes">Themes</Link></li>
                        <li><Link>Custom Order</Link></li>
                    </ul> */}

                    <ul className='flex flex-col gap-[10px] '>
                        <p className='font-extrabold text-xl mb-[20px]'>Navigation</p>
                        <Link to="#services" className='hover:text-[--HTextColor]'>Services</Link>
                        <Link to="#portfolio" className='hover:text-[--HTextColor]'>Portfolio</Link>
                        <Link to="#about" className='hover:text-[--HTextColor]'>About</Link>
                        {/* <Link to="#" className='hover:text-[--HTextColor]'>Work</Link> */}
                        <Link to="#contact" className='hover:text-[--HTextColor]'>Contact</Link>
                    </ul>

                    {/* <ul className='flex flex-col gap-[10px] '>
                        <p className='font-extrabold text-xl mb-[20px]'>Careers</p>
                        <li><Link>Sell Your Template</Link></li>
                        <li><Link>Work with Us</Link></li>
                        <li><Link></Link></li>
                        <li><Link></Link></li>
                        <li><Link></Link></li>
                    </ul> */}

                </div>

                <div className="flex flex-col text-left gap-[50px] ">
                    <p className='font-extrabold text-xl'>Social Media</p>
                    <ul className='flex gap-[50px] '>
                        <li><Link to="https://instagram.com/arete.co.agency"><LinkedIn /></Link></li>
                        <li><Link to="https://instagram.com/arete.co.agency"><Instagram /></Link></li>
                        <li><Link to="https://www.reddit.com/user/kanvasweb/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"><Reddit /></Link></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Footer