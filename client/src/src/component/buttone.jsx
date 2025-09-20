import React from 'react'

const CButton = (
    {
        label,
        onClick,
        type = "button",
        variant = "primary",
        className = "",
        disabled = false,
    }
) => {
    const baseStyle = "px-4 py-1  font-medium hover:bg-red-700 transition cursor-pointer rounded-lg front-semibold transition-all duration-300 focus:outline-none";
    const variants = {
        primary:
            "bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-lg",
        secondary:
            "bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-sm hover:shadow-md",
        outline:
            "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
    };
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
        >
            {label}
        </button>
    )
}

export default CButton
