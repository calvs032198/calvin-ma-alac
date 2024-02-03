import React from 'react'
import TitleGenerator from '../../components/Title-Generator'
import { Outlet } from 'react-router-dom'

const CalvinPortfolio: React.FunctionComponent = () => {
    return (
        <div className='flex w-full'>
            <TitleGenerator title='Calvin Mañalac' />
            <div className='min-h-screen p-5 flex flex-col w-full m-5'>
                <Outlet />
            </div>
        </div>
    )
}

export default CalvinPortfolio
