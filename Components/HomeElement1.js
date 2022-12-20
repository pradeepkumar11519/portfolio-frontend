import React from 'react'
import home1 from '../public/images/home1.jpg'
import Image from 'next/image'
import home2 from '../public/images/home2.jpg'
import home7 from '../public/images/home7.jpg'
import { Fade,Flip,Bounce,JackInTheBox,Hinge } from "react-awesome-reveal";

export default function HomeElement1() {
    
    return (
        <div>
            <Fade cascade>
            <h1 className='mb-10 font-bold text-4xl text-center mt-32'>HAVE A LOOK AT ME</h1>
            </Fade>
            <div className='md:grid grid-cols-2 my-20'>
                <div className=' mb-5'>
                    <Image src={home1} placeholder="blur" />
                </div>
                <div className=' text-center my-auto text-3xl font-medium  md:mx-20'>
                    <Bounce>
                    OPENING GATE OF IIT INDORE
                    </Bounce>
                    <Bounce>
                    <p className='text-xl my-5'>There is Much More Fun Inside This Gate Do Need To Join It With Pride</p>
                    </Bounce>
                </div>

            </div>
           
            <div className='md:grid grid-cols-2 my-20'>

                <div className=' hidden md:block my-auto text-3xl font-medium text-center md:mx-20'>
                <Bounce>
                    RIGHT IN FRONT OF THE LEARNING RESOURCE CENTER
                    </Bounce>
                    <Bounce>
                    <p className='text-xl my-5'>This Is A Place Where You Can Find Things Above Your Level And This Describes The Level Of IITs</p>
                    </Bounce>
                </div>

                <div className=' mb-5'>
                    <Image src={home2} placeholder="blur" />
                </div>

                <div className=' block md:hidden my-auto text-3xl font-medium text-center mb-10 md:mx-20'>
                <Bounce>
                    RIGHT IN FRONT OF THE LEARNING RESOURCE CENTER
                </Bounce>
                <Bounce>
                    <p className='text-xl my-5'>This Is A Place Where You Can Find Things Above Your Level And This Describes The Level Of IITs</p>
                    </Bounce>
                </div>

            </div>


            <div className='md:grid grid-cols-2 my-20'>
                <div className=''>
                    <Image src={home7} placeholder="blur" />
                </div>
                <div className=' text-3xl font-medium text-center mt-10 md:my-auto md:mx-20'>
                <Bounce>
                    THESE BUILDINGS ARE SIMILAR TO SOMETHING CALLED AS SPACESHIPS.
                    </Bounce>
                <Bounce>
                    <p className='text-xl my-5'>A PLace Where U Get Scared When U Enter into It In The day Or In The Night</p>
                    </Bounce>
                </div>

            </div>
        </div>
    )
}
