import React from 'react'

export default function OffCanvasNavbar() {
    
  return (
    <div id="offcanvas" className=' absolute left-full bg-gradient-to-br from-indigo-500 to-rose-500 h-screen w-full transition-all fade-in-out z-[20000] '>
      
    </div>
  )
}


export const CloseOffCanvasNavbar = () => {
    
    document.querySelector('#offcanvas').classList.remove('smenu')    

}