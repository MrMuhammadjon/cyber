import React from 'react';
import { useAppContext } from '../../constext/AppContext';
import SamsungZfold from '../../assets/SamsunZfold.png';
import AppleWatch from '../../assets/Group 1.png';
import AppleIpad from '../../assets/IpadPro.png';
import AppleMac from '../../assets/MacBook.png';

import AOS from 'aos';
import 'aos/dist/aos.css';


export const Directions = () => {
    const { DarkMode } = useAppContext();

    const productCards = [
        {
            title: "Popular Products",
            description: "iPad combines a magnificent 10.2‑inch Retina display, incredible performance, multitasking and ease of use.",
            image: AppleWatch,
            bg: "bg-gray-500",
            dark: true,
        },
        {
            title: "Ipad Pro",
            description: "iPad combines a magnificent 10.2‑inch Retina display, incredible performance, multitasking and ease of use.",
            image: AppleIpad,
            bg: "bg-gray-600",
            dark: true,
        },
        {
            title: "Samsung Galaxy",
            description: "High-end foldable phone with excellent multitasking features and flexible screen.",
            image: SamsungZfold,
            bg: "bg-gray-700",
            dark: true,
        },
        {
            title: "Macbook Pro",
            description: "High-performance laptop with stunning display and long battery life.",
            image: AppleMac,
            bg: "bg-gray-900",
            dark: true,
        },
    ];

    return (
        <div className={`w-full h-auto py-20 ${DarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto w-[90%] max-w-[1400px]">
                {productCards.map((card, index) => (
                    <div
                        key={index}
                        className={`group shadow-md p-6 flex flex-col items-start transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl  ${card.bg}`}
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-[90%] h-48 object-contain mb-4 transform transition-transform duration-500 group-hover:scale-125"
                        />
                        <h2 className={`text-xl font-semibold mb-2 ${card.dark ? 'text-white' : 'text-black'}`}>
                            {card.title}
                        </h2>
                        <p className={`text-sm mb-4 text-start ${card.dark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {card.description}
                        </p>
                        <a href="#">
                            <button
                                className={`border px-5 py-2 rounded-md cursor-pointer transition duration-300 
        ${card.dark
                                        ? 'border-white text-white hover:bg-white hover:text-black'
                                        : 'border-black text-black hover:bg-black hover:text-white'
                                    }`}
                            >
                                Shop Now
                            </button>
                        </a>
                    </div>

                ))}
            </div>
        </div>
    );
};
