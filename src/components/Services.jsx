import React from 'react'

const Services = () => {
    return (
        <>
            <div id='services' className='relative top-[70px] lg:h-[120vh] w-screen bg-[--MainTextColor] text-[--MainBgColor] p-[20px] lg:pr-[60px] lg:pl-[60px] lg:p-[40px] flex flex-col justify-between'>

                <div className="flex flex-col">
                    <h2 className='font-bold text-[4rem]'>Our Services</h2>
                    <p className='text-xl'>We design high-converting sales funnels for fitness & health coaches - built, launched, and optimized on commission.</p>
                </div>

                <div className="flex flex-col lg:flex-row border-solid border-[3px] rounded-md border-[--MainBgColor] lg:h-[500px]">
                    <div className="flex flex-col flex-1 rounded-md">
                        <div className="flex flex-col p-6 h-[50%] bg-[--SecTextColor] rounded-sm">
                            <h3 className='font-bold text-4xl'>Custom Funnel Design</h3>
                            <p>We craft visually clean, mobile-friendly sales funnel pags tailored to your offer - built to convert visitors into paying clients.</p>
                        </div>
                        <img src="./pic1.jpg" alt="" className='object-cover h-0 lg:h-[50%] rounded-sm ' />
                    </div>
                    <div className="flex flex-col flex-1">
                        <img src="./pic2.jpg" alt="" className='object-cover h-0 lg:h-[50%] rounded-sm ' />
                        <div className="flex flex-col p-6 h-[50%] bg-[--SecTextColor] rounded-sm">
                            <h3 className='font-bold text-4xl'>Lead Gen Systems</h3>
                            <p>We intergrate booking forms, lead magnets, and follow-up flows that attract and nurture your ideal clients without you lifting a finger.</p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <div className="flex flex-col p-6 h-[50%] bg-[--SecTextColor] rounded-sm">
                            <h3 className='font-bold text-4xl'>Performance-Based Pricing</h3>
                            <p>No setup fees. You only pay us when your funnel helps you make actual sales - keeping everything results-focused and risk-free.</p>
                        </div>
                        <img src="./pic4.jpg" alt="" className='object-cover h-0 lg:h-[50%] rounded-sm ' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services