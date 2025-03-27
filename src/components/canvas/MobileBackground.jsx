import React from 'react';

const MobileBackground = () => {
    return (
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-primary via-[#1d1836] to-[#1d1836]">
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-20"></div>
        </div>
    );
};

export default MobileBackground; 