import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { ContextProvider } from '../Context/context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <div className=''>
        <Navbar />
        <div className='pt-20'>
        <Component {...pageProps} />
        </div>
        <Footer/>
      </div>
    </ContextProvider>
  )
}

export default MyApp
