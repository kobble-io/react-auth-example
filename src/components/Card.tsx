import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={`border border-[#242424] bg-[#161616] p-5 rounded-xl mt-10 ${className}`}>
            {children}
        </div>
    );
};
