import React from 'react'

const Services = () => {
    return (
        <>
            <div id='services' className='relative top-[70px] h-[120vh] w-screen bg-[--MainTextColor] text-[--MainBgColor] pr-[60px] pl-[60px] p-[40px] flex flex-col justify-between'>

                <div className="flex flex-col">
                    <h2 className='font-bold text-[4rem]'>Our Services</h2>
                    <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur enim perspiciatis quis suscipit odio officiis laborum amet expedita.</p>
                </div>

                <div className="flex border-solid border-[3px] rounded-md border-[--MainBgColor] h-[500px]">
                    <div className="flex flex-col flex-1 rounded-md">
                        <div className="flex flex-col p-6 h-[50%] bg-[--SecTextColor] rounded-sm">
                            <h3 className='font-bold text-4xl'>Web Dev</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat harum iste, delectus maxime eum ducimus eveniet vel excepturi adipisci tempora repudiandae accusantium itaque repellendus corrupti sapiente tempore! Saepe, laudantium sapiente?</p>
                        </div>
                        <img src="./Logo.png" alt="" className='object-cover h-[50%] rounded-sm' />
                    </div>
                    <div className="flex flex-col flex-1">
                        <img src="./Logo.png" alt="" className='object-cover h-[50%] rounded-sm' />
                        <div className="flex flex-col p-6 h-[50%] bg-[--SecTextColor] rounded-sm">
                            <h3 className='font-bold text-4xl'>Web Dev</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat harum iste, delectus maxime eum ducimus eveniet vel excepturi adipisci tempora repudiandae accusantium itaque repellendus corrupti sapiente</p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <div className="flex flex-col p-6 h-[50%] bg-[--SecTextColor] rounded-sm">
                            <h3 className='font-bold text-4xl'>Web Dev</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat harum iste, delectus maxime eum ducimus eveniet vel excepturi adipisci tempora repudiandae accusantium itaque repellendus corrupti sapiente tempore! Saepe, laudantium sapiente?</p>
                        </div>
                        <img src="./Logo.png" alt="" className='object-cover h-[50%] rounded-sm' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services