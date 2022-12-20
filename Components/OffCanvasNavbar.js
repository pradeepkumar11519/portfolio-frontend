import React from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import Context from '../Context/context'
export default function OffCanvasNavbar() {
  const { user, authtoken, Logout } = useContext(Context)
  return (
    <div id="offcanvas" className='absolute left-full bg-gradient-to-br from-indigo-500 to-rose-500 h-screen w-full transition-all fade-in-out overflow-scroll'>
      {user && authtoken ? (
        <div className='flex flex-col justify-center mt-5 '>
          <button className='rounded-full bg-white text-black px-4 font-bold text-xl pt-1 pb-3 border-2 h border-black w-fit mx-auto'>{user.username.slice(0, 1)}</button>
          <div className='flex justify-center flex-col break-all text-center text-white border-white border-2 rounded-md my-4 bg-black bg-opacity-50 p-4  font-medium mx-10  '>
            <p className=''>Username : {user.username}</p>
            <p className=''>Email : {user.email}</p>
            <p className=''>Last Logged In On : <span>{user.last_login_date}</span></p>
            <p>{user.last_login_time}</p>
          </div>
        </div>
      ) : (
        null
      )}

      <ul>
      <Link className='' href="/"><li className='my-2 mx-auto border-2 p-2 rounded-md text-center w-[200px] bg-black text-white'>Home</li></Link>
        <Link className='' href="/SignupPage"><li className='my-2 mx-auto border-2 p-2 rounded-md text-center w-[200px] bg-black text-white'>Signup</li></Link>
        {user && authtoken ? (
          <li onClick={Logout} className='my-2 mx-auto border-2 p-2 rounded-md text-center w-[200px] bg-black text-white'><button>Logout</button></li>
        ) : (
          <Link className='' href="/LoginPage"><li className='my-2 mx-auto border-2 p-2 rounded-md text-center w-[200px] bg-black text-white'>Login</li></Link>
        )}



        <Link className='' href="/AboutPage"><li className='my-2 mx-auto border-2 p-2 rounded-md text-center w-[200px] bg-black text-white'>About Me</li></Link>
        <Link className='' href="/ContactPage"><li className='my-2 mx-auto border-2 p-2 rounded-md text-center w-[200px] bg-black text-white'>Contact Me</li></Link>
      </ul>
    </div>
  )
}


export const CloseOffCanvasNavbar = () => {

  document.querySelector('#offcanvas').classList.remove('smenu')

}