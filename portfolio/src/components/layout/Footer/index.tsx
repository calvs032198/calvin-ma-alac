import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import * as React from 'react'
import { SiGmail } from 'react-icons/si'

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    const socials = [
        {
            icon: <FaFacebook />,
            label: 'Facebook',
            url: 'https://www.facebook.com/calvin.manalac',
        },
        {
            icon: <SiGmail />,
            label: 'Gmail',
            url: 'mailto:calvin.manalac21@gmail.com',
        },
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/mañalac-calvin-m-107054241/',
        },
        {
            icon: <FaInstagram />,
            label: 'Instagram',
            url: 'https://www.instagram.com/calvinmanalac/',
        },
    ]
    return (
        <div className='w-full  flex-col text-white bg-main-tg min-h-[14rem] flex py-12 md:px-8  px-2 gap-10'>
            <div
                data-aos='fade-right'
                className='flex flex-col justify-center max-w-[36rem] gap-3'
            >
                <h1 className='text-[50px] font-extrabold'>Get in Touch</h1>
                <p className=''>"Let's Collaborate!</p>
                <p>
                    I'm thrilled to connect with fellow developers, potential
                    clients, and enthusiasts alike. Whether you have a project
                    idea in mind, seek consultation, or just want to discuss the
                    latest tech trends, feel free to reach out. Drop me a line,
                    and let's start a conversation!"
                </p>
            </div>
            <div className='inline-flex gap-2'>
                {socials.map((item, index) => (
                    <a
                        href={item.url}
                        data-aos='fade-up'
                        key={index}
                        data-aos-delay={(index + 1) * 100}
                        target='_blank'
                        className='p-3 border border-main-sea fill-main-sea hover:opacity-90'
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Footer
