import * as React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout: React.FunctionComponent = () => {
    return (
        <div className=''>
            <div className=''></div>
            <div className=''>
                <Outlet />
            </div>
        </div>
    )
}

export default AppLayout
