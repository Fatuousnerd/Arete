import { Link } from 'react-router-dom';
import { ArrowOutward } from '@mui/icons-material';

const Ports = [
    {
        id: 1,
        img: "/Ares.png",
        name: "Ares",
        title: "Ares | Lead Capture",
        desc: "Let your funnel work while you train. Ares' lead capture system helps coaches collect emails, build trust, and nurture prospects - without needing to DM everyone manually.",
        tags: "Meal Plans, eBooks, Guides, Training",
        lnk: "https://demo.areteco.agency/Ares"
    },
    {
        id: 2,
        img: "/Athens.png",
        name: "Athens",
        title: "Athens | Lead Capture",
        desc: "Whether you're giving away recipes or a grocery guide, Athens captures your audience at the peak of curiosity and drives them toward your offer - one lead at a time.",
        tags: "Mom Coach, Meal Plans, Guides, eBooks",
        lnk: "https://demo.areteco.agency/Athens"
    },
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
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 w-full justify-between items-center ">
                    <h2 className='text-[4rem] leading-[4rem] lg:text-[5rem] font-black'>Our <span>Portfolio</span></h2>
                    <Link to="https://portfolio.areteco.agency/" className='text-[--MainTextColor] text-xl font-bold underline flex items-center justify-center gap-[10px] hover:text-[--SecTextColor] transition duration-300 '>See all <ArrowOutward /></Link>
                </div>
                <div className="flex w-screen flex-wrap gap-[25px] items-center justify-start md:justify-center relative p-[25px] lg:p-[50px]">
                    {Ports.map((port) => (
                        <div className="flex flex-col items-start justify-between w-[375px] h-[500px] bg-[--SecBgColor] text-[--MainTextColor] bg-opacity-75 backdrop-blur-3xl rounded-[20px] shadow-lg p-3 pb-4" key={port.id}>
                            <img src={port.img} alt="" className='h-[200px] w-full object-cover rounded-[10px] mb-4 ' />
                            <div className="flex flex-col justify-between h-full w-full">
                                <div className="flex flex-col">
                                    <h1 className='font-extrabold text-[2rem] leading-[2.5rem] '>{port.title}</h1>
                                    <p className='text-[--SecTextColor] font-light border-b-solid border-b-[2px] border-b-[--SecTextColor] p-1  '>{port.tags}</p>
                                </div>
                                <p className='font-light text-opacity-75 '>{port.desc}</p>
                                <div className="flex w-full items-center justify-between">
                                    <Link to="/form" style={{ fontWeight: "700" }} className='text-[--SecTextColor] font-bold border-solid border-[2px] border-[--SecTextColor] rounded-lg p-2 hover:bg-[--SecTextColor] hover:text-[--MainTextColor]  '>Get {port.name}</Link>
                                    <Link to={port.lnk} style={{ fontWeight: "700" }} className='p-2 bg-[--MainBgColor] shadow-lg rounded-full flex items-center justify-center hover:shadow-2xl hover:scale-[1.05] transition duration-300 '><ArrowOutward /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Portfolio