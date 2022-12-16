import { createContext, useState } from "react";
import Cookies from 'js-cookie'
import axios from 'axios'
import Router, { useRouter } from "next/router";
import {toast} from 'react-toastify'

const Context = createContext()

export default Context

export const ContextProvider = ({children}) =>{
    const router = useRouter()
    let [IsOpen,setIsOpen] = useState(false)
    let [modalIsOpen,setmodalIsOpen] = useState(false)
    let [IsOpen1,setIsOpen1] = useState(false)
    const [user,setuser] = useState(Cookies.get('user_details')?JSON.parse(Cookies.get('user_details')):null)

    const [authtoken,setauthtoken] = useState(typeof window!=='undefined' && localStorage.getItem('access_token') || typeof window!=='undefined' && localStorage.getItem('refresh_token')?{'access_token':typeof window!=='undefined' && localStorage.getItem('access_token'),'refresh_token':typeof window!=='undefined' && localStorage.getItem('refresh_token')}:null)

    const Logout = () =>{
        setuser(null)
		Cookies.remove('user_details')
		Cookies.remove('access')
		Cookies.remove('refreh')
		localStorage.clear()
		
        axios.get('/api/auth/Logout').then((response)=>{
            router.push('/LoginPage')
            toast('Logged Out Succesfully',{position:toast.POSITION.TOP_LEFT})
        })
     }
    const ContextData =  {
        authtoken:authtoken,
        setauthtoken:setauthtoken,
        user:user,
        setuser:setuser,
        setIsOpen:setIsOpen,
        IsOpen:IsOpen,
        IsOpen1:IsOpen1,
        setIsOpen:setIsOpen,
        setIsOpen1:setIsOpen1,
        modalIsOpen:modalIsOpen,
        setmodalIsOpen:setmodalIsOpen,
        Logout:Logout,
    }
    return (
        <Context.Provider value={ContextData}>
            {children}
        </Context.Provider>
    )
}