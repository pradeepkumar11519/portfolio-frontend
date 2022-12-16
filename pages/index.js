import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Comment from '../Components/Comment'
import HomeElement1 from '../Components/HomeElement1'
import home4 from '../public/images/home4.png'

export default function Home({cookies}) {
	const UsersComments = useQuery(["UsersComments"],fetchUsersComments)
	return (
		<div>
			<div className='lg:grid grid-cols-[800px_auto] '>
				<div className='relative flex lg:items-center lg:before:bg-[url("/images/wave4.png")] before:bg-[url("/images/wave5.png")]  before:w-full lg:before:h-full before:h-[500px] before:bg-cover before:bg-no-repeat before:bg-center before:absolute lg:h-full w-full before:z-[-1]  justify-center h-[400px]'>
					<h1 className='text-4xl mx-auto lg:mx-5 font-bold text-white w-[300px] my-32 lg:my-auto '>Hi,I am <span className='text-red-500'>Pradeep</span> Kumar From India</h1>
				</div>
				<div className='flex justify-center'>
					<Image className='' src={home4} placeholder="blur"/>
				</div>
			</div>
			<div className='m-20'>
				<HomeElement1/>
			</div>
			<div>
				<Comment cookies={cookies} CommentData = {UsersComments.data} />
			</div>
		</div>
	)
}

const fetchUsersComments = async () =>{
	return axios.get('https://pradeepkumarrebbavarapu705.pythonanywhere.com//api/v1/ListComment/').then((response)=>{
		return response.data
	})
}

export const getServerSideProps = async ({req,res,params}) =>{
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery(["UsersComments"],()=>{
		return fetchUsersComments()
	})
	return {
		props:{
			dehydratedState:dehydrate(queryClient),
			cookies:req.cookies
		}
	}
}