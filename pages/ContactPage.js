import React, { useState } from 'react'
import Contact1 from '../public/images/Contact.jpeg'
import Image from 'next/image'
import axios from 'axios';
import {toast} from 'react-toastify'
export default function ContactPage() {
    const [contactData,setcontactData] = useState({name:null,email:null,message:null})
    
    const onSubmit = async () =>{
        await axios.post('https://pradeepkumarrebbavarapu705.pythonanywhere.com/api/v1/ContactUs/',contactData).then((response)=>{
            toast.success('Your Message Succesfully Sent')
        }).catch((error)=>{
            toast.error('Recheck Your Entered Data')
        })
    }
    return (
        <>
        <h1 className='text-4xl font-bold mb-10 mt-20 text-center'>Contact Me</h1>
        <div className='md:grid grid-cols-2 my-20 relative '>
            
            <div className='mx-10  md:relative  md:block '>
                <Image className='' src={Contact1} placeholder="blur" />
            </div>
            <div className=" px-5 mx-auto flex items-center">
                <div className=" bg-white rounded-lg p-8 flex flex-col h-fit md:ml-auto w-full mt-10 md:mt-0 relative shadow-md ">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Drop Your Message Here</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Hope You Liked The Website Do Comment And Contact Me For Any Queries And Bugs Related Issues</p>
                    <div className="relative mb-4">
                        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required onChange={(e)=>{
                            setcontactData({...contactData,name:e.target.value})
                        }} />
                    </div>
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required onChange={(e)=>{
                            setcontactData({...contactData,email:e.target.value})
                        }} />
                    </div>
                    <div className="relative mb-4">
                        <label for="message"  className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" required name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={(e)=>{
                            setcontactData({...contactData,message:e.target.value})
                        }} ></textarea>
                    </div>
                    <button disabled={!contactData.email || !contactData.name || !contactData.message} type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={onSubmit}>Submit</button>
                    
                </div>
            </div>
         
        </div>
        </>
    )
}
