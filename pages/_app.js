import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { ContextProvider } from '../Context/context'
import '../styles/globals.css'
import { QueryClientProvider, Hydrate, QueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import LoadingBar from 'react-top-loading-bar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { CloseOffCanvasNavbar } from '../Components/OffCanvasNavbar'
import React from 'react'

function MyApp({ Component, pageProps }) {
	const queryClient = React.useRef(new QueryClient())
	const router = useRouter()
	const [Progress, setProgress] = React.useState(0)

	React.useEffect(() => {

		router.events.on('routeChangeStart', () => {
			setProgress(40)
			CloseOffCanvasNavbar()
		})
		router.events.on('routeChangeComplete', () => {
			setProgress(100)

		})

	}, [])
	return (
		<QueryClientProvider client={queryClient.current}>
			<Hydrate state={pageProps.dehydratedState}>
			<ContextProvider>
				<div className=''>
					<Navbar />
					<LoadingBar
              color='#E11D48'
              progress={Progress}
              height={5}
              shadowStyle={{'height':'5px','width':'20px'}}
              waitingTime={200}
              onLoaderFinished={() => setProgress(0)}
            />
					<ToastContainer/>
					<div className='pt-20'>
						<Component {...pageProps} />
					</div>
					
				</div>
			</ContextProvider>
		</Hydrate>
		<ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider >
  )
}

export default MyApp
