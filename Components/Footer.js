import React from 'react'
import footerwave from '../public/images/footer_wave2.png'
import Image from 'next/image'
export default function Footer() {
    return (
        <div id="footer" className='h-[300px] w-full'>
            <div id="footerwave" className='bg-[url("/images/footer_wave2.png")] bg-cover w-full h-full lg:h-[500px]  '>
                
            </div>
            <div id="footerwave1" className='bg-[url("/images/footer_wave2.png")] bg-cover w-full h-full  lg:h-[300px]'>
                
            </div>
            <div id="footerwave2" className='bg-[url("/images/footer_wave2.png")] bg-cover w-full h-full  '>
                
            </div>
            <div id="contents" className=' h-[100px] lg:h-[200px]'></div>
            <style jsx>
                {`
                
                `}
            </style>
        </div>
    )
}
