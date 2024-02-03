import * as React from 'react'
import links from './links'
import { Link, useLocation } from 'react-router-dom'
import SideBar from './Sidebar'

const NavBar: React.FunctionComponent = () => {
    const location = useLocation()
    const mainLocation = location.pathname.split('/')[1]

    return (
        <>
            <div className='hidden md:block mx-auto bg-main-tg py-4 text-white px-8  rounded-b-lg sticky'>
                {links.map((links) => (
                    <Link
                        className='p-5 hover:opacity-80 transition-all'
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
