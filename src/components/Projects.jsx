import React from 'react';
import Portfolio from '../assets/Tourism.png';
import SpicyBites from '../assets/SpicyBites.png';
import Cards from './Cards';

const Projects = () => {
    const projectJson = [
        {
            id: 1, 
            title: 'Around Lanka Tourism',
            desc: 'I created Around Lanka Tourism to help people explore the beauty of Sri Lanka. This website provides information about popular tourist spots, activities, and travel tips. Visitors can easily find details about attractions, hotels, and local experiences to plan their trip with ease.',
            image: Portfolio,
            live: "https://rajees-tourism.netlify.app/",
            github: "https://github.com/Rajees99/Around-Lanka-Tourism"
        },
        {
            id: 2, 
            title: 'Spicy Bites',
            desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
            image: SpicyBites,
            live: "https://spicybites.netlify.app/",
            github: "https://github.com/rohitsingh93300/YtSpicyBites"
        },
    ];

    return (
        <section id='projects' className='relative bg-gray-700 py-10 px-4'>
            <div className='mb-16 max-w-7xl mx-auto'>
                <h2 className='text-3xl font-bold mb-8 text-white border-b border-sky-400 w-max pb-4'>My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
                    {projectJson.map((item) => (
                        <Cards key={item.id} item={item} /> 
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
