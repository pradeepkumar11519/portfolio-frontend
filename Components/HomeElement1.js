import React from 'react'
import home1 from '../public/images/home1.jpg'
import Image from 'next/image'
import home2 from '../public/images/home2.jpg'
import home7 from '../public/images/home7.jpg'
export default function HomeElement1() {
    return (
        <div>
            <h1 className='mx-auto pt-20 font-bold  text-white text-3xl text-center z-[-1]'>HAVE A LOOK AT ME.</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-2/3 mx-auto">
                        <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 rounded-md ring-4 ring-opacity-100 border-2 border-black ring-white">
                            <Image placeholder="blur" alt="gallery" className="w-full object-cover h-full object-center block opacity-80 absolute inset-0 rounded-md" src={home1}/>
                                <div className="text-center relative z-[1] w-full">
                                    <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                    <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                                    <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                        </div>
                        <div className="flex flex-wrap -mx-2">
                            <div className="px-2 lg:w-1/2 w-full  mx-auto mb-4">
                                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative rounded-md ring-4 ring-opacity-100 border-2 border-black ring-white">
                                    <Image placeholder="blur" alt="gallery" className="w-full object-cover h-full object-center block opacity-80 absolute inset-0 " src={home2}/>
                                        <div className="text-center relative z-[1] w-full">
                                            <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                            <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                </div>
                            </div>
                            <div className="px-2 lg:w-1/2 w-full  mx-auto mb-4">
                                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative rounded-md ring-4 ring-opacity-100 border-2 border-black ring-white">
                                    <Image placeholder="blur" alt="gallery" className="w-full object-cover h-full object-center block opacity-80 absolute inset-0" src={home7}/>
                                        <div className="text-center relative z-[1] w-full">
                                            <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                            <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
