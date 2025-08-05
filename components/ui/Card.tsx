
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center ${className}`}>
            {children}
        </div>
    );
};

export default Card;
