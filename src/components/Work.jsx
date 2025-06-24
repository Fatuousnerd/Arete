import { AssignmentRounded, Call, CreditCardRounded, ExtensionRounded } from '@mui/icons-material'
import React from 'react'

const Work = () => {
    return (
        <>
            <div id='work' className='relative top-[70px] lg:h-screen w-screen bg-[--MainTextColor] text-[--MainBgColor] pr-[60px] pl-[60px] p-[40px] flex flex-col items-center justify-around gap-[50px]'>
                <h2 className='text-[4rem] font-semibold text-center '>Our Working Process</h2>
                <div className="flex flex-col lg:flex-row text-center gap-[50px]">
                    <div className="flex flex-col items-center gap-[20px]">
                        <AssignmentRounded style={{fontSize:"3rem"}}/>
                        <p className='text-3xl font-medium capitalize'>Share your offer</p>
                        <p>You fill a short form so we understand your program, audience, and goals — no calls unless needed.</p>
                    </div>
                    <div className="flex flex-col items-center gap-[20px]">
                        <ExtensionRounded style={{fontSize:"3rem"}}/>
                        <p className='text-3xl font-medium capitalize'>We build your funnel</p>
                        <p>We design and launch a custom sales page that’s mobile-optimized, branded, and built to convert.</p>
                    </div>
                    <div className="flex flex-col items-center gap-[20px]">
                        <CreditCardRounded style={{fontSize:"3rem"}}/>
                        <p className='text-3xl font-medium capitalize'>You sell, we get paid</p>
                        <p>You start sending traffic and closing clients. You only pay us a small commission after results.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work