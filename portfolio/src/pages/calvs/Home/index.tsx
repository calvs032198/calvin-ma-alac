import { images, logoAsArray } from '../../../constants'
import AppButton from '../../../components/App-button'
import * as React from 'react'

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (
        <div className='h-full w-full flex flex-col'>
            <div className='mx-auto p-5 h-full max-w-md flex flex-col gap-5 md:flex-row justify-center items-center'>
                <div className='flex flex-col lg:min-w-[538px] gap-5'>
                    <h1 data-aos='fade-right' className=' font-bold text-[24px] transition-all md:text-[3.2rem] max-w-[400px] uppercase'>
                        Calvin Mañalac
                    </h1>
                    <p data-aos='fade-up' className='text-justify italic font-medium border-t'>
                        Hello there! I'm Calvin, a passionate software engineer
                        and web developer with a knack for crafting elegant
                        solutions to complex problems. With a blend of
                        creativity and technical expertise, I specialize in
                        building robust and user-friendly web applications that
                        leave a lasting impression.
                    </p>
                    <AppButton data-aos='fade-up' className='w-full'>Let's get started</AppButton>
                </div>
                <div className='flex flex-col gap-5'>
                    <img
                        data-aos='fade-left'
                        src={images.profile}
                        alt=''
                        className='rounded-full object-contain max-w-[30rem]'
                    />
                </div>
            </div>
            <div className='flex flex-col w-full p-5'>
                <h3 data-aos='fade' className='font-bold'>I have expertise in:</h3>
                <div className='flex flex-wrap justify-center items-center'>
                    {logoAsArray.map((item, index) => (
                        <img
                            data-aos='fade-up'
                            data-aos-delay={(index + 1) * 100}
                            src={item}
                            className='h-[3.6rem] m-5'
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
