import React from 'react'
import MernStack from '../assets/mernstack.png'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'

const About = () => {
    return (
        <div className='relative' id='about'>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-sky-400 font-semibold tracking-wide uppercase'>About Me</h2>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I'm Segar RajeesKumar</p>
                        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                            A Full-Stack Developer with expertise in web development, web design, UiUx, and react.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                            <div>
                                <h3 className='text-2xl font-semibold text-gray-900'>My Journey</h3>
                                <p className='mt-4 text-lg text-gray-600'>
                                My journey as a Software Developer has been driven by my love for coding and solving problems. I have learned many programming languages and worked on different projects to improve my skills. I focus on writing clean and easy-to-understand code, and I always try to stay updated with the latest technology. I am passionate about creating software that makes a real difference.
                                </p>
                            </div>
                            <div className='border border-sky-300 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-sky-400'>
                                <h3 className='text-2xl font-semibold text-sky-500'>Skills & Expertise</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    <div className='border border-sky-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-400'>
                                        <img src={Html} alt="" className='w-10' />
                                        <span className='font-semibold'>HTML</span>
                                    </div>
                                    <div className='border border-sky-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-400'>
                                        <img src={Css} alt="" className='w-8' />
                                        <span className='font-semibold'>CSS</span>
                                    </div>
                                    <div className='border border-sky-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-400'>
                                        <img src={Javascript} alt="" className='w-10' />
                                        <span className='font-semibold'>Javascript</span>
                                    </div>
                                    <div className='border border-sky-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-400'>
                                        <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>React</span>
                                    </div>
                                    <div className='border border-sky-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-400'>
                                        <img src={Tailwind} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>Tailwind Css</span>
                                    </div>
                                    <div className='border border-sky-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-400'>
                                        <img src={Bootstrap} alt="" className='w-10' />
                                        <span className='font-semibold'>Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <h3 className='text-2xl font-semibold text-gray-900'>More About Me</h3>
                        <p className='mt-4 text-lg text-gray-600'>
                        I enjoy solving problems through technology and continuously learning new skills to improve my work. With a keen eye for detail and a love for coding, I strive to create impactful digital solutions
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
