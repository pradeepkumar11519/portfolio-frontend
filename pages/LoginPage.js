import Link from "next/link";
import { useRouter } from "next/router";
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import Cookies from 'js-cookie'
import Input from "../components/Input";
import { QueryClient, useMutation } from '@tanstack/react-query'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from "react";
import Context from "../Context/context";

export default function LoginPage() {
  const initialValues = {
    email: "",
    password: "",
    username: ""
}
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),

    password: Yup.string().required('Required'),

    username: Yup.string().required('Required'),


});
const less = useLoginUser()
const onSubmit = (values) => {
    less.mutate(values)
}
  return (
    <div>
      <div className='h-screen w-full bg-[url("/images/Login3.png")] bg-repeat-round bg-center'>
        <div className='flex items-center my-auto h-full'>

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
              formik => {
                return (
                  <Form id="signup" className='max-w-[500px] sm:w-[500px] justify-center mx-auto my-auto border-2 border-black bg-white p-10 ' >
                    <h1 className='text-center text-black text-4xl my-5 font-medium'>Login</h1>
                    <Input className='w-[200px] sm:w-full my-[5px] border-b-2 bg-transparent  outline-none py-[10px]' type="text" id="username" name="username" placeholder='Username' />
                    <Input className='w-[200px] sm:w-full my-[5px] border-b-2 bg-transparent  outline-none py-[10px]' type="email" id="email" name="email" placeholder='Email' />
                    <Input className='w-[200px] sm:w-full my-[5px] border-b-2 bg-transparent  outline-none py-[10px]' type="password" id="password" name="password" placeholder='Password' />
                    <button className='sm:w-[85%] py-[10px] px-[30px] block sm:mx-auto bg-gradient-to-r from-orange-600 rounded-full text-white to-yellow-500 my-10' id="submit-btn" type="submit">LOGIN</button>
                  </Form>
                )
              }
            }
          </Formik>
        </div>
      </div>
    </div>
  )
}

const LoginUser = (user) => {
  return axios.post('api/auth/Login/', user, {
      withCredentials: true,
  })
}

const useLoginUser = () => {
  const router = useRouter()
  let { setauthtoken, setuser } = useContext(Context)
  return useMutation(LoginUser, {
      onSuccess: (response) => {
          
          setuser(response.data.user_details)
          setauthtoken({ 'access_token': response.data.access_token, 'refresh_token': response.data.refresh_token })
          
          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('refresh_token', response.data.refresh_token)
          localStorage.setItem('user_details',JSON.stringify(response.data.user_details))
          router.push('/')
          toast.success('You Have Logged In Successfully!!!', { position: toast.POSITION.TOP_LEFT })
          
      },
      onError: (error) => {
          const newerror = error.response.data
          toast.error('Invalid Credentials Please Recheck', { position: toast.POSITION.TOP_LEFT })
      }
  })
}