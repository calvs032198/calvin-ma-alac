import { Navigate, RouteObject } from 'react-router-dom'
import AppLayout from '../../components/layout'
import CalvinPortfolio from '../../pages/calvs'
import TriciaUmaliPortfolio from '../../pages/trish'

const PublicRoutes: RouteObject[] = [
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/calvin-manalac' replace />,
            },
            {
                path: '/calvin-manalac',
                element: <CalvinPortfolio />,
            },
            {
                path: '/tricia-umali',
                element: <TriciaUmaliPortfolio />,
            },
        ],
    },
]

export default PublicRoutes
