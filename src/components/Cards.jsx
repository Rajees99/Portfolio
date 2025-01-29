import React from 'react';
import Github from '../assets/Github.png';

const Cards = ({ item }) => {
    return (
        <div className='border border-sky-400 rounded-lg w-[350px] lg:w-[400px] bg-gray-800 text-white shadow-lg'>
            <img src={item.image} alt={item.title} className='rounded-lg w-full' />
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='flex gap-3 mt-4'>
                    <a href={item.live} target='_blank' rel='noopener noreferrer' className='bg-sky-400 text-white px-3 py-2 rounded-md'>
                        Live Preview
                    </a>
                    <a href={item.github} target='_blank' rel='noopener noreferrer' className='bg-black text-white px-3 py-2 rounded-md flex gap-1 items-center'>
                        <img src={Github} alt="Github" className='w-6'/>
                        Github Link
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cards;
