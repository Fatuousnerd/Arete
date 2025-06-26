import { Link } from 'react-router-dom';
import { ArrowOutward } from '@mui/icons-material';

const Ports = [
    {
        id: 1,
        img: "/pic1.jpg",
        title: "Ares | Lead Capture",
        desc: "Build trust while you sleep.",
        tags: "Meal Plans, eBooks, Guides",
        lnk: "https://demo.areteco.agency/Ares"
    },
    // {
    //     id: 2,
    //     img: "/pic1.jpg",
    //     title: "One",
    //     desc: "Lose the weight and gain the confidence with Jari Maureen.",
    //     tags: "Health, Nutrition, Fitness",
    //     lnk: "https://demo.areteco.agency/one"
    // },
    // {
    //     id: 3,
    //     img: "/pic1.jpg",
    //     title: "One",
    //     desc: "Lose the weight and gain the confidence with Jari Maureen.",
    //     tags: "Health, Nutrition, Fitness",
    //     lnk: "https://demo.areteco.agency/one"
    // },
];

const Portfolio = () => {
    return (
        <>
            <div id='portfolio' className='relative top-[70px] min-h-screen w-screen flex flex-col items-center justify-around p-[50px] '>
                <div className="flex flex-col lg:flex-row w-full justify-between items-center ">
                    <h2 className='text-[4rem] leading-[4rem] lg:text-[5rem] font-black'>Our <span>Portfolio</span></h2>
                    <Link to="https://demo.areteco.agency/" className='text-[--MainTextColor] text-xl font-bold underline flex items-center justify-center gap-[10px] hover:text-[--SecTextColor] transition duration-300 '>See all <ArrowOutward /></Link>
                </div>
                <div className="flex w-screen flex-wrap gap-[25px] items-center justify-start md:justify-center relative p-[25px] lg:p-[50px]">
                    {Ports.map((port) => (
                        <div className="flex flex-col items-start justify-between w-[375px] h-[450px] bg-[--SecBgColor] text-[--MainTextColor] bg-opacity-75 backdrop-blur-3xl rounded-[20px] shadow-lg p-3 pb-4" key={port.id}>
                            <img src={port.img} alt="" className='h-[225px] w-full object-cover rounded-[10px]' />
                            <h1 className='font-extrabold text-[2rem] '>{port.title}</h1>
                            <p className='font-light text-opacity-75 '>{port.desc}</p>
                            <div className="flex w-full items-center justify-between">
                                <p className='text-[--SecTextColor] font-bold border-solid border-[2px] border-[--SecTextColor] rounded-lg p-2  '>{port.tags}</p>
                                <Link to={port.lnk} style={{ fontWeight: "700" }} className='p-2 bg-[--MainBgColor] shadow-lg rounded-full flex items-center justify-center hover:shadow-2xl hover:scale-[1.05] transition duration-300 '><ArrowOutward /></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Portfolio