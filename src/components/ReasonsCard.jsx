import React from 'react';

const ReasonsCard = ({ title, description, image }) => {
    return (
        <div className="w-79 p-10 relative h-80 text-xl rounded-lg shadow-lg bg-gradient-to-b from-purple-950 to-indigo-950   flex flex-col justify-between">
            <div className=''>
                <h2 className="text-white font-bold">{title}</h2>
                <p className="text-white pt-3">{description}</p>
            </div>
            {image && (
                <img 
                    src={image} 
                    alt={title} 
                    className="absolute bottom-4 right-4 w-12 h-12"
                />
            )}
        </div>
    );
};

export default ReasonsCard;
