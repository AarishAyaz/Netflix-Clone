import R1 from '../assets/Reason1.png';
import R2 from '../assets/Reason2.png';
import R3 from '../assets/Reason3.png';
import R4 from '../assets/Reason4.png';
import React from 'react';
import ReasonsCard from './ReasonsCard';

// Define or import the Reasons array
const Reasons = [
    {
        id: 1,
        title: "Enjoy on your TV",
        description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
        image:R1,
    },
    {
        id: 2,
        title: "Download your shows to watch offline",
        description: "Save your favorites easily and always have something to watch.",
        image:R2,
    },
    {
        id: 3,
        title: "Watch everywhere",
        description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
        image:R3,
    },
    {
        id: 4,
        title: "Create profiles for kids",
        description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
        image:R4,
    },
];

const ReasonstoJoin = () => {
    return (
        <div className='relative bg-black text-white pl-70 pr-70 space-x-8 w-screen pt-10'>
            <h1 className='text-white text-4xl ml- font-bold mb-6'>More Reasons To Join</h1>
            <div className="flex flex-wrap gap-6 justify-center">
                {Reasons.map((reason) => (
                    <ReasonsCard 
                        key={reason.id}
                        title={reason.title}
                        description={reason.description}
                        image={reason.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReasonstoJoin;
