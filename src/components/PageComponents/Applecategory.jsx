import React from 'react'
import macbook from '../../assets/MacBook Pro 14.png'
import AirPods from '../../assets/airbods.png'
import palystation from '../../assets/palystation.png'
import applvision from '../../assets/applevision.png'


const Applecategory = () => {
    return (
        <div className="bg-gray-100 h-[500px] relative z-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">

                <div className="grid grid-rows-2">
                    <div className="relative h-[250px] group overflow-hidden">
                        <img
                            src={palystation}
                            alt="Playstation 5"
                            className="h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-20"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 bg-black/20 hover:bg-black/40 transition duration-300">
                            <h2 className="text-3xl font-semibold text-white mb-2">Playstation 5</h2>
                            <p className="text-sm text-white">Powerful CPUs, GPUs, SSD redefines your experience.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 h-[250px]">
                        <div className="relative flex items-center justify-center group overflow-hidden">
                            <img
                                src={AirPods}
                                alt="AirPods Max"
                                className="w-[50%] object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-start p-4 bg-white/30 group-hover:bg-black/40 transition duration-300">
                                <h2 className="text-xl font-bold text-black group-hover:text-white">Apple AirPods Max</h2>
                                <p className="text-xs text-gray-700 group-hover:text-gray-200">Computational audio. Powerful.</p>
                            </div>
                        </div>


                        <div className="relative flex items-center justify-center group overflow-hidden ">
                            <img
                                src={applvision}
                                alt="Vision Pro"
                                className="w-[80%] object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-start p-4 bg-black/20 group-hover:bg-black/40 transition duration-300">
                                <h2 className="text-xl font-bold text-white">Apple Vision Pro</h2>
                                <p className="text-xs text-gray-300">Immersive entertainment experience.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative h-[500px] p-4 group overflow-hidden rounded">
                    {/* Background Image */}
                    <img
                        src={macbook}
                        alt="Macbook Air"
                        className="h-[90%] object-cover rounded transition-transform duration-300 group-hover:scale-105 absolute right-0 translate-x-20  group-hover:-translate-x-0"
                    />

                    {/* Overlay content */}
                    <div className="absolute inset-0 group-hover:bg-black/40 transition duration-300 flex flex-col justify-center items-start p-8">
                        <h2 className="text-4xl font-light text-black group-hover:text-white">Macbook</h2>
                        <h2 className="text-4xl font-bold text-black group-hover:text-white">Air</h2>
                        <p className="text-sm text-gray-700 group-hover:text-gray-200 max-w-md">
                            The new 15-inch MacBook Air makes room for more with a spacious Retina display.
                        </p>
                        <button className="border border-black px-4 py-2 mt-4 rounded hover:bg-black hover:text-white transition-colors">
                            Shop Now
                        </button>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Applecategory
