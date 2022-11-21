import Head from 'next/head'
import Image from 'next/image'
import HomeElement1 from '../Components/HomeElement1'
import home4 from '../public/images/home4.png'

export default function Home() {
	return (
		<div >
			<div className='lg:grid grid-cols-[800px_auto] '>
				<div className='relative flex lg:items-center lg:before:bg-[url("/images/wave4.png")] before:bg-[url("/images/wave5.png")]  before:w-full lg:before:h-full before:h-[500px] before:bg-cover before:bg-no-repeat before:bg-center before:absolute lg:h-full w-full before:z-[-1]  justify-center h-[400px]'>
					<h1 className='text-4xl mx-auto lg:mx-5 font-bold text-white w-[300px] my-32 lg:my-auto '>Hi,I am <span className='text-red-500'>Pradeep</span> Kumar From India</h1>
				</div>
				<div className='flex justify-center'>
					<Image className='' src={home4} placeholder="blur"/>
				</div>
			</div>
			<div className='px-20 bg-black'>
				<HomeElement1/>
			</div>
		</div>
	)
}
