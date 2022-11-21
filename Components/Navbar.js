import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/logo.webp'
import { FaSearch, FaBars } from 'react-icons/fa'
import OffCanvasNavbar from './OffCanvasNavbar'
export default function Navbar() {
	const OpenOffCanvasNavbar = () =>{
		var width = document.getElementById('offcanvas').offsetWidth
    	console.log(width)
		document.getElementById('offcanvas').classList.toggle(`smenu`)
	}
	return (
		<div className='bg-black z-[10] fixed w-full '>
			<div className='grid grid-cols-[auto_auto]'>
				<div className='flex lg:justify-center'>
					<div className=' m-4 w-[60px] h-[60px] '>
						<Image className='rounded-md' src={logo} />
					</div>
					<div className='my-auto hidden sm:flex'>
						<h1 className='my-auto text-white font-bold text-xl'><span className='text-red-500 font-bold text-3xl'>P</span>radeep</h1>
						<h1 className='my-auto text-white font-bold text-xl'><span className='text-red-500 font-bold text-3xl ml-1'>K</span>umar</h1>
					</div>
				</div>


				<div className=' my-auto hidden lg:block'>
					<ul className='flex justify-center items-center my-auto mx-5 p-3'>
						<li className=' p-2 mx-2  hover:text-red-500 text-white  transition-all fade-in-out'>
							<Link href="/" className=' py-1 transition-all fade-in-out'>HOME</Link>
						</li>
						<li className=' p-2 mx-2  hover:text-red-500 text-white  transition-all fade-in-out'>
							<Link href="/" className=' py-1 transition-all fade-in-out'>MY ACHIEVMENTS</Link>
						</li>
						<li className=' p-2 mx-2  hover:text-red-500 text-white  transition-all fade-in-out'>
							<Link href="/" className=' py-1 transition-all fade-in-out'>LIVE CHAT</Link>
						</li>
						<li className=' p-2 mx-2  hover:text-red-500 text-white  transition-all fade-in-out'>
							<Link href="/" className=' py-1 transition-all fade-in-out'>ABOUT ME</Link>
						</li>
						<li className=' p-2 mx-2  hover:text-red-500 text-white  transition-all fade-in-out'>
							<Link href="/" className=' py-1 transition-all fade-in-out'>CONTACT ME</Link>
						</li>
					</ul>
				</div>
				<div className='flex lg:hidden my-auto  justify-end'>
					<button className='mx-5'>
						<FaBars className='invert w-7 h-7 ' onClick={OpenOffCanvasNavbar} />
					</button>
				</div>
				

			</div>
			<div className='lg:hidden'>
				<OffCanvasNavbar/>
			</div>
		</div>
	)
}
