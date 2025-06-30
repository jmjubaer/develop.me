import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
    return (
        <button className='border cursor-pointer rounded-full py-2 sm:py-2.5 pr-3 flex items-center gap-3 text-lg'>
            {children}
        </button>
    );
};

export default Button;
