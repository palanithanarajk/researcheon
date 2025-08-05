
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = 'px-6 py-3 font-semibold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantStyles = {
        primary: 'bg-brand-primary hover:bg-blue-800 text-white focus:ring-brand-primary',
        secondary: 'bg-brand-accent hover:bg-amber-500 text-white focus:ring-brand-accent',
    };

    return (
        <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
