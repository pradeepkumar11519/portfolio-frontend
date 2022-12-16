import React from 'react'
import Image from 'next/image'
import home5 from '../public/images/home5.jpg'
import html from '../public/images/html.png'
import css from '../public/images/css.png'
import django from '../public/images/django.png'
import js from '../public/images/js.png'
import drf from '../public/images/drf.png'
import formik_image from '../public/images/formik.png'
import react_query from '../public/images/react_query.png'
import next from '../public/images/next.png'
import react_image from '../public/images/react.webp'
import tailwind from '../public/images/tailwind.png'
import python from '../public/images/python.png'
import cpp from '../public/images/cpp.png'
import javascript from '../public/images/javascript.png'
import me2 from '../public/images/me2.jpg'
export default function AboutPage() {
	return (
		<div className='my-20 mx-auto flex flex-col justify-center'>
			<h1 className='text-center text-4xl font-bold my-10'>About Me</h1>
			<div className='md:grid grid-cols-2 mx-20  md:mx-5 h-full'>
				<div>
					<Image src={home5} placeholder="blur" />
				</div>
				<div className='my-10 md:mx-20'>
					<div className=" w-full">
						<div className="h-full bg-gray-100 p-8 rounded">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
								<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
							</svg>
							<p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
							<a className="inline-flex items-center">
								<img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
								<span className="flex-grow flex flex-col pl-4">
									<span className="title-font font-medium text-gray-900">Alper Kamu</span>
									<span className="text-gray-500 text-sm">DESIGNER</span>
								</span>
							</a>
						</div>
					</div>
					<div className=" w-full my-10">
						<div className="h-full bg-gray-100 p-8 rounded">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
								<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
							</svg>
							<p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
							<a className="inline-flex items-center">
								<img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
								<span className="flex-grow flex flex-col pl-4">
									<span className="title-font font-medium text-gray-900">Alper Kamu</span>
									<span className="text-gray-500 text-sm">DESIGNER</span>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full flex justify-center my-10'>
			<div className='border-4 border-black w-fit pb-2 mx-5 sm:mx-auto'>
			<div className=' max-w-[600px]   sm:mx-auto overflow-hidden h-[430px]  sm:h-[670px]'>
				<div className='grid grid-rows-2 mx-auto font-bold my-10 text-lg  '>
					<div className='grid grid-cols-3 h-full break-all mx-3'>
						<div id="skills" className=' text-center h-full border-b-[4px] border-[#ff0000] transition-all cursor-pointer !left-0 fade-in-out mx-3' onClick={() => {
							document.getElementById('lang').style.borderBottom = '0px solid #8F00FF'
							document.getElementById('skills').style.borderBottom = "4px solid #ff0000"
							document.getElementById('ach').style.borderBottom = '0px'
							document.getElementById('skillbox').style.left = '0px'
							document.getElementById('langbox').style.left = '-5000px'
							document.getElementById('achbox').style.left = '-5000px'

						}}>Skills</div>
						<div id="lang" className=' text-center h-fit cursor-pointer transition-all fade-in-out mx-3' onClick={() => {
							document.getElementById('lang').style.borderBottom = '4px solid #ff0000'
							document.getElementById('skills').style.borderBottom = "0px"
							document.getElementById('ach').style.borderBottom = '0px'
							document.getElementById('skillbox').style.left = '-5000px'
							document.getElementById('langbox').style.left = '0px'
							document.getElementById('achbox').style.left = '-5000px'

						}}>Languages Known</div>
						<div id="ach" className=' text-center  h-fit transition-all cursor-pointer fade-in-out mx-3' onClick={() => {
							document.getElementById('lang').style.borderBottom = '0px solid #ff0000'
							document.getElementById('skills').style.borderBottom = "0px"
							document.getElementById('ach').style.borderBottom = '4px solid #ff0000'
							document.getElementById('skillbox').style.left = '-5000px'
							document.getElementById('achbox').style.left = '0px'
							document.getElementById('langbox').style.left = '-5000px'

						}}>Achievements</div>
					</div>
					<div className='relative '>
						<div className=' text-center my-5 h-full  mx-3  overflow-hidden'>
							<div id="skillbox" className='absolute left-[00px] transition-all fade-in-out overflow text-center grid grid-rows-3  h-full   w-full'

							>
								<div className=' grid grid-cols-3 my-5'>
									<div className='mx-5 my-auto'>
										<Image src={html} placeholder="blur" />
									</div>
									<div className='mx-5 my-auto'>
										<Image src={css} placeholder="blur" />
									</div>
									<div className='mx-5 my-auto'>
										<Image src={js} placeholder="blur" />
									</div>
									<div className='mx-5 my-auto'>
										<Image src={django} placeholder="blur" />
									</div>
									<div className='mx-5 my-auto'>
										<Image src={drf} placeholder="blur" />
									</div>
									<div className='mx-5 my-auto'>
										<Image src={react_image} placeholder="blur" />
									</div>
									<div className='mx-5 my-auto'>
										<Image src={next} placeholder="blur" />
									</div>
									<div className='mx-5 my-auto'>
										<Image src={tailwind} placeholder="blur" />
									</div>
									<div className='mx-5 my-auto'>
										<Image src={formik_image} placeholder="blur" />
									</div>
									<div className='mx-5 my-auto'>
										<Image src={react_query} placeholder="blur" />
									</div>
								</div>

							</div>
							<div id="langbox" className='absolute left-[-5000px] transition-all fade-in-out overflow text-center  w-full' text-center>
								<div id="skillbox" className='absolute left-[00px] transition-all fade-in-out overflow text-center grid grid-rows-3  h-full   w-full'

								>
									<div className=' grid grid-cols-3 my-5'>
										<div className='mx-5 my-auto'>
											<Image src={python} placeholder="blur" />
										</div>
										<div className='mx-5 my-auto'>
											<Image src={cpp} placeholder="blur" />
										</div>
										<div className='mx-5 my-auto'>
											<Image src={javascript} placeholder="blur" />
										</div>

									</div>

								</div>
							</div>
							<div id="achbox" className='absolute left-[-5000px] transition-all fade-in-out overflow text-center w-full '>
								<div id="skillbox" className='absolute left-[00px] transition-all fade-in-out overflow text-center  h-full w-full '>
									<div className='k z-[-10]   w-full h-fit absolute p-2'>
										<Image layout="responsive" src={me2} placeholder="blur" className='z-[-1] ' />
									</div>
									<div className='z-[200]  sm:h-[557px] grid grid-rows-4 m-2 p-2' >
										<div className='grid grid-cols-2 sm:h-[570px]'>
											<div className='text-sm sm:text-2xl font-medium border-2 rounded-full p-2 text-center h-fit my-auto flex items-center bg-black text-white bg-opacity-70   '>
												Qualified Jee Mains
											</div>
											<div></div>
											<div></div>
											<div className='text-sm sm:text-2xl font-medium border-2 rounded-full p-2 text-center h-fit my-auto flex items-center bg-black text-white bg-opacity-70   '>
												Qualified Jee Advance
											</div>
											<div></div>
											<div></div>
											<div className='text-sm sm:text-2xl font-medium border-2 rounded-full p-2 text-center h-fit my-auto flex items-center bg-black text-white bg-opacity-70   '>
												Qualified Ntse Stage 1
											</div>
											<div></div>
											<div></div>
											<div className='text-sm sm:text-2xl font-medium border-2 rounded-full p-2 text-center h-fit my-auto flex items-center bg-black text-white bg-opacity-70  '>
												Qualified Ntse Stage 2
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			</div>
		</div>
	)
}
