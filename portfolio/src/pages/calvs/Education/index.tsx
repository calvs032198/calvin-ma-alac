import { MdCastForEducation } from 'react-icons/md'
import AppTitle from '../../../components/App-tittle'
import * as React from 'react'

interface IEducationProps {}

const Education: React.FunctionComponent<IEducationProps> = (props) => {
    return (
        <div className='w-full h-full flex flex-col'>
            <AppTitle icon={<MdCastForEducation />} title='Education' />
            <div className="flex"></div>
        </div>
    )
}

export default Education
