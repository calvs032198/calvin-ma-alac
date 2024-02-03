import * as React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './navbar'
import Footer from './footer'
import ScrollToTop from '../Scroll-to-top'

const AppLayout: React.FunctionComponent = () => {
    return (
        <div className='bg-main-royal min-h-screen flex flex-col w-full text-white'>
            <ScrollToTop />
            <NavBar />
            <div className='w-full flex justify-center items-center'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default AppLayout
