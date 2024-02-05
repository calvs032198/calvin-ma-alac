import * as React from 'react'
import links from './links'
import { Link, useLocation } from 'react-router-dom'
import SideBar from './Sidebar'
import { twMerge } from 'tailwind-merge'
import { images } from '../../../constants'

const NavBar: React.FunctionComponent = () => {
    const location = useLocation()
    const mainLocation = location.pathname.split('/')[1]

    return (
        <>
            <div className='hidden md:flex mx-auto bg-main-tg py-4 text-white px-8  rounded-b-lg sticky justify-center items-center'>
                <button className='rounded-full'>
                    <img className='rounded-full w-10 h-10' src={images.calvsLogo} alt='' />
                </button>
                {links.map((links, index) => (
                    <Link
                        key={index}
                        className={twMerge(
                            'px-12 hover:opacity-80 transition-all hover:font-bold font-medium',
                            location.pathname.includes(links.url) &&
                                'font-extrabold'
                        )}
                        to={`${mainLocation}${links.url}`}
                    >
                        {links.label}
                    </Link>
                ))}
            </div>
            <div className='md:hidden'>
                <SideBar />
            </div>
        </>
    )
}

export default NavBar
