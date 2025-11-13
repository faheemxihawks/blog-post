import React from 'react'

interface ButtonProps {
    text: any;
    variant: 'orange' | 'outline' | 'white';
    className?: string;
}

function Button({text, variant, className}: ButtonProps) {
    const baseClasses = 'px-6 py-2 rounded-lg text-center cursor-pointer font-semibold hover:opacity-90 transition-opacity'
    const variants = {
        orange : 'flex items-center justify-center gap-2 bg-[#FF5E5E] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition',
        outline :'',
        white :'bg-white text-[#232536]'
    }
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`}>{text}</button>


  )
}

export default Button