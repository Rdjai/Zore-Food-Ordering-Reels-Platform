import React from 'react'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative flex flex-col justify-center items-center h-screen w-full bg-amber-200 text-center overflow-hidden">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-lg font-medium mb-6 animate-pulse">
                <AnimatedShinyText className="text-red-700">
                    ✨ Zore App – Eat. Watch. Enjoy.
                </AnimatedShinyText>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient mb-4">
                Taste the Joy, One Bite at a Time
            </h1>


            <p className="text-xl sm:text-2xl text-gray-800 mb-8 max-w-xl px-4">
                Discover delicious food, watch fun reels, and enjoy your cravings delivered fast!
            </p>


            <div className="flex gap-4">

                <Link to="/explore" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
                    Order Now
                </Link>
                <button className="bg-white hover:bg-gray-100 text-red-500 font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
                    Explore Reels
                </button>
            </div>


            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -top-20 -left-10"></div>
                <div className="absolute w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-40 right-0"></div>
            </div>
        </div>
    );



}

export default HeroSection
